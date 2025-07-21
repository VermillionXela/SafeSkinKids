import React from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { HomeView } from './views/HomeView'

function App() {
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

