import React from 'react'
import NavBar from './components/common/NavBar'
import SideBar from './components/common/SideBar'
import { Home, About, Skills, Portfolio, Contacts } from './pages'

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  )
}

export default App
