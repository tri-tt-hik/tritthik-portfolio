import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { personalInfo } from '../data/portfolioData'
import hoverBg from '../images/hover_bg.jpg'
import FluidCodeReveal from './FluidCodeReveal/FluidCodeReveal'
import './Hero.css'

function Hero() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-kicker', { opacity: 0, y: 18, duration: 0.55 })
      .from('.hero-name span', { opacity: 0, y: 90, rotateX: -55, stagger: 0.08, duration: 0.8 }, '-=0.2')
      .from('.hero-role, .hero-copy, .hero-actions, .hero-metric', { opacity: 0, y: 28, stagger: 0.1, duration: 0.55 }, '-=0.35')
  }, { scope: sectionRef })

  return (
    <section
      id="home"
      className="hero section"
      ref={sectionRef}
    >
      <FluidCodeReveal imageUrl={hoverBg} />
      <div className="hero-inner section-inner">
        <div className="hero-content">
          <span className="hero-kicker">AI / Computer Vision / Full-Stack</span>
          <h1 className="hero-name" aria-label={personalInfo.name}>
            {personalInfo.name.split(' ').map(part => (
              <span key={part}>{part}</span>
            ))}
          </h1>
          <p className="hero-role">{personalInfo.role}</p>
          <p className="hero-copy">{personalInfo.tagline}</p>
          <div className="hero-actions button-row">
            <a className="btn-primary" href="#projects">View Projects</a>
            <a className="btn-secondary" href={`mailto:${personalInfo.email}`}>Contact Me</a>
          </div>
          <div className="hero-metrics" aria-label="Resume highlights">
            <div className="hero-metric">
              <strong>8.45</strong>
              <span>CGPA</span>
            </div>
            <div className="hero-metric">
              <strong>3</strong>
              <span>Applied AI Projects</span>
            </div>
            <div className="hero-metric">
              <strong>2026</strong>
              <span>ICCIDS Web Team</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Hero
