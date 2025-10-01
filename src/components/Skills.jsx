import React from 'react'
import {
  FaReact,
  FaNode,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiVuedotjs,
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'Vue.js', icon: <SiVuedotjs />, color: '#06B6D4' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNode />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#000000' },
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
      ],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies I work with to bring ideas to life
        </p>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

