import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import InfoKidsView from './views/InfoKidsView'
import { HomeView } from './views/HomeView'
import { ContactView } from './views/ContactView'


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
          <Route path="/" element={<HomeView />} />
          <Route path="/infokids" element={<InfoKidsView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>

      </main>
    </>
  )
}

export default App

