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
  useTransform
} from "framer-motion";

const slides = [
  {
    title: "Implementator Qgis",
    description:
      "Mendata dan mempetakan perpipaan konsumen PDAM kota bengkulu menggunakan QGIS.",
    specs: ["🗺️ Qgis", "⚙️ GIS", "🧠 System Design"],
    glow: "bg-blue-500",
    cardLogo: logoPDAM,
    card: {
      description:
        "PDAM Kota Bengkulu menyediakan layanan air bersih berkualitas bagi masyarakat Kota Bengkulu."
    }
  },
  {
    title: "Game Development",
    description:
      "Mengembangkan gameplay edukasi anak TK berbasis Windows menggunakan Unity.",
    specs: ["⚙️ C#", "🎮 Unity Engine", "🎞️ 2D Animation", "⚙️ JS"],
    glow: "bg-purple-500",
    cardLogo: logoTK,
    card: {
      description:
        "TK Sandhy Putra Telkom Bengkulu merupakan lembaga PAUD yang berfokus pada pendidikan anak usia dini."
    }
  },
  {
    title: "Data Analyst",
    description:
      "Melakukan pengolahan dan visualisasi data menggunakan dashboard.",
    specs: ["💻 Ms. Excel", "📊 Power BI", "📊 Tableau", "⚙️ SQL Query"],
    glow: "bg-emerald-500",
    cardLogo: logoMAB,
    card: {
      description:
        "PT. Mitra Abadi Bahari adalah perusahaan distribusi yang tergabung dalam DMLT Group."
    }
  },
  {
    title: "Trainer App & QA Tester",
    description:
      "Melatih karyawan, membuat manual book, dan melakukan QA testing aplikasi.",
    specs: ["📘 DBmonitor", "⚙️ Katalon", "📊 Google Sheet", "💻 Jira", "🖼️ Inkscape"],
    glow: "bg-emerald-500",
    cardLogo: logoHPS,
    card: {
      description:
        "PT Hasta Prima Solusi merupakan perusahaan pengembang aplikasi dalam ekosistem DMLT Group."
    }
  }
];

const Pengalaman = () => {

  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const mouseLight = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  /* ===== DEPTH PARALLAX ===== */

  const layer1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const layer2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const layer3 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  /* ===== CAROUSEL ===== */

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
    const autoplay = setInterval(() => embla.scrollNext(), 4500);
    return () => clearInterval(autoplay);
  }, [embla]);

  /* ===== TILT CARD ===== */

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 35;
    const rotateY = (x - rect.width / 2) / 35;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    /* dynamic lighting */

    if (mouseLight.current) {
      mouseLight.current.style.background =
        `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 60%)`;
    }
  };

  const resetTilt = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section
      id="pengalaman"
      ref={sectionRef}
      className="relative scroll-mt-16 bg-[#0b0b0f] overflow-hidden"
    >

      {/* ===== LIQUID AURORA ===== */}

      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          style={{ y: layer1 }}
          className={`absolute w-[900px] h-[900px] ${slides[selectedIndex].glow}/20 blur-[220px] rounded-full -top-[300px] left-[5%]`}
          animate={{ x: [0, 80, -40, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y: layer2 }}
          className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[220px] rounded-full top-[40%] right-[10%]"
          animate={{ x: [0, -80, 40, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y: layer3 }}
          className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-[220px] rounded-full bottom-[-200px] left-[40%]"
          animate={{ x: [0, 60, -30, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

      </div>

      {/* ===== PROCEDURAL NOISE ===== */}

      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          background:
            "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.05) 0px, transparent 2px)"
        }}
      />

      {/* ===== CONTENT ===== */}

      <div className="relative w-full py-20 md:py-28 px-6">

        <motion.div
          key={selectedIndex}
          className={`absolute -top-16 right-6 w-[260px] h-[260px] ${slides[selectedIndex].glow}
          opacity-20 blur-[200px] rounded-full`}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">

          {/* TEXT */}

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {slides.map((slide, index) => (
                <div className="min-w-full pr-6" key={index}>

                  <motion.div
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0.35,
                      y: selectedIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.4 }}
                  >

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
                      {slide.title}
                    </h2>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {slide.description}
                    </p>

                    <ul className="text-gray-300 space-y-2">
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
                      ${selectedIndex === index ? "bg-black scale-110" : "bg-gray-400 opacity-50"}
                    `}
                  />
                ))}
              </div>
          </div>

          {/* GLASS CARD */}

          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="
            relative
            backdrop-blur-xl
            bg-white/[0.08]
            border border-white/10
            rounded-3xl
            shadow-[0_10px_60px_rgba(0,0,0,0.7)]
            p-8
            transition-transform duration-300
            "
          >

            <div
              ref={mouseLight}
              className="absolute inset-0 rounded-3xl pointer-events-none"
            />

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

                  <h3 className="text-lg font-semibold text-white">
                    Latar Belakang Perusahaan
                  </h3>

                </div>

                <p className="text-gray-300 leading-relaxed text-justify">
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