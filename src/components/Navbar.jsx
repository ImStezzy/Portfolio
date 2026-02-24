import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Scroll background navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = ["beranda", "pengalaman", "proyek", "testimoni"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 will-change-transform
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-white/60 backdrop-blur-lg"
        }`}
      >
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

            {/* LOGO */}
            <motion.img
              layoutId="site-logo"
              src={Logo}
              alt="Logo"
              className="h-12 w-auto will-change-transform"
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1
              }}
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-medium text-gray-700 relative">

              {[
                { name: "Beranda", id: "beranda" },
                { name: "Pengalaman", id: "pengalaman" },
                { name: "Proyek", id: "proyek" },
                { name: "Testimoni", id: "testimoni" }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative hover:text-black transition"
                >
                  {item.name}

                  {/* Scroll Indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-black rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30
                      }}
                    />
                  )}
                </a>
              ))}

            </div>

            {/* BURGER BUTTON */}
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute w-6 h-[2px] bg-black rounded"
              />

              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute w-6 h-[2px] bg-black rounded"
              />

              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute w-6 h-[2px] bg-black rounded"
              />
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={toggleMenu}
            />

            {/* Slide Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl p-8 flex flex-col space-y-6 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 30
              }}
            >
              <a href="#beranda" onClick={handleLinkClick}>
                Beranda
              </a>

              <a href="#pengalaman" onClick={handleLinkClick}>
                Pengalaman
              </a>

              <a href="#proyek" onClick={handleLinkClick}>
                Proyek
              </a>

              <a href="#testimoni" onClick={handleLinkClick}>
                Testimoni
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;