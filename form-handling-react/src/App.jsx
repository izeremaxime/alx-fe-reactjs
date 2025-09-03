import React from 'react'
import { Routes, Route } from "react-router-dom"
import FormikForm from './components/FormikForm'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<FormikForm/>} />
      </Routes>
    </div>
  )
}

export default App