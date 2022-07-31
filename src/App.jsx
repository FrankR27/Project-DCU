import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Login } from '../pages/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { supabase } from '../supabase/client'
import { TaskContextProvider } from './context/TaskContext'

function App () {
  const navigate = useNavigate()
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, sesion) => {
      if (sesion) {
        navigate('/')
      } else {
        navigate('/login')
      }
    })
  }, [])
  return (
    <div className="App">
      <TaskContextProvider>
      <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </TaskContextProvider>
    </div>
  )
}

export default App
