import { personalInfo } from '../data/portfolioData'
import './Navbar.css'
import ThemeToggle from './ThemeToggle'

const links = [
  ['About', '#about'],
  ['Education', '#education'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Contact', '#contact']
]

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" aria-label="Go to hero section">
        {personalInfo.shortName}
      </a>
      <nav className="navbar-links" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  )
}

export default Navbar
