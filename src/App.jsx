import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import SearchModal from './components/SearchModal'

import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Portfolio from './pages/Portfolio'
import PortfolioPost from './pages/PortfolioPost'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import FutureGoals from './pages/FutureGoals'

function AppShell() {
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handler = e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(o => !o)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <Navbar onSearchClick={() => setSearchOpen(true)} />

      <main>
        <Routes>
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<About />} />
          <Route path="/experience"      element={<Experience />} />
          <Route path="/projects"        element={<Projects />} />
          <Route path="/portfolio"       element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<PortfolioPost />} />
          <Route path="/skills"          element={<Skills />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="/goals"           element={<FutureGoals />} />
        </Routes>
      </main>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AppShell />
        </LanguageProvider>
      </ThemeProvider>
    </HashRouter>
  )
}
