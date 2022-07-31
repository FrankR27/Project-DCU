import React, { useEffect } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const navigate = useNavigate()

  useEffect(() => {
    if (supabase.auth.user()) {
      navigate('/')
    }
  }, [navigate])

  async function signInWithGoogle (e) {
    e.preventDefault()
    try {
      await supabase.auth.signIn({
        provider: 'google'
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row pt-4">
      <div className="col-md-6 offset-md-3">
        <form className="App card card-body" onSubmit={signInWithGoogle}>
          <h1 className="">Hello, please sign in!</h1>
          <button className="btn btn-primary mt-2">Sign In</button>
        </form>
      </div>
    </div>
  )
}
