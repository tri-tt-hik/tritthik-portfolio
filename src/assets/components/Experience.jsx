import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data/portfolioData'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

function Experience() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.experience-marker', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
      scaleY: 0,
      transformOrigin: 'top',
      duration: 0.9,
      ease: 'power3.out'
    })

    gsap.from('.experience-card', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      opacity: 0,
      y: 38,
      rotateX: -10,
      duration: 0.7,
      ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="section-inner experience-grid">
        <div>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Conference web work</h2>
      </div>
      <div className="experience-stack">
          <span className="experience-marker" aria-hidden="true" />
          {experience.map(item => (
            <article className="experience-card panel" key={`${item.company}-${item.year}`}>
              <span>{item.year}</span>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
