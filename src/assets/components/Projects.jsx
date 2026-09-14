import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data/portfolioData'
import { MagicCard } from './magicui/MagicCard'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const sectionRef = useRef(null)

  const handlePointerMove = event => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--cursor-x', `${event.clientX - rect.left}px`)
    card.style.setProperty('--cursor-y', `${event.clientY - rect.top}px`)
  }

  useGSAP(() => {
    gsap.from('.project-wrapper', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
      opacity: 0,
      y: 58,
      stagger: 0.16,
      duration: 0.75,
      ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id="projects" className="projects-section section" ref={sectionRef}>
      <div className="section-inner">
        <span className="section-label">Projects</span>
        <h2 className="section-title">Applied AI and full-stack builds</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.title} className="project-wrapper">
              <MagicCard
                className={`project-card project-card-${index + 1} flex flex-col bg-surface/50 border-line/50 p-6 h-full`}
                gradientColor="var(--teal-soft)"
              >
                <article onPointerMove={handlePointerMove} className="flex flex-col h-full">
                  <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-desc">{project.desc}</p>
                  <ul className="project-highlights">
                    {project.highlights.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="card-tech mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href={project.github} className="card-link mt-auto" target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </article>
              </MagicCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
