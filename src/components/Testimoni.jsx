  import { useEffect, useRef, useState } from "react";
  import { motion } from "framer-motion";
  import logoAccount from "../assets/logoAccount.png";

  const testimoni = [
    { name: "Agung Nugroho", position: "Kepala Koordinator IT", company: "PT. Mitra Abadi Bahari, Tegal", message: "Eja memiliki dedikasi yang bagus dalam analisis data.", image: logoAccount },
    { name: "Tedy Saleh Setiadi", position: "Kepala Operasional", company: "PT. Hasta Prima Solusi, Tangerang", message: "Dalam pengecekan tester semua di selesaikan dengan bagus, pribadi yang baik.", image: logoAccount },
    { name: "Muhammad Alfaruki", position: "Human Resources Development", company: "PT. Hasta Prima Solusi, Tangerang", message: "Sopan, Ramah dan baik", image: logoAccount },
    { name: "Dedi setyawan", position: "Supervisor Software Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Pribadi yang bertanggung jawab dan konsisten dalam menyelesaikan tugas.", image: logoAccount },
    { name: "Rahmat Ramadhan", position: "Supervisor Software", company: "PT. Hasta Prima Solusi, Tangerang", message: "Fundamental dalam software.", image: logoAccount },
    { name: "Hasim Subni", position: "Senior infrastructure IT", company: "PT. Hasta Prima Solusi, Tangerang", message: "Mampu beradaptasi.", image: logoAccount },
    { name: "Ricky Haryanto", position: "Database administrator", company: "PT. Hasta Prima Solusi, Tangerang", message: "Rekan kerja yang penuh rasa ingin tahu.", image: logoAccount },
    { name: "Rudi Novrianto", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Dedikasi dan profesionalisme tinggi.", image: logoAccount },
    { name: "Antok Wahyudi", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Hasil kerja memuaskan.", image: logoAccount },
    { name: "Nanang Andriani", position: "Senior Programmer Delphi", company: "PT. Hasta Prima Solusi, Tangerang", message: "Pekerja keras.", image: logoAccount },
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

    // AUTO SLIDE
    useEffect(() => {

      const interval = setInterval(() => {

        if (isMobile) {
          setCurrent((prev) => (prev + 1) % testimoni.length);
        } else {
          setIndex((prev) => prev + 1);
        }

      }, 4500);

      return () => clearInterval(interval);

    }, [isMobile]);

    // LOOP DESKTOP
    useEffect(() => {

      if (!isMobile && index >= testimoni.length * 2) {
        setTimeout(() => setIndex(testimoni.length), 500);
      }

    }, [index, isMobile]);

    // MOBILE GPU SLIDE (SUPER STABLE)
    useEffect(() => {

      if (!isMobile) return;

      const slider = sliderRef.current;
      if (!slider) return;

      slider.style.transform = `translate3d(-${current * 100}vw,0,0)`;

    }, [current, isMobile]);

    const handleTouchStart = (e) => {
      startX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {

      const endX = e.changedTouches[0].clientX;
      const diff = startX.current - endX;

      if (Math.abs(diff) < 50) return;

      if (diff > 0) {
        isMobile
          ? setCurrent((prev) => (prev + 1) % testimoni.length)
          : setIndex((prev) => prev + 1);
      } else {
        isMobile
          ? setCurrent((prev) => (prev - 1 + testimoni.length) % testimoni.length)
          : setIndex((prev) => prev - 1);
      }

    };

    const slideWidth = 33.333;
    const visibleCards = 3;
    const offset = (100 - slideWidth * visibleCards) / 2;

    return (
      <section id="testimoni" className="relative py-16 scroll-mt-24 overflow-hidden max-w-full"
    >

        <div className="max-w-6xl mx-auto px-4 text-center relative z-20">

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold mb-3 text-blue-400"
          >
            Apa Kata Mereka
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="text-gray-400 mb-10 md:mb-12"
          >
            Testimoni dari kolega dan klien yang pernah bekerja sama dengan saya
          </motion.p>

          {/* DESKTOP */}
          {!isMobile && (

            <div
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative overflow-hidden"
            >

              <motion.div
                className="flex gap-4 md:gap-6"
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
                      className={`flex-shrink-0 w-full md:w-[33.333%] rounded-xl p-5 text-left backdrop-blur-lg bg-white/10 border border-white/10 transition-transform duration-300 ${
                        center ? "scale-100 z-10" : "scale-95 opacity-80"
                      }`}
                    >

                      <p className="text-gray-200 mb-3 italic text-sm">
                        "{item.message}"
                      </p>

                      <div className="flex items-center gap-2">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <div>
                          <h4 className="font-semibold text-white text-sm">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-300">
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

          {/* MOBILE */}
          {isMobile && (

            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >

              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-out"
                style={{
                  willChange: "transform",
                }}
              >

                {testimoni.map((item, i) => (

                  <div
                    key={i}
                    className="flex-shrink-0 w-full px-5"
                  >

                    <div className="rounded-xl p-5 text-left backdrop-blur-lg bg-white/10 border border-white/10">

                      <p className="text-gray-200 mb-4 italic text-sm">
                        "{item.message}"
                      </p>

                      <div className="flex items-center gap-3">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-full object-cover"
                          loading="lazy"
                        />

                        <div>
                          <h4 className="font-semibold text-white text-sm">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-300">
                            {item.position}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {item.company}
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

      </section>
    );
  };

  export default TestimoniSection;