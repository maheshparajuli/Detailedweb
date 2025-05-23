import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="app">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      <main className="main-container">
        <About id="about" setActiveSection={setActiveSection} />
        <Skills id="skills" setActiveSection={setActiveSection} />
        <Projects id="projects" setActiveSection={setActiveSection} />
        <Contacts id="contacts" setActiveSection={setActiveSection} />
      </main>
      
      <Footer />
    </div>
  )
}

export default App