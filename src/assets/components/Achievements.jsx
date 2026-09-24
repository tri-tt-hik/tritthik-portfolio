import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { achievements } from '../data/portfolioData'
import GlareHover from './GlareHover'
import './Achievements.css'

gsap.registerPlugin(ScrollTrigger)

function Achievements() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.achievement-card-wrapper', {
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
          <GlareHover 
            key={item.title} 
            className="achievement-card-wrapper panel" 
            background="var(--paper)" 
            borderColor="var(--line)" 
            glareColor="#14b8a6" 
            glareOpacity={0.2} 
            style={{ padding: '0' }}
          >
            <article className="achievement-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          </GlareHover>
        ))}
      </div>
    </section>
  )
}

export default Achievements
