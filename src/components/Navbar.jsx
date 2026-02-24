import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 will-change-transform transform-gpu
        ${scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white backdrop-blur-sm"
        }
        `}
      >
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

            <motion.img
              layoutId="site-logo"
              src={Logo}
              alt="Logo"
              className="h-12 w-auto will-change-transform"
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                duration: 1.2
              }}
            />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 font-medium text-gray-700">
              <a href="#beranda" className="hover:text-black transition">
                Beranda
              </a>
              <a href="#pengalaman" className="hover:text-black transition">
                Pengalaman
              </a>
              <a href="#proyek" className="hover:text-black transition">
                Proyek
              </a>
              <a href="#testimoni" className="hover:text-black transition">
                Testimoni
              </a>
            </div>

            {/* Animated Burger */}
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center md:hidden bg-transparent"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute w-6 h-0.5 bg-black"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute w-6 h-0.5 bg-black"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute w-6 h-0.5 bg-black"
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
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
            />

            {/* Slide Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl p-8 flex flex-col space-y-6 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
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