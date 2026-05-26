import { personalInfo } from '../data/portfolioData'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <span>{personalInfo.name}</span>
      <span>AI / Full-Stack / Computer Vision</span>
    </footer>
  )
}

export default Footer
