import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { personalInfo } from '../data/portfolioData'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.contact-card, .contact-link', {
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
        <article className="contact-card panel">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let us build something practical.</h2>
          <p className="section-copy">
            Based in {personalInfo.location}. Open to AI, computer vision, full-stack, and conference or product web work.
          </p>
          <div className="button-row contact-actions">
            <a className="btn-primary" href={`mailto:${personalInfo.email}`}>Email Me</a>
            <a className="btn-secondary" href={personalInfo.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn-secondary" href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </article>
        <div className="contact-links">
          <a className="contact-link panel" href={`mailto:${personalInfo.email}`}>
            <span>Email</span>
            <strong>{personalInfo.email}</strong>
          </a>
          <a className="contact-link panel" href={`tel:${personalInfo.phone.replaceAll(' ', '')}`}>
            <span>Phone</span>
            <strong>{personalInfo.phone}</strong>
          </a>
          <div className="contact-link panel">
            <span>Location</span>
            <strong>{personalInfo.location}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
