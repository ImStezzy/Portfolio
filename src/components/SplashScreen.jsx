import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-[999]
      bg-gray-100 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >

      {/* PATTERN GRID */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* LIGHT GLOW */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1.4 }}
        transition={{ duration: 2 }}
      />

      {/* LOGO */}
      <motion.img
        layoutId="site-logo"
        src={Logo}
        alt="Logo"
        className="w-36 h-auto relative z-10"
        initial={{
          scale: 0.6,
          opacity: 0,
          filter: "blur(12px)",
        }}
        animate={{
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1], // cinematic easing
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;