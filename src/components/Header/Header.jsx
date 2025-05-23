import { useEffect } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import './Header.css'

const Header = ({ darkMode, toggleDarkMode, activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contacts', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute('id')
        }
      })
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo">MP</div>
          <span className="logo-text">Mahesh Parajuli</span>
        </div>
        
        <nav className="nav">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
    </header>
  )
}

export default Header