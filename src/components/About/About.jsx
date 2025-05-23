import { useEffect } from 'react'
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi'
import './About.css'


const About = ({ id, setActiveSection }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        })
      },
      { threshold: 0.5 }
    )
    
    const section = document.getElementById(id)
    if (section) observer.observe(section)
    
    return () => {
      if (section) observer.unobserve(section)
    }
  }, [id, setActiveSection])

  return (
    <section id={id} className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <div className="about-image-bg"></div>
          <img 
            src="assets/viber_image_2025-05-22_15-44-43-982.jpg" 
            alt="Profile" 
            className="about-image"
          />
        </div>
        
        <div className="about-content">
          <h1 className="about-title">
            Hi, I'm <span className="text-primary">MAHESH PARAJULI</span>
          </h1>
          <h2 className="about-subtitle">
            AI/ML Engineer & Data Scientist
          </h2>
          
          <p className="about-text">
            I'm passionate about building intelligent systems that solve real-world problems. 
            With 5+ years of experience in machine learning and deep learning, I specialize in 
            developing and deploying AI models that drive business value.
          </p>
          
          <div className="about-buttons">
            <a href="#contacts" className="btn-primary">
              Contact Me
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              <FiDownload /> Download CV
            </a>
          </div>
          
          <div className="about-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About