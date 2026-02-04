import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import ThemeToggle from './Components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <main className='min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white'>
      <Outlet/>
     </main>
    </>
  )
}

export default App
