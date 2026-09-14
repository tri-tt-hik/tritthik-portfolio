import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { achievements } from '../data/portfolioData'
import './Achievements.css'

gsap.registerPlugin(ScrollTrigger)

function Achievements() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.achievement-card', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      opacity: 0,
      y: 36,
      scale: 0.96,
      duration: 0.7,
      ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id="achievements" className="achievements section" ref={sectionRef}>
      <div className="section-inner achievements-grid">
        <div>
          <span className="section-label">Achievement</span>
          <h2 className="section-title">Competitive discipline</h2>
        </div>
        {achievements.map(item => (
          <article className="achievement-card panel" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Achievements
