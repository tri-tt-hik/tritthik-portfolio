import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data/portfolioData'
import InteractiveSkillsCube from './InteractiveSkillsCube'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  { label: 'Programming Languages', items: skills.languages },
  { label: 'Machine Learning & AI', items: skills.aiml },
  { label: 'Frameworks & Libraries', items: skills.frameworks },
  { label: 'Web Technologies', items: skills.web },
  { label: 'Big Data & Tools', items: skills.tools }
]

function Skills() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.skill-group', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      opacity: 0,
      y: 42,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power3.out'
    })
    gsap.from('.skill-pill', {
      scrollTrigger: { trigger: '.skills-grid', start: 'top 68%' },
      opacity: 0,
      scale: 0.85,
      stagger: 0.025,
      duration: 0.34,
      ease: 'back.out(1.5)'
    })
  }, { scope: sectionRef })

  return (
    <section id="skills" className="skills-section section" ref={sectionRef}>
      <div className="section-inner skills-layout">
        <div className="skills-content">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">Tools I work with</h2>
          <div className="skills-grid">
            {skillCategories.map(cat => (
              <article className="skill-group panel" key={cat.label}>
                <h3>{cat.label}</h3>
                <div className="skill-pills">
                  {cat.items.map(item => (
                    <span className="skill-pill" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <div className="skills-interactive">
          <InteractiveSkillsCube categories={skillCategories} />
        </div>
      </div>
    </section>
  )
}

export default Skills
