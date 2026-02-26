import { useEffect, useCallback, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import logoTK from "../assets/LogoTK.png";
import logoMAB from "../assets/LogoMAB.png";
import logoHPS from "../assets/LogoHPS.png";
import logoPDAM from "../assets/LogoPDAM.png";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const slides = [
  {
    title: "Implementator Qgis",
    description:
      "Mendata dan mempetakan perpipaan konsumen PDAM kota bengkulu menggunakan QGIS.",
    specs: ["🗺️ Qgis", "⚙️ GIS", "🧠 System Design"],
    glow: "bg-blue-500",
    bottomGradient: "to-indigo-100",
    cardLogo: logoPDAM,
    card: {
      description:
        "PDAM Kota Bengkulu menyediakan layanan air bersih berkualitas bagi masyarakat Kota Bengkulu.",
    },
  },
  {
    title: "Game Development",
    description:
      "Mengembangkan gameplay edukasi anak TK berbasis Windows menggunakan Unity.",
    specs: ["⚙️ C#", "🎮 Unity Engine", "🎞️ 2D Animation", "⚙️ JS"],
    glow: "bg-purple-500",
    bottomGradient: "to-pink-100",
    cardLogo: logoTK,
    card: {
      description:
        "TK Sandhy Putra Telkom Bengkulu merupakan lembaga PAUD yang berfokus pada pendidikan anak usia dini.",
    },
  },
  {
    title: "Data Analyst",
    description:
      "Melakukan pengolahan dan visualisasi data menggunakan dashboard.",
    specs: ["💻 Ms. Excel", "📊 Power BI", "📊 Tableau", "⚙️ SQL Query"],
    glow: "bg-emerald-500",
    bottomGradient: "to-teal-100",
    cardLogo: logoMAB,
    card: {
      description:
        "PT. Mitra Abadi Bahari adalah perusahaan distribusi yang tergabung dalam DMLT Group, dengan portofolio produk termasuk Obat Nyamuk King Kong, Ripella, Selendang Sabun Cream, dan lainnya.",
    },
  },
  {
    title: "Trainer App & QA Tester",
    description:
      "Melatih karyawan, membuat manual book, dan melakukan QA testing aplikasi.",
    specs: ["📘 DBmonitor", "⚙️ Katalon", "📊 Google Sheet", "💻 Jira", "🖼️ Inkscape"],
    glow: "bg-emerald-500",
    bottomGradient: "to-teal-100",
    cardLogo: logoHPS,
    card: {
      description:
        "PT Hasta Prima Solusi merupakan perusahaan pengembang aplikasi dalam ekosistem DMLT Group.",
    },
  },
];

const Pengalaman = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  useEffect(() => {
    if (!embla) return;

    const autoplay = setInterval(() => {
      embla.scrollNext();
    }, 4500);

    return () => clearInterval(autoplay);
  }, [embla]);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 30;
    const rotateY = (x - rect.width / 2) / 30;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section
      id="pengalaman"
      ref={sectionRef}
      className="relative scroll-mt-16"
    >
      <div
        className="relative w-full py-20 md:py-28 px-6 bg-[#08023a]"
      >

        <motion.div
          key={selectedIndex}
          className={`absolute -top-16 right-6 w-[200px] h-[200px] ${slides[selectedIndex].glow}
          opacity-20 blur-[70px] rounded-full pointer-events-none`}
          style={{ y: parallaxY }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

          {/* TEXT CAROUSEL */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div className="min-w-full pr-6" key={index}>
                  <motion.div
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0.35,
                      y: selectedIndex === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-500">
                      {slide.title}
                    </h2>

                    <p className="text-gray-50 mb-6 leading-relaxed">
                      {slide.description}
                    </p>

                    <ul className="text-gray-50 space-y-2">
                      {slide.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* DOT NAV MINIMALIS BULAT */}
              <div className="flex gap-2 mt-4 ml-2 items-center">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`
                      block
                      w-[6px] h-[6px]
                      rounded-full
                      flex-none
                      p-0
                      transition-all duration-200
                      ${selectedIndex === index ? "bg-white scale-110" : "bg-gray-400 opacity-50"}
                    `}
                  />
                ))}
              </div>
           </div> 

          {/* CARD */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/40 transition-transform duration-300 will-change-transform"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={slides[selectedIndex].cardLogo}
                    alt="Logo"
                    className="w-14 h-14 object-contain"
                  />

                  <h3 className="text-lg font-semibold text-blue-800">
                    Latar Belakang Perusahaan
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed text-justify">
                  {slides[selectedIndex].card.description}
                </p>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pengalaman;