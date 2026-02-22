import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import './App.css'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2600)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!loading && (
        <div className="flex flex-col min-h-screen">

          <Navbar />

          <main className="flex-1">
            <Hero />
            <Experience />
            <Projects />
            <Testimonials />
          </main>

          <Footer />

        </div>
      )}
    </>
  )
}

export default App