import React, { useEffect } from 'react'
import { useTasks } from '../context/TaskContext'

export function TaskList () {
  const { tasks, getTaskList } = useTasks()
  useEffect(() => {
    getTaskList()
  }, [])

  return (
    <div>
      <h1>TaskList</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.name}</h1>
          <p>{JSON.stringify(task.done)}</p>
        </div>
      ))}
    </div>
  )
}
