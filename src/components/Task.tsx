import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { FormEvent } from 'react'
import { ITask } from '../App'
import styles from './Task.module.css'

interface TaskProps extends ITask {
  onToggleTasksStatus: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function Task({
  id,
  content,
  isComplete,
  onToggleTasksStatus,
  onDeleteTask
}: TaskProps) {
  function handleToggleTasksStatus(event: FormEvent) {
    event.preventDefault()
    onToggleTasksStatus(id)
  }

  function handDeleteTask(event: FormEvent) {
    event.preventDefault()
    onDeleteTask(id)
  }

  return (
    <div className={styles.task}>
      <button
        title="complete task"
        className={styles['complete-btn']}
        type="submit"
        onClick={handleToggleTasksStatus}
      >
        {isComplete ? (
          <CheckCircle
            size={24}
            weight="duotone"
            className={styles.completed}
          />
        ) : (
          <Circle size={24} weight="duotone" className={styles['to-do']} />
        )}
      </button>

      <p className={isComplete ? styles.through : ''}>{content}</p>

      <button
        title="delete task"
        type="submit"
        className={styles['delete-btn']}
        onClick={handDeleteTask}
      >
        <Trash size={24} />
      </button>
    </div>
  )
}
