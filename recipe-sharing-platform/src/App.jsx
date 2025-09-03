import React from 'react'
import HomePage from './components/HomePage'
import RecipeDetails from './components/RecipeDetail'
// "react-router-dom", "BrowserRouter", "Route", "Routes", "RecipeDetail"

const App = () => {
  return (
    <div>
      <HomePage />
      <RecipeDetails />
    </div>
  )
}

export default App