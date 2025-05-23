

import { useEffect } from 'react'
import './Skills.css'

const Skills = ({ id, setActiveSection }) => {
  const skills = [
    { name: 'Python', level: 'Intermediate' },
    { name: 'TensorFlow', level: 'Intermediate' },
    { name: 'PyTorch', level: 'Intermediate' },
    { name: 'Scikit-learn', level: 'Intermediate' },
    { name: 'Pandas/Numpy', level: 'Intermediate' },
    { name: 'Data Visualization', level: 'Intermediate' },
    { name: 'Natural Language Processing', level: 'Beginner' },
    { name: 'Computer Vision', level: 'Beginner' },
    { name: 'Deep Learning', level: 'Intermediate' },
    { name: 'SQL', level: 'Beginner' },
    { name: 'Docker', level: 'Beginner' },
    { name: 'AWS/GCP', level: 'Beginner' },
  ]

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
    <section id={id} className="skills-section">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="skill-bar">
              <div 
                className={`skill-progress ${skill.level.toLowerCase()}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
