import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoAccount from "../assets/logoAccount.png";

const testimoni = [
  { name: "Agung Nugroho", position: "Kepala Koordinator IT", company: "PT. Mitra Abadi Bahari, Tegal", message: "Eja memiliki dedikasi yang bagus dalam analisis data.", image: logoAccount },
  { name: "Tedy Saleh Setiadi", position: "Kepala Operasional", company: "PT. Hasta Prima Solusi, Tangerang", message: "Dalam pengecekan tester semua di selesaikan dengan bagus, pribadi yang baik.", image: logoAccount },
  { name: "Muhammad Alfaruki", position: "Human Resources Development", company: "PT. Hasta Prima Solusi, Tangerang", message: "Sopan, Ramah dan baik", image: logoAccount },
  { name: "Dedi setyawan", position: "Supervisor Software Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Pribadi yang bertanggung jawab dan konsisten dalam menyelesaikan tugas.", image: logoAccount },
  { name: "Rahmat Ramadhan", position: "Supervisor Software", company: "PT. Hasta Prima Solusi, Tangerang", message: "Fundamental dalam software, walaupun di pekerjaan sebagai tester dia mampu memahami dan beradaptasi dengan SDLC perusahaan.", image: logoAccount },
  { name: "Hasim Subni", position: "Senior infrastructure IT", company: "PT. Hasta Prima Solusi, Tangerang", message: "Mampu beradaptasi.", image: logoAccount },
  { name: "Ricky Haryanto", position: "Database administrator", company: "PT. Hasta Prima Solusi, Tangerang", message: "Seorang rekan kerja yang penuh rasa ingin tahu.", image: logoAccount },
  { name: "Rudi Novrianto", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Selama bekerja bersama, Anda menunjukkan dedikasi dan profesionalisme.", image: logoAccount },
  { name: "Antok Wahyudi", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Hasil kerja sangat memuaskan, pengerjaan cepat, detail, dan sesuai kebutuhan.", image: logoAccount },
  { name: "Nanang Andriani", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Orang yang pekerja keras.", image: logoAccount },
  { name: "Dimas Aji Anggono", position: "Senior Helpdesk & Implementator", company: "PT. Hasta Prima Solusi, Tangerang", message: "Cepat memahami flow data.", image: logoAccount },
];

const TestimoniSection = () => {

  const sliderRef = useRef(null);

  const [index, setIndex] = useState(testimoni.length);
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const startX = useRef(0);

  const extended = [...testimoni, ...testimoni, ...testimoni];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // AUTO SLIDE (lebih ringan mobile)
  useEffect(() => {

    const interval = setInterval(() => {

      if (isMobile) {
        setCurrent((prev) => (prev + 1) % testimoni.length);
      } else {
        setIndex((prev) => prev + 1);
      }

    }, isMobile ? 6000 : 4500);

    return () => clearInterval(interval);

  }, [isMobile]);

  // LOOP DESKTOP
  useEffect(() => {

    if (!isMobile && index >= testimoni.length * 2) {
      setTimeout(() => setIndex(testimoni.length), 500);
    }

  }, [index, isMobile]);

  // SWIPE
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {

      if (isMobile) {
        setCurrent((prev) => (prev + 1) % testimoni.length);
      } else {
        setIndex((prev) => prev + 1);
      }

    } else {

      if (isMobile) {
        setCurrent((prev) => (prev - 1 + testimoni.length) % testimoni.length);
      } else {
        setIndex((prev) => prev - 1);
      }

    }

  };

  const slideWidth = 33.333;
  const visibleCards = 3;
  const offset = (100 - slideWidth * visibleCards) / 2;

  return (
    <section id="testimoni" className="relative py-16 scroll-mt-16">

      <div className="max-w-6xl mx-auto px-8 text-center relative z-20">

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold mb-3 text-white"
        >
          Apa Kata Mereka
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.4 }}
          className="text-white mb-10 md:mb-12"
        >
          Testimoni dari kolega dan klien yang pernah bekerja sama dengan saya
        </motion.p>

        {/* DESKTOP */}
        {!isMobile && (

          <div
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative py-6"
          >

            <motion.div
              className="flex gap-6"
              style={{
                transform: `translateX(calc(-${index * slideWidth}% + ${offset}%))`,
              }}
              transition={{ duration: 0.7, ease: "linear" }}
            >

              {extended.map((item, i) => {

                const center = i === index;

                return (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-[33.333%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.6)] text-left transition-transform duration-300 ${
                      center ? "scale-[1.04] z-20" : "scale-95 opacity-80"
                    }`}
                  >

                    <p className="text-gray-300 mb-3 italic text-sm break-words">
                      "{item.message}"
                    </p>

                    <div className="flex items-center gap-3">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div>
                        <h4 className="font-semibold text-white text-sm">
                          {item.name}
                        </h4>
                        <p className="text-xs text-gray-400">
                          {item.position}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {item.company}
                        </p>
                      </div>

                    </div>

                  </div>
                );
              })}

            </motion.div>

          </div>

        )}

        {/* MOBILE (1 CARD ONLY — LIGHTWEIGHT) */}
        {isMobile && (

          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="px-2"
              >

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-left shadow-[0_10px_40px_rgba(0,0,0,0.6)]">

                  <p className="text-gray-300 mb-4 italic text-sm">
                    "{testimoni[current].message}"
                  </p>

                  <div className="flex items-center gap-3">

                    <img
                      src={testimoni[current].image}
                      alt={testimoni[current].name}
                      className="w-12 h-12 rounded-full object-cover"
                      loading="lazy"
                    />

                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {testimoni[current].name}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {testimoni[current].position}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {testimoni[current].company}
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        )}

      </div>

    </section>
  );
};

export default TestimoniSection;