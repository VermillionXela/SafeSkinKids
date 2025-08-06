import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import {ScrollToTop} from "./components/ScrollToTop"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import {InfoKidsView} from './views/InfoKidsView'
import { HomeView } from './views/HomeView'
import { ContactView } from './views/ContactView'
import { TeamView } from './views/TeamView'
import {InfoParentsView} from './views/InfoParentsView'


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
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/infokids" element={<InfoKidsView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/team" element={<TeamView />} />
          <Route path="/infoparents" element={<InfoParentsView />} />
        </Routes>
      </main>
    </>
  )
}

export default App

