import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { HomeView } from './views/HomeView'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])
  
  return (
    <>
      <Navbar />

      <main >
        <Routes>
        <Route path="/SafeSkinKids/" element={<HomeView />} />
        </Routes>
      </main>
    </>
  )
}

export default App

