import React, { useEffect } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router-dom'
import { TaskForm } from '../src/components/TaskForm'
import { TaskList } from '../src/components/TaskList'

export function Home () {
  const navigate = useNavigate()

  useEffect(() => {
    if (!supabase.auth.user()) {
      navigate('/login')
    }
  }, [navigate])
  return (
    <div>
      Home
      <button
        onClick={() => {
          supabase.auth.signOut()
        }}
      >
        Logout
      </button>
      <TaskForm />
      <TaskList />
    </div>
  )
}
