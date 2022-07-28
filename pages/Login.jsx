import React, { useState, useEffect } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await supabase.auth.signIn({
        email
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (supabase.auth.user()) {
      navigate('/')
    }
  }, [navigate])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  )
}
