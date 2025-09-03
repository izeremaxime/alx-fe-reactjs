import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar' 
import Search from './components/Search'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </div>
      
    </Router>
  )
}

export default App
