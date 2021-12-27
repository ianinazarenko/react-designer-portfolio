import React from 'react'
import './App.css'
import NavBar from './components/common/NavBar'
import { Home, About, Skills, Portfolio, Contacts } from './pages'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Contacts />
    </div>
  )
}

export default App
