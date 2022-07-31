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
    <form onSubmit={handleSubmit} className='card card-body'>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Enter the name of a task"
        name="taskName"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className='btn btn-primary btn-sm' disabled={loading}>{loading ? 'Adding...' : 'Add'}</button>
    </form>
  )
}
