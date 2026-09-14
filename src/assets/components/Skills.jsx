import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data/portfolioData'
import InteractiveSkillsCube from './InteractiveSkillsCube'
import { MagicCard } from './magicui/MagicCard'
import { Particles } from './magicui/Particles'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  { label: 'Programming Languages', items: skills.languages, color: 'var(--teal)' },
  { label: 'Machine Learning & AI', items: skills.aiml, color: '#a85038' },
  { label: 'Frameworks & Libraries', items: skills.frameworks, color: 'var(--blue)' },
  { label: 'Web Technologies', items: skills.web, color: '#bd8f35' },
  { label: 'Big Data & Tools', items: skills.tools, color: '#6d4fb8' }
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
    <section id="skills" className="skills-section section relative overflow-hidden" ref={sectionRef}>
      <Particles 
        className="absolute inset-0 z-0" 
        quantity={300} 
        ease={40} 
        color="#ffffff" 
        refresh 
      />
      <div className="section-inner skills-layout relative z-10">
        <div className="skills-content">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">Tools I work with</h2>
          <div className="skills-grid">
            {skillCategories.map(cat => (
              <MagicCard
                key={cat.label}
                className="skill-group panel flex flex-col bg-surface/50 border-line/50 p-6"
                gradientColor={cat.color}
              >
                <article>
                  <h3>{cat.label}</h3>
                  <div className="skill-pills">
                    {cat.items.map(item => (
                      <span className="skill-pill" key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              </MagicCard>
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
