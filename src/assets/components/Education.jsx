import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { education } from '../data/portfolioData'
import './Education.css'

gsap.registerPlugin(ScrollTrigger)

function Education() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.education-card', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      opacity: 0,
      x: -42,
      stagger: 0.14,
      duration: 0.65,
      ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id="education" className="education section" ref={sectionRef}>
      <div className="section-inner">
        <span className="section-label">Education</span>
        <h2 className="section-title">Academic foundation</h2>
        <div className="education-list">
          {education.map(item => (
            <article className="education-card panel" key={item.institution}>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </div>
              <div className="education-meta">
                <span>{item.year}</span>
                <strong>{item.grade}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
