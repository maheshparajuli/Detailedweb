import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="footer-logo-icon">AI</div>
            <span className="footer-logo-text">AI/ML Engineer</span>
          </div>
          <p className="footer-text">Building intelligent solutions for complex problems.</p>
        </div>
        
        <div className="footer-social">
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FiLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FiTwitter size={20} />
            </a>
            <a href="mailto:contact@aiengineer.com">
              <FiMail size={20} />
            </a>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} AI/ML Engineer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer