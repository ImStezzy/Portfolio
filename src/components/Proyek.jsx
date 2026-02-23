import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

const Proyek = () => {
  const handleDownload = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      alert(`Maaf !!

Game hanya bisa diakses menggunakan desktop.
Tidak kompatibel dengan smartphone!!`);
      return;
    }

    const message = `Halo! #Ini pesan dari programmer!!
Kamu akan mendownload aplikasi game kami, dengan spesifikasi
yang sudah tertera pada website. Terima kasih telah mengunjungi
dan berpartisipasi,

Best regards,
Alkhairi Jusuf`;

    alert(message);

    // gunakan path build dari viteStaticCopy
    window.location.href = "/Portfolio/assets/FileGame.rar";
  };

  return (
    <section id="proyek" className="scroll-mt-16">

      {/* ===== CLEAN PREMIUM PROJECT AREA ===== */}
      <div className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proyek Game
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Proyek game berbasis Unity yang berfokus pada gameplay system,
              responsive UI interaction, serta performance optimization
              untuk pengalaman bermain yang stabil.
            </p>

            <ul className="text-gray-600 space-y-2 mb-8">
              <li>🎮 Unity 2020 LTS</li>
              <li>⚙️ C# Architecture</li>
              <li>🧠 Game Logic & System Design</li>
            </ul>

            <button
              onClick={handleDownload}
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:scale-105 hover:bg-blue-700 transition"
            >
              <Gamepad2 size={20} />
              Download Game
            </button>
          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-semibold mb-6">
              📦 Game Specification
            </h3>

            <div className="space-y-4 text-gray-600">
              <p><strong>File Size:</strong> 216 MB</p>
              <p><strong>Version:</strong> Not Ver</p>
              <p><strong>Platform:</strong> Windows Desktop</p>
              <p><strong>Updated:</strong> December 2023</p>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              Optimized for performance & stability
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Proyek;