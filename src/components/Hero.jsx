import { motion } from "framer-motion"
import MyCV from "../assets/My CV.pdf";

const Hero = () => {
  return (
    <section 
      id="beranda"
      className="relative z-20 py-20 scroll-mt-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Halo, Saya{" "}
            <span className="text-blue-600">
              Alkhairi Jusuf
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-500 mb-6"
          >
            Frontend Developer | Business Intelligence Developer | Graphic Design Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-xl text-base mb-8"
          >
            Saya membangun website modern dan dashboard interaktif yang responsif dan user-friendly.
            Menentukan visualisasi data yang diperlukan perusahaan, serta mendesain visual grafis
            keperluan perusahaan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4"
          >
            <a
              href="https://wa.me/62895640109058"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:scale-105 hover:bg-blue-700 transition inline-block"
            >
              Contact Me
            </a>

            <a
              href={MyCV}
              download
              className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-100 hover:scale-105 transition inline-block"
            >
              Download CV
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero