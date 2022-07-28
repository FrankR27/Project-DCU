import { createContext, useContext, useState } from 'react'
import { supabase } from '../../supabase/client'

export const TaskContext = createContext()

export const useTasks = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTasks must be used within a TaskContextProvider')
  }
  return context
}

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  const getTaskList = async (done = false) => {
    const user = await supabase.auth.user()
    const { error, data } = await supabase
      .from('tasks')
      .select()
      .eq('done', done)
      .eq('userId', user.id)
      .order('id', { ascending: true })

    if (error) throw new Error(error)
    setTasks(data)
  }

  const addTask = async (taskName) => {
    setLoading(true)
    try {
      const user = await supabase.auth.user()
      const { error, data } = await supabase
        .from('tasks')
        .insert({ name: taskName, userId: user.id })
      if (error) throw error
      setTasks([...tasks, ...data])
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, getTaskList, addTask, loading }}>
      {children}
    </TaskContext.Provider>
  )
}
