import { useEffect } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import './Projects.css'

const Projects = ({ id, setActiveSection }) => {
  const projects = [
    {
      title: 'Medical Image Diagnosis',
      description: 'Developed a deep learning model using CNN to classify medical images with 95% accuracy, reducing diagnosis time by 70%.',
      tags: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Sentiment Analysis API',
      description: 'Built a REST API for sentiment analysis using BERT model, processing 1000+ requests per minute with 90% accuracy.',
      tags: ['Python', 'PyTorch', 'Flask', 'BERT'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Fraud Detection System',
      description: 'Implemented an ensemble machine learning model to detect fraudulent transactions with 98% precision.',
      tags: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Chatbot for Customer Support',
      description: 'Created an NLP-powered chatbot that handles 80% of customer queries without human intervention.',
      tags: ['Python', 'NLTK', 'Transformers', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Autonomous Vehicle Simulation',
      description: 'Developed a reinforcement learning model for autonomous vehicle navigation in simulated environments.',
      tags: ['Python', 'PyTorch', 'OpenAI Gym', 'ROS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Recommendation Engine',
      description: 'Designed a hybrid recommendation system combining collaborative and content-based filtering for e-commerce.',
      tags: ['Python', 'Surprise', 'NLP', 'Flask'],
      github: '#',
      demo: '#'
    }
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
    <section id={id} className="projects-section">
      <h2 className="section-title">My Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">
              {project.description}
            </p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FiGithub /> Code
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FiExternalLink /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects