import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoAccount from '../assets/logoAccount.png';

const testimoni = [
  { name: "Agung Nugroho", position: "Kepala Koordinator IT", company: "PT. Mitra Abadi Bahari, Tegal", message: "Alkhairi is a highly dedicated developer.", image: logoAccount },
  { name: "Tedy Saleh Setiadi", position: "Kepala Operasional", company: "PT. Hasta Prima Solusi, Tangerang", message: " ", image: logoAccount },
  { name: "Muhammad Alfaruki", position: "Human Resources Development", company: "PT. Hasta Prima Solusi, Tangerang", message: " ", image: logoAccount },
  { name: "Dedi setyawan", position: "Supervisor Software Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Pribadi yang bertanggung jawab dan konsisten dalam menyelesaikan tugas.", image: logoAccount },
  { name: "Rahmat Ramadhan", position: "Supervisor Software", company: "PT. Hasta Prima Solusi, Tangerang", message: " ", image: logoAccount },
  { name: "Hasim Subni", position: "Senior infrastructure IT", company: "PT. Hasta Prima Solusi, Tangerang", message: " ", image: logoAccount },
  { name: "Ricky Haryanto", position: "Database administrator", company: "PT. Hasta Prima Solusi, Tangerang", message: "Seorang rekan kerja yang penuh rasa ingin tahu.", image: logoAccount },
  { name: "Rudi Novrianto", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Selama bekerja bersama, Anda menunjukkan dedikasi dan profesionalisme.", image: logoAccount },
  { name: "Antok Wahyudi", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Hasil kerja sangat memuaskan, pengerjaan cepat, detail, dan sesuai kebutuhan.", image: logoAccount },
  { name: "Nanang Andriani", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Orang yang pekerja keras.", image: logoAccount },
  { name: "Dimas Aji Anggono", position: "Senior Helpdesk & Implementator", company: "PT. Hasta Prima Solusi, Tangerang", message: " ", image: logoAccount },
];

const TestimoniSection = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(testimoni.length);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const extended = [...testimoni, ...testimoni, ...testimoni];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ultra-light auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) setCurrent((prev) => (prev + 1) % testimoni.length);
      else setIndex((prev) => prev + 1);
    }, 4500); // slide lebih lambat = lebih ringan
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    if (index >= testimoni.length * 2) setTimeout(() => setIndex(testimoni.length), 500);
  }, [index]);

  // Swipe
  let startX = 0;
  const handleTouchStart = (e) => (startX = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) isMobile ? setCurrent((p) => (p + 1) % testimoni.length) : setIndex((p) => p + 1);
    if (endX - startX > 50) isMobile ? setCurrent((p) => (p - 1 + testimoni.length) % testimoni.length) : setIndex((p) => p - 1);
  };

  const slideWidth = isMobile ? 100 : 33.333;
  const visibleCards = isMobile ? 1 : 3;
  const offset = isMobile ? 0 : (100 - slideWidth * visibleCards) / 2;

  return (
    <section id="testimoni" className="relative bg-gray-50 py-16 scroll-mt-24 overflow-hidden">
      {/* EDGE BLUR ULTRA-LIGHT */}
      <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
        <div className="hidden md:block h-full w-[10vw] backdrop-blur-[2px] bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent"></div>
        <div className="hidden md:block h-full w-[10vw] backdrop-blur-[2px] bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-20">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-3 text-blue-800"
        >
          Apa Kata Mereka
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="text-gray-500 mb-10 md:mb-12"
        >
          Testimoni dari kolega dan klien yang pernah bekerja sama dengan saya
        </motion.p>

        {/* DESKTOP ULTRA-LIGHT */}
        {!isMobile && (
          <div ref={sliderRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className="relative overflow-hidden">
            <motion.div
              className="flex gap-4 md:gap-6"
              style={{ transform: `translateX(calc(-${index * slideWidth}% + ${offset}%))` }}
              transition={{ duration: 0.7, ease: "linear" }} // linear = ringan
            >
              {extended.map((item, i) => {
                const center = i === index;
                return (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-full md:w-[33.333%] bg-white rounded-xl p-4 md:p-5 text-left transform transition-transform duration-300 ${
                      center ? "scale-101 z-10" : "scale-95 opacity-85 z-0"
                    }`}
                  >
                    <p className="text-gray-600 mb-3 italic text-sm break-words">
                      "{item.message}"
                    </p>
                    <div className="flex items-center gap-2">
                      <img src={item.image} alt={item.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.position}</p>
                        <p className="text-[10px] text-gray-400">{item.company}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}

        {/* MOBILE ULTRA-LIGHT */}
        {isMobile && (
          <div className="flex md:hidden justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="bg-white p-3 rounded-lg flex flex-col items-center text-center max-w-xs mx-auto"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <img src={testimoni[current].image} alt={testimoni[current].name} className="w-14 h-14 rounded-full mb-2 object-cover" />
                <p className="text-gray-700 mb-1 font-semibold text-sm">{testimoni[current].position}</p>
                <p className="text-gray-500 mb-2 text-xs">{testimoni[current].company}</p>
                <p className="text-gray-700 mb-2 italic text-sm">"{testimoni[current].message}"</p>
                <h4 className="font-semibold text-gray-900 text-sm">{testimoni[current].name}</h4>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimoniSection;