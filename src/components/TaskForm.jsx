import React, { useState } from 'react'
import { useTasks } from '../context/TaskContext'

export function TaskForm () {
  const { addTask, loading } = useTasks()
  const [taskName, setTaskName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addTask(taskName)
    setTaskName('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name of a task"
          name="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button disabled={loading}>{loading ? 'Adding...' : 'Add'}</button>
      </form>
    </div>
  )
}
