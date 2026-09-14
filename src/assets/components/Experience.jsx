import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'motion/react'
import { experience } from '../data/portfolioData'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

function Experience() {
  const sectionRef = useRef(null)
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

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
          <h2 className="section-title">Professional Experience</h2>
      </div>
      <div className="experience-stack">
          <span className="experience-marker" aria-hidden="true" />
          {experience.map((item, index) => (
            <article className="experience-card panel" key={`${item.company}-${item.year}`}>
              <button 
                className={`experience-dot ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => toggleExpand(index)}
                aria-label="Toggle details"
              />
              <span>{item.year}</span>
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.desc}</p>

              <AnimatePresence>
                {expandedIndex === index && item.details && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <ul className="experience-details">
                      {item.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    {item.github && (
                      <a href={item.github} className="experience-github" target="_blank" rel="noreferrer">
                        GitHub repo
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
