import { useEffect, useRef, useState } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import './Contacts.css'

const Contacts = ({ id, setActiveSection }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const formRef = useRef(null)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
      formRef.current.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={id} className="contacts-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contacts-container">
        <div className="contacts-info">
          <h3 className="contacts-subtitle">Contact Information</h3>
          
          <div className="contacts-items">
            <div className="contacts-item">
              <div className="contacts-icon">
                <FiMail size={20} />
              </div>
              <div>
                <h4 className="contacts-item-title">Email</h4>
                <a href="mailto:contact@aiengineer.com" className="contacts-item-value">
                  contact@aiengineer.com
                </a>
              </div>
            </div>
            
            <div className="contacts-item">
              <div className="contacts-icon">
                <FiMapPin size={20} />
              </div>
              <div>
                <h4 className="contacts-item-title">Location</h4>
                <p className="contacts-item-value">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="contacts-item">
              <div className="contacts-icon">
                <FiPhone size={20} />
              </div>
              <div>
                <h4 className="contacts-item-title">Phone</h4>
                <a href="tel:+1234567890" className="contacts-item-value">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contacts-form">
          <form ref={formRef} onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-btn"
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
            
            {submitSuccess && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts