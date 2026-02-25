import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoAccount from '../assets/logoAccount.png';

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
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const startX = useRef(0);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // AUTO SLIDE (ringan)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimoni.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // UPDATE POSITION GPU
  useEffect(() => {

    const slider = sliderRef.current;
    if (!slider) return;

    const width = slider.clientWidth;
    const cardWidth = isMobile ? width : width / 3;

    const x = -(index * cardWidth);

    slider.style.transform = `translate3d(${x}px,0,0)`;

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
      setIndex((prev) => (prev + 1) % testimoni.length);
    } else {
      setIndex((prev) => (prev - 1 + testimoni.length) % testimoni.length);
    }
  };

  return (
    <section
      id="testimoni"
      className="relative bg-gray-50 py-16 scroll-mt-24 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-800">
          Apa Kata Mereka
        </h2>

        <p className="text-gray-500 mb-10 md:mb-12">
          Testimoni dari kolega dan klien yang pernah bekerja sama dengan saya
        </p>

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          <div
            ref={sliderRef}
            className="flex transition-transform duration-700 ease-out"
            style={{
              willChange: "transform"
            }}
          >

            {testimoni.map((item, i) => (

              <div
                key={i}
                className="flex-shrink-0 w-full md:w-1/3 px-3"
              >

                <div className="bg-white rounded-xl p-5 text-left shadow-sm">

                  <p className="text-gray-600 mb-4 italic text-sm">
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

                      <h4 className="font-semibold text-gray-800 text-sm">
                        {item.name}
                      </h4>

                      <p className="text-xs text-gray-500">
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

      </div>

    </section>
  );
};

export default TestimoniSection;