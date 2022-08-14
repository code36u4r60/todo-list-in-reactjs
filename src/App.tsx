import styles from './App.module.css'

import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

// 🗂️🛢️ From a super especial database 😅
import { tasks as dbTasks } from './db.js'
import { TasksBoard } from './components/TasksBoard'

export interface ITask {
  id: string
  content: string
  isComplete: boolean
}

function App() {
  const [tasks, setTask] = useState<ITask[]>(dbTasks)

  function addNewTask(content: string): void {
    const task: ITask = {
      id: uuid(),
      content,
      isComplete: false
    }
    setTask(state => [task, ...state])
  }

  function deleteTask(id: string): void {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTask(filteredTasks)
  }

  function toggleTasksStatus(id: string): void {
    let updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    ) as ITask[]

    updatedTasks = updatedTasks.sort((a, b) =>
      a.isComplete && b.isComplete ? 0 : !a.isComplete && b.isComplete ? -1 : 1
    )

    setTask(updatedTasks)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask onCreateNewTask={addNewTask} />
          <TasksBoard
            tasks={tasks}
            onDeleteTask={deleteTask}
            onToggleTasksStatus={toggleTasksStatus}
          />
        </main>
      </div>
    </>
  )
}

export default App
