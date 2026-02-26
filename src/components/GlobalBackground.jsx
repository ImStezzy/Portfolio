import { motion, useScroll, useTransform } from "framer-motion";

const GlobalBackground = () => {

  const { scrollYProgress } = useScroll();

  const layer1 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const layer2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const layer3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0b0f]">

      {/* ===== LIQUID AURORA ===== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Layer 1 */}
        <motion.div
          style={{ y: layer1 }}
          className="
          absolute
          w-[500px] h-[500px]
          md:w-[900px] md:h-[900px]
          bg-blue-500/20
          blur-[160px] md:blur-[220px]
          rounded-full
          -top-[120px] md:-top-[300px]
          left-[10%] md:left-[5%]
          "
          animate={{ x: [0, 80, -40, 0], y: [0, 60, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Layer 2 */}
        <motion.div
          style={{ y: layer2 }}
          className="
          absolute
          w-[420px] h-[420px]
          md:w-[700px] md:h-[700px]
          bg-purple-500/20
          blur-[160px] md:blur-[220px]
          rounded-full
          top-[45%] md:top-[40%]
          right-[5%] md:right-[10%]
          "
          animate={{ x: [0, -80, 40, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Layer 3 */}
        <motion.div
          style={{ y: layer3 }}
          className="
          absolute
          w-[380px] h-[380px]
          md:w-[600px] md:h-[600px]
          bg-indigo-500/20
          blur-[150px] md:blur-[220px]
          rounded-full
          bottom-[-80px] md:bottom-[-200px]
          left-[35%] md:left-[40%]
          "
          animate={{ x: [0, 60, -30, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

      </div>

      {/* ===== PROCEDURAL NOISE ===== */}

      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          background:
            "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.05) 0px, transparent 2px)"
        }}
      />

    </div>
  );
};

export default GlobalBackground;