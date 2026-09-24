import { useEffect, useState } from 'react'
import './Navbar.css'
import ThemeToggle from './ThemeToggle'

// Using exactly the links from the image
const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Education', '#education'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact']
]

function Navbar() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.querySelector(link[1])).filter(Boolean)
      
      let currentActive = active
      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        // Simple visibility check
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentActive = `#${section.id}`
        }
      }
      
      if (currentActive !== active) {
        setActive(currentActive)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active])

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={`navbar-link ${active === href ? 'active' : ''}`}
            onClick={() => setActive(href)}
          >
            {label}
          </a>
        ))}
        <div className="navbar-divider" />
        <ThemeToggle className="navbar-theme-toggle" />
      </nav>
    </header>
  )
}

export default Navbar
