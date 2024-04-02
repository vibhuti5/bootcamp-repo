// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

//USED FOR "/users" TABLE
import { createContext, useContext, useEffect, useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataContext = createContext<any>()

export function useData() {
  return useContext(DataContext)
}

export function UserContext({ children }) {
  const storedData = JSON.parse(localStorage.getItem('userData')) || {}
  const [data, setData] = useState(storedData)
  const [updateTrigger, setUpdateTrigger] = useState(false)

  const updateData = (newData) => {
    const updatedData = { ...data, ...newData }
    setData(updatedData)
    localStorage.setItem('userData', JSON.stringify(updatedData))
    setUpdateTrigger((prev) => !prev)
  }

  useEffect(() => {
    // Optional: Do any cleanup or side effects when the component is unmounted
    return () => {
      // Cleanup code here
    }
  }, [])

  return (
    <DataContext.Provider value={{ data, updateData, updateTrigger }}>
      {children}
    </DataContext.Provider>
  )
}
