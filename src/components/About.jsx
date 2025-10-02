import React from 'react'
import { FaCode, FaLightbulb, FaRocket } from 'react-icons/fa'
import './About.css'

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code is my priority.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem Solver',
      description: 'I enjoy tackling complex challenges and finding creative solutions.',
    },
    {
      icon: <FaRocket />,
      title: 'Fast Learner',
      description: 'Constantly learning new technologies and staying updated with industry trends.',
    },
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software engineer with a strong foundation in full-stack development.
              With experience in building web applications from concept to deployment, I specialize
              in creating user-friendly interfaces and robust backend systems.
            </p>
            <p>
              My journey in software development began with a love for building things. I found software 
              to be a great way to express my creativity and build things that can help people. 
              It has also lead to a deep love of problem solving, learning new things, and sharing
              that knowledge with others. 
            </p>
            <p>
              When I'm not coding, you can find me reading sci-fi and fantasy novels, playing video games, or spending time with my family.
            </p>
          </div>
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

