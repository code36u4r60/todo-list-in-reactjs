import styles from './TasksBoard.module.css'

import { ITask } from '../App'
import { Task } from './Task'
import { EmptyTasks } from './EmptyTasks'

interface TasksBoardProps {
  tasks: ITask[]
  onToggleTasksStatus: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function TasksBoard({ tasks, ...props }: TasksBoardProps) {
  const completeTasks = tasks.filter(task => task.isComplete)

  return (
    <div className={styles['tasks-board']}>
      <header>
        <p className={styles['created-tasks']}>
          Tarefas criadas <span> {tasks.length} </span>
        </p>
        <p className={styles['complete-tasks']}>
          Concluídas{' '}
          <span>
            {completeTasks.length}{' '}
            {tasks.length ? <span>de {tasks.length}</span> : ''}
          </span>
        </p>
      </header>
      {tasks.length ? (
        <div className={styles.tasks}>
          {tasks.map(task => (
            <Task key={task.id} {...task} {...props} />
          ))}
        </div>
      ) : (
        <EmptyTasks />
      )}
    </div>
  )
}
