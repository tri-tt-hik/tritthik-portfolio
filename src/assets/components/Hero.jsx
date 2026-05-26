import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { personalInfo } from '../data/portfolioData'
import hoverBg from '../images/hover_bg.jpg'
import './Hero.css'

function Hero() {
  const sectionRef = useRef(null)
  const hoverTween = useRef(null)

  const updateHeroCursor = event => {
    const hero = sectionRef.current
    if (!hero) return

    const rect = hero.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    hero.style.setProperty('--hero-x', `${x}px`)
    hero.style.setProperty('--hero-y', `${y}px`)

    gsap.to('.hero-hover-bg', {
      backgroundPosition: `${50 + (x / rect.width - 0.5) * 7}% ${50 + (y / rect.height - 0.5) * 7}%`,
      duration: 0.55,
      ease: 'power3.out'
    })
  }

  const showHoverBackground = event => {
    const hero = sectionRef.current
    if (!hero) return

    updateHeroCursor(event)

    hoverTween.current?.kill()
    hoverTween.current = gsap.to('.hero-hover-bg', {
      opacity: 1,
      scale: 1,
      clipPath: 'circle(180px at var(--hero-x) var(--hero-y))',
      duration: 0.65,
      ease: 'power3.out'
    })
  }

  const moveHoverBackground = event => {
    updateHeroCursor(event)
  }

  const hideHoverBackground = () => {
    hoverTween.current?.kill()
    hoverTween.current = gsap.to('.hero-hover-bg', {
      opacity: 0,
      scale: 1.04,
      clipPath: 'circle(0px at var(--hero-x) var(--hero-y))',
      duration: 0.45,
      ease: 'power2.inOut'
    })
  }

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from('.hero-kicker', { opacity: 0, y: 18, duration: 0.55 })
      .from('.hero-name span', { opacity: 0, y: 90, rotateX: -55, stagger: 0.08, duration: 0.8 }, '-=0.2')
      .from('.hero-role, .hero-copy, .hero-actions, .hero-metric', { opacity: 0, y: 28, stagger: 0.1, duration: 0.55 }, '-=0.35')
      .from('.hero-visual', { opacity: 0, scale: 0.86, rotateY: -18, duration: 0.8 }, '-=0.65')

    gsap.to('.cube', {
      rotateX: 360,
      rotateY: 360,
      duration: 18,
      ease: 'none',
      repeat: -1
    })

    gsap.to('.orbit-dot', {
      rotate: 360,
      transformOrigin: '150px 150px',
      duration: 9,
      ease: 'none',
      repeat: -1
    })
  }, { scope: sectionRef })

  return (
    <section
      id="home"
      className="hero section"
      ref={sectionRef}
      onPointerEnter={showHoverBackground}
      onPointerMove={moveHoverBackground}
      onPointerLeave={hideHoverBackground}
    >
      <div className="hero-hover-bg" style={{ backgroundImage: `url(${hoverBg})` }} aria-hidden="true" />
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

        <div className="hero-visual" aria-hidden="true">
          <div className="orbital-ring">
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
          </div>
          <div className="cube-scene">
            <div className="cube">
              <span className="cube-face cube-front">AI</span>
              <span className="cube-face cube-back">CV</span>
              <span className="cube-face cube-right">ML</span>
              <span className="cube-face cube-left">UI</span>
              <span className="cube-face cube-top">DS</span>
              <span className="cube-face cube-bottom">API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
