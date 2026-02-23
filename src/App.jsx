import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import './App.css'
import SplashScreen from './components/SplashScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Pengalaman from './components/Pengalaman'
import Proyek from './components/Proyek'
import Testimoni from './components/Testimoni'

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
            <Pengalaman />
            <Proyek />
            <Testimoni />
          </main>

          <Footer />

        </div>
      )}
    </>
  )
}

export default App