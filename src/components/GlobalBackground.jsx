import { motion, useScroll, useTransform } from "framer-motion";

const GlobalBackground = () => {

  const { scrollYProgress } = useScroll();

  const layer1 = useTransform(scrollYProgress, [0,1], [0,-200]);
  const layer2 = useTransform(scrollYProgress, [0,1], [0,-120]);
  const layer3 = useTransform(scrollYProgress, [0,1], [0,-60]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0b0f]">

      {/* Aurora layer 1 */}
      <motion.div
        style={{ y: layer1 }}
        className="absolute w-[900px] h-[900px] bg-blue-500/20 blur-[220px] rounded-full -top-[300px] left-[10%]"
      />

      {/* Aurora layer 2 */}
      <motion.div
        style={{ y: layer2 }}
        className="absolute w-[700px] h-[700px] bg-purple-500/20 blur-[220px] rounded-full top-[40%] right-[10%]"
      />

      {/* Aurora layer 3 */}
      <motion.div
        style={{ y: layer3 }}
        className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-[220px] rounded-full bottom-[-200px] left-[40%]"
      />

      {/* cinematic noise */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          background:
            "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.04) 0px, transparent 2px)"
        }}
      />

    </div>
  );
};

export default GlobalBackground;