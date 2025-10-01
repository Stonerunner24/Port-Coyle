import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with cart functionality, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1-demo.com',
      image: 'gradient1',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2-demo.com',
      image: 'gradient2',
    },
    {
      title: 'Weather Dashboard',
      description: 'A modern weather application with location-based forecasts, interactive maps, and weather alerts.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Tailwind'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3-demo.com',
      image: 'gradient3',
    },
    {
      title: 'Portfolio CMS',
      description: 'A content management system for developers to showcase their work with a customizable theme engine.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
      github: 'https://github.com/yourusername/project4',
      live: 'https://project4-demo.com',
      image: 'gradient4',
    },
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects that showcase my skills and experience
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className={`project-image ${project.image}`}>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View code">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

