import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { focusAreas, personalInfo } from '../data/portfolioData'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.to('.about-orbit', {
      rotate: 360,
      duration: 18,
      ease: 'none',
      repeat: -1
    })

    gsap.from('.about-copy, .focus-card', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      opacity: 0,
      y: 34,
      stagger: 0.12,
      duration: 0.7,
      ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="about-orbit" aria-hidden="true" />
      <div className="section-inner about-grid">
        <div>
          <span className="section-label">About</span>
          <h2 className="section-title">Engineering useful AI into clean web experiences.</h2>
        </div>
        <div className="about-copy">
          <p className="section-copy">{personalInfo.summary}</p>
          <div className="focus-grid">
            {focusAreas.map(area => (
              <article className="focus-card panel" key={area.title}>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
