import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './NewTask.module.css'

interface NewTaskProps {
  onCreateNewTask: (id: string) => void
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  const isNewTaskEmpty = !newTaskText

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>): void {
    event.target.setCustomValidity(
      'Por favor, escreva uma tarefa primeiro. Este campo é obrigatório.'
    )
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    onCreateNewTask(newTaskText)
    setNewTaskText('')
  }

  return (
    <div className={styles['new-task']}>
      <input
        type="text"
        onChange={handleNewTaskChange}
        value={newTaskText}
        placeholder="Adicione uma nova tarefa"
        onInvalid={handleNewTaskInvalid}
        required
      />

      <button
        type="submit"
        onClick={handleCreateNewTask}
        disabled={isNewTaskEmpty}
      >
        Criar <PlusCircle size={16} weight="bold" />
      </button>
    </div>
  )
}
