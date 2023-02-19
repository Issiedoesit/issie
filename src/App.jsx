import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import useThemeStore from './hooks/stores/useThemeStore'

function App() {

  const { primary, variant } = useThemeStore(state=>state.theme)
  const theme = useThemeStore(state=>state.theme)
  

  return (
    <div className={`App ${variant == 'light' ? 'bg-white' : 'bg-black'} scroll-smooth font-Raleway min-h-screen text-theme-text-color `}>
        <div>
            <Nav />
        </div>
        <div>
          <Routes>
            <Route path='/' index element={<Home />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
