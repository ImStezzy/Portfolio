import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

const Proyek = () => {

  const handleDownload = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      alert(`Maaf !! #Ini pesan dari programmer

Game hanya bisa di akses menggunakan desktop.
Tidak compatible dengan smartphone !!`);
      return;
    }

    const message = `Halo ! #Ini pesan dari programmer !!
Kamu akan mendowload aplikasi game kami, dengan spesifikasi
yang sudah tertera pada website. Terima kasih telah mengunjungi
dan berpartisipasi,

Best regards,
Alkhairi Jusuf`;

    alert(message);

    window.location.href = `${import.meta.env.BASE_URL}FileGame.rar`;
  };

  return (
    <section
      id="proyek"
      className="scroll-mt-16 bg-[#0b0b0f] relative overflow-hidden"
    >

      {/* subtle glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[140px] rounded-full top-[-200px] left-[20%]" />
      </div>

      {/* ===== PREMIUM PROJECT AREA ===== */}
      <div className="py-24 md:py-32 px-6 relative">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT SIDE */}
          <div>

            {/* title */}
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white relative inline-block">

              Proyek Game

              {/* Apple style glow underline */}
              <span className="absolute left-0 -bottom-2 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-[1px]" />

              <span className="absolute left-0 -bottom-2 w-full h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-[0_0_14px_rgba(99,102,241,0.9)]" />

            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Proyek game berbasis Unity yang berfokus pada gameplay system,
              responsive UI interaction, serta performance optimization
              untuk pengalaman bermain yang stabil.
            </p>

            <ul className="text-gray-400 space-y-2 mb-8">
              <li>🎮 Unity 2020 LTS</li>
              <li>⚙️ C# Architecture</li>
              <li>🧠 Game Logic & System Design</li>
            </ul>

            <button
              onClick={handleDownload}
              className="flex items-center gap-3 px-6 py-3
              bg-blue-600/90 backdrop-blur-md
              text-white rounded-xl
              shadow-[0_6px_25px_rgba(37,99,235,0.35)]
              hover:shadow-[0_8px_35px_rgba(37,99,235,0.6)]
              hover:scale-[1.04]
              active:scale-[0.98]
              transition-all duration-300"
            >
              <Gamepad2 size={20} />
              Download Game
            </button>

          </div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            backdrop-blur-xl
            bg-white/5
            border border-white/10
            rounded-2xl
            p-8
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            hover:border-blue-400/30
            transition-all duration-500
            "
          >

            <h3 className="text-xl font-semibold mb-6 text-white">
              📦 Game Specification
            </h3>

            <div className="space-y-4 text-gray-400">
              <p><strong>File Size:</strong> 216 MB</p>
              <p><strong>Version:</strong> Not Ver</p>
              <p><strong>Platform:</strong> Windows Desktop</p>
              <p><strong>Updated:</strong> December 2023</p>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              Optimized for performance & stability
            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default Proyek;