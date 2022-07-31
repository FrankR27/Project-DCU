import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router-dom'
import { TaskForm } from '../src/components/TaskForm'
import { TaskList } from '../src/components/TaskList'

export function Home () {
  const [showTaskDone, setShowTaskDone] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate('/login')
    }
  }, [navigate])
  return (
    <div className="row pt-4">
      <div className="col-md-4 offset-md-4">
        <TaskForm />
        <header className="d-flex justify-content-between my-3">
          <span className="h5">
            {showTaskDone ? 'Task done' : 'Task to do'}
          </span>
          <button
            className="btn btn-dark btn-sm"
            onClick={() => setShowTaskDone(!showTaskDone)}
          >
            {showTaskDone ? 'Show Task to do' : 'Show Task done'}
          </button>
        </header>
        <TaskList done={showTaskDone} />
      </div>
    </div>
  )
}
