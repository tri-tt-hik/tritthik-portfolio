import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { personalInfo } from '../data/portfolioData'
import hoverBg from '../images/hover_bg.jpg'
import FluidCodeReveal from './FluidCodeReveal/FluidCodeReveal'
import { Particles } from './magicui/Particles'
import { TypingAnimation } from './magicui/TypingAnimation'
import ShinyText from './ShinyText'
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
      
      <Particles 
        className="absolute top-0 left-0 w-full h-full z-0" 
        quantity={400} 
        ease={40} 
        staticity={10000}
        color="#ffffff" 
        refresh 
      />

      <div className="hero-inner section-inner relative z-10">
        <div className="hero-content">
          <span className="hero-kicker">
            <TypingAnimation text="> _ AI / Computer Vision / Full-Stack" duration={50} />
          </span>
          <h1 className="hero-name" aria-label={personalInfo.name}>
            <span style={{ whiteSpace: 'nowrap' }}>
              {['A', 'S', 'Tritthik'].map((part, index) => (
                <ShinyText 
                  key={part} 
                  text={part + (index < 2 ? '\u00A0' : '')}
                  speed={3}
                  color="var(--ink)"
                  shineColor="var(--clay)"
                  spread={100}
                  yoyo={true}
                  pauseOnHover={true}
                />
              ))}
            </span>
            {' '}
            <ShinyText 
              text="Thilagar"
              speed={3}
              color="var(--ink)"
              shineColor="var(--clay)"
              spread={100}
              yoyo={true}
              pauseOnHover={true}
            />
          </h1>
          <p className="hero-role">{personalInfo.role}</p>
          <p className="hero-copy">{personalInfo.tagline}</p>
          <div className="hero-actions button-row">
            <a className="btn-secondary" href="#projects">View Projects</a>
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
