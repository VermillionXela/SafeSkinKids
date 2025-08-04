import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import InfoKidsView from './views/InfoKidsView'
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
        <Route path="/SafeSkinKids/infokids" element={<InfoKidsView />} />
        </Routes>
      </main>
    </>
  )
}

export default App

