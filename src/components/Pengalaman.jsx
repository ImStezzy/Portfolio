import { useEffect, useCallback, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import logoTK from '../assets/LogoTK.png';
import logoMAB from '../assets/LogoMAB.png';
import logoHPS from '../assets/LogoHPS.png';
import logoPDAM from '../assets/LogoPDAM.png';

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
      "Mendata dan mempetakan perpipaan konsumen PDAM kota bengkulu dengan menggunakan aplikasi Quantum Geographic Information System (QGIS).",
    specs: ["🗺️ Qgis", "⚙️ Geographic Information System", "🧠 System Design"],
    glow: "bg-blue-500",
    bottomGradient: "to-indigo-100",
    cardLogo: logoPDAM,
    card: {
      description: "PDAM Kota Bengkulu adalah Perusahaan Daerah Air Minum yang bergerak dalam penyediaan air bersih berkualitas untuk masyarakat di Kota Bengkulu dan sekitarnya. PDAM ini berkomitmen untuk memberikan pelayanan air bersih yang terjangkau dan memenuhi standar kesehatan serta kebutuhan sehari-hari pelanggan."
    },
  },
  {
    title: "Game Development",
    description:
      "Mendevelopment serta mendeployment gameplay edukasi untuk anak taman kanak-kanak berbasis windows, menggunakan unity engine.",
    specs: ["🎮 Windows Gameplay", "⚙️ Unity Engine", "🧠 Waterfall metode", "🖼️ Graphic Design", "🎞️ 2D Animation"],
    glow: "bg-purple-500",
    bottomGradient: "to-pink-100",
    cardLogo: logoTK,
    card: {
      description: "TK Sandhy Putra Telkom Kota Bengkulu adalah lembaga pendidikan anak usia dini (PAUD) berbentuk Taman Kanak-Kanak (TK) yang berada di Jl. Kolonel Berlian No. 51, Teluk Segara, Kota Bengkulu."
    },
  },
  {
    title: "Data Analyst",
    description:
      "Fokus pada pendataan dan menganalisis data yang ada yang kemudian akan di visualisasikan pada dahsboard power BI.",
    specs: ["💻 Data Entry", "📊 Visualisasi Data / BI", "🧠 Analytical Thinking"],
    glow: "bg-emerald-500",
    bottomGradient: "to-teal-100",
    cardLogo: logoMAB,
    card: {
      description: "PT. Mitra Abadi Bahari ( MAB ), Merupakan perusahaan afiliasi dari DMLT Group yang berfokus pada distribusi FMCG, ritel, dan restoran sejak 1995 dengan brand product yang beredar : Obat Nyamuk King Kong, Ripella, Teh Djempol, Dll. Pada DMLT, MAB bergerak di bidang distribusi yang berbase di kota Tegal."
    },
  },
  {
    title: "Trainer App & QA Manual [Tester]",
    description:
      "Melakukan pelatihan karyawan, Membuat manual book dan product knowledge, Serta melakukan pengecekan aplikasi. Hal ini dilakukan agar dapat memaksimalkan performance aplikasi sebelum di pasarkan.",
    specs: ["📘 Content Writer", "⚙️ Presentation", "🖼️ Graphic Design"],
    glow: "bg-emerald-500",
    bottomGradient: "to-teal-100",
    cardLogo: logoHPS,
    card: {
      description: "PT. Hasta Prima Solusi ( HPS ), Merupakan perusahaan vendor yang juga berafiliasi dengan DMLT Group yang sama dengan PT. MAB. PT. HPS berfokus pada Development dan deployment aplikasi yang akan digunakan pada perusahaan DMLT dan/atau aplikasi yang akan diperjual belikan di pasaran."
    },
  },
];

const Pengalaman = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, speed: 7 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [80, -80]);

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
    const interval = setInterval(() => {
      embla.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [embla]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 25;
    const rotateY = (x - centerX) / 25;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTilt = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <section
      id="pengalaman"
      ref={sectionRef}
      className="relative scroll-mt-16 overflow-hidden"
    >
      <div
        className={`relative w-full py-32 md:py-40 px-6 overflow-hidden transition-all duration-1000
        bg-gradient-to-b from-white via-white via-40% ${slides[selectedIndex].bottomGradient}`}
      >
        <motion.div
          key={selectedIndex}
          className={`absolute -top-24 right-[-60px] w-[350px] h-[350px] ${slides[selectedIndex].glow} opacity-25 blur-[140px] rounded-full pointer-events-none`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          style={{ y: parallaxY }}
        />

        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div className="min-w-full pr-8" key={index}>
                  <motion.div
                    animate={{
                      opacity: selectedIndex === index ? 1 : 0.3,
                      y: selectedIndex === index ? 0 : 30,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-900">
                      {slide.title}
                    </h2>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {slide.description}
                    </p>

                    <ul className="text-gray-600 space-y-2">
                      {slide.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-10 ml-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`
                    w-4 h-4
                    min-w-[16px] min-h-[16px]
                    rounded-full
                    flex-shrink-0
                    block
                    p-0
                    border-0
                    transition-all duration-300
                    ${
                      selectedIndex === index
                        ? "bg-black"
                        : "bg-gray-300 hover:bg-gray-400"
                    }
                  `}
                />
              ))}
            </div>
          </div>

          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/40 transition-transform duration-300"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.img
                    key={slides[selectedIndex].cardLogo}
                    src={slides[selectedIndex].cardLogo}
                    alt="Slide Logo"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    transition={{ duration: 0.4 }}
                    className="w-16 h-16 object-contain drop-shadow-md"
                  />
                  <h3 className="text-xl font-semibold">
                    Latar Belakang Perusahaan
                  </h3>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                  <p>{slides[selectedIndex].card.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Pengalaman;
