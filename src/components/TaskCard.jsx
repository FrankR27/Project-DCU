import React from 'react'
import { useTasks } from '../context/TaskContext'

export default function TaskCard ({ task }) {
  const { deleteTask, updateTask } = useTasks()

  const handleUpdate = async () => {
    updateTask(task.id, { done: !task.done })
  }

  const handleDelete = async () => {
    deleteTask(task.id)
  }

  return (
    <div className='text-center card card-body my-2'>
      <h1 className='h5'>{task.name}</h1>
      <p>{task.done ? '✔ Done' : '❌ Not done'}</p>
      <div>
        <button className='btn btn-dark btn-sm mx-2' onClick={() => handleUpdate()}>Done</button>
        <button className='btn btn-danger btn-sm' onClick={() => handleDelete()}>Delete</button>
      </div>
    </div>
  )
}
