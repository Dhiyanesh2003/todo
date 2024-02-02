import './App.css';
import Navbar from './components/Navbar/Navbar';
import Timesheet from './components/Timesheet/Timesheet';
import React, { useState } from 'react'

function App() {

  const [showNavbar, setShowNavbar] = useState(true)

  const closeNavbar = () => {
    setShowNavbar(false)
  }

  const openNavbar = () => {
    setShowNavbar(true)
  }

  return (
    <div className="App">
      {
        showNavbar ? (
          <Navbar nav = {showNavbar} close = {closeNavbar} />
        ) : null
      }
      <Timesheet nav = {showNavbar} open = {openNavbar} />
    </div>
  );
}

export default App;
