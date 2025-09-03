import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 p-4">
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile /> 
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </>
  )
}

export default App
