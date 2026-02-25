import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoAccount from '../assets/logoAccount.png';

const testimoni = [
  {
    name: "Agung Nugroho",
    position: "Kepala Koordinator IT",
    company: "PT. Mitra Abadi Bahari, Tegal ( Obat Nyamuk King Kong Brand )",
    message:
      "Alkhairi is a highly dedicated developer. He consistently delivers quality work and always looks for ways to improve the application.",
    image: logoAccount,
  },
  {
    name: "Tedy Saleh Setiadi",
    position: "Kepala Operasional",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message: " ",
    image: logoAccount,
  },
  {
    name: " Muhammad Alfaruki",
    position: "Human Resources Development",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message: " ",
    image: logoAccount,
  },
  {
    name: "Dedi setyawan",
    position: "Supervisor Software Delphi",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message:
      "Pribadi yang bertanggung jawab dan konsisten dalam menyelesaikan tugas. Ke depannya, mungkin bisa lebih meningkatkan inisiatif dalam pengambilan keputusan agar kontribusinya semakin maksimal.",
    image: logoAccount,
  },
  {
    name: "Rahmat Ramadhan",
    position: "Supervisor Software",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message: " ",
    image: logoAccount,
  },
  {
    name: "Hasim Subni",
    position: "Senior infrastructure IT",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message: " ",
    image: logoAccount,
  },
  {
    name: "Ricky Haryanto",
    position: "Database administrator",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message:
      "Seorang rekan kerja yang penuh rasa ingin tahu, selalu belajar, dan menyelesaikan masalah bersama.",
    image: logoAccount,
  },
  {
    name: "Rudi Novrianto",
    position: "Senior Programmer Delphi",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message:
      "Selama bekerja bersama, Anda menunjukkan dedikasi, tanggung jawab, dan profesionalisme yang sangat baik. Kontribusi Anda memberikan dampak positif bagi tim dan perusahaan..",
    image: logoAccount,
  },
  {
    name: "Antok Wahyudi",
    position: "Senior Programmer Delphi",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message:
      "Hasil kerja sangat memuaskan, pengerjaan cepat, detail, dan sesuai kebutuhan sistem. Komunikasi juga responsif serta sangat memahami alur sistem dengan baik. Sangat direkomendasikan untuk pengembangan maupun perbaikan sistem.",
    image: logoAccount,
  },
  {
    name: "Nanang Andriani",
    position: "Senior Programmer Delphi",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message: "Orang yang pekerja keras.",
    image: logoAccount,
  },
  {
    name: "Dimas Aji Anggono",
    position: "Senior Helpdesk & Implementator",
    company: "PT. Hasta Prima Solusi, Tangerang",
    message: " ",
    image: logoAccount,
  },
];

const TestimoniSection = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(testimoni.length);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const extended = [...testimoni, ...testimoni, ...testimoni];

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) setCurrent((prev) => (prev + 1) % testimoni.length);
      else setIndex((prev) => prev + 1);
    }, 4000); // lebih lambat agar smooth
    return () => clearInterval(interval);
  }, [isMobile]);

  // Loop fix desktop
  useEffect(() => {
    if (index >= testimoni.length * 2) {
      setTimeout(() => setIndex(testimoni.length), 600); // lebih ringan
    }
  }, [index]);

  // Swipe
  let startX = 0;
  const handleTouchStart = (e) => (startX = e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      if (isMobile) setCurrent((prev) => (prev + 1) % testimoni.length);
      else setIndex((prev) => prev + 1);
    }
    if (endX - startX > 50) {
      if (isMobile) setCurrent((prev) => (prev - 1 + testimoni.length) % testimoni.length);
      else setIndex((prev) => prev - 1);
    }
  };

  const slideWidth = isMobile ? 100 : 33.333;
  const visibleCards = isMobile ? 1 : 3;
  const offset = isMobile ? 0 : (100 - slideWidth * visibleCards) / 2;

  return (
    <section
      id="testimoni"
      className="relative bg-gray-50 py-20 scroll-mt-24 overflow-hidden"
    >
      {/* EDGE BLUR */}
      <div className="pointer-events-none absolute inset-0 z-10 flex justify-between">
        <div className="hidden md:block h-full w-[10vw] backdrop-blur-md bg-gradient-to-r from-gray-50 via-gray-50/70 to-transparent"></div>
        <div className="hidden md:block h-full w-[10vw] backdrop-blur-md bg-gradient-to-l from-gray-50 via-gray-50/70 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-blue-800"
        >
          Apa Kata Mereka
        </motion.h2>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-gray-500 mb-12 md:mb-16"
        >
          Testimoni dari kolega dan klien yang pernah bekerja sama dengan saya
        </motion.p>

        {/* DESKTOP SLIDER */}
        {!isMobile && (
          <div
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative overflow-visible"
          >
            <motion.div
              className="flex gap-6 md:gap-8"
              style={{
                transform: `translateX(calc(-${index * slideWidth}% + ${offset}%))`,
              }}
              transition={{
                duration: 0.9, // lebih cepat untuk ringan
                ease: [0.25, 0.8, 0.25, 1],
              }}
            >
              {extended.map((item, i) => {
                const center = i === index;
                return (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-full md:w-[33.333%] bg-white rounded-3xl p-6 md:p-8 text-left transform transition-transform duration-500 ${
                      center ? "scale-102 shadow-lg z-10" : "scale-97 opacity-70 z-0"
                    }`}
                  >
                    <p className="text-gray-600 mb-6 italic leading-relaxed break-words">
                      "{item.message}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-gray-200 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.position}</p>
                        <p className="text-xs text-gray-400">{item.company}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        )}

        {/* MOBILE VIEW */}
        {isMobile && (
          <div className="flex md:hidden justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center max-w-xs mx-auto"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.7 }}
              >
                <img
                  src={testimoni[current].image}
                  alt={testimoni[current].name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 mb-1 font-semibold">{testimoni[current].position}</p>
                <p className="text-gray-500 mb-4 text-sm">{testimoni[current].company}</p>
                <p className="text-gray-700 mb-4 italic">"{testimoni[current].message}"</p>
                <h4 className="font-semibold text-gray-900">{testimoni[current].name}</h4>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimoniSection;