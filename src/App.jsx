import './assets/styles/global.css'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Education from './assets/components/Education'
import Experience from './assets/components/Experience'
import Skills from './assets/components/Skills'
import Projects from './assets/components/Projects'
import Achievements from './assets/components/Achievements'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
