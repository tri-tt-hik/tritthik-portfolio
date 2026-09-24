import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { personalInfo } from '../data/portfolioData'
import GlareHover from './GlareHover'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.contact-card-wrapper, .contact-link-wrapper', {
      scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out'
    })
  }, { scope: sectionRef })

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="section-inner contact-grid">
        <GlareHover 
          className="contact-card-wrapper panel" 
          background="var(--paper)" 
          borderColor="var(--line)" 
          glareColor="#14b8a6" 
          glareOpacity={0.2}
          style={{ padding: '0' }}
        >
          <article className="contact-card">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let us build something practical.</h2>
            <p className="section-copy">
              Based in {personalInfo.location}. Open to AI, computer vision, full-stack, and conference or product web work.
            </p>
            <div className="button-row contact-actions">
              <a className="btn-secondary" href={`mailto:${personalInfo.email}`}>Email Me</a>
              <a className="btn-secondary" href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn-secondary" href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </article>
        </GlareHover>
        <div className="contact-links">
          <GlareHover className="contact-link-wrapper panel" background="var(--paper)" borderColor="var(--line)" glareColor="#38bdf8" glareOpacity={0.25} style={{ padding: '0' }}>
            <a className="contact-link" href={`mailto:${personalInfo.email}`}>
              <span>Email</span>
              <strong>{personalInfo.email}</strong>
            </a>
          </GlareHover>
          <GlareHover className="contact-link-wrapper panel" background="var(--paper)" borderColor="var(--line)" glareColor="#38bdf8" glareOpacity={0.25} style={{ padding: '0' }}>
            <a className="contact-link" href={`tel:${personalInfo.phone.replaceAll(' ', '')}`}>
              <span>Phone</span>
              <strong>{personalInfo.phone}</strong>
            </a>
          </GlareHover>
          <GlareHover className="contact-link-wrapper panel" background="var(--paper)" borderColor="var(--line)" glareColor="#38bdf8" glareOpacity={0.25} style={{ padding: '0' }}>
            <div className="contact-link">
              <span>Location</span>
              <strong>{personalInfo.location}</strong>
            </div>
          </GlareHover>
        </div>
      </div>
    </section>
  )
}

export default Contact
