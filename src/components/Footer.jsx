import React from "react";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";
import Logo from "../assets/logo.png"; // pastikan path benar

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="grid grid-cols-2 gap-8 md:hidden">

          {/* Kolom 1 */}
          <div className="col-span-2 text-left">
            <h2 className="text-xl font-semibold mb-3">Alkhairi Jusuf</h2>
            <p className="text-sm text-gray-300">
              Frontend Developer | Business Intelligence Developer | Graphic Design Enthusiast.<br />
              Partner in growing your business together.
            </p>

            <div className="flex space-x-4 mt-4 text-lg">
              <a 
                href="https://www.linkedin.com/in/alkhairijusuf?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>

              <a 
                href="https://www.instagram.com/alkhairi_je?igsh=aXJ3cmZiaGRseXJz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>

              <a 
                href="https://www.behance.net/alkhairijusuf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaBehance />
              </a>
            </div>
           </div>

          {/* Kolom 2 */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="beranda" className="hover:text-white">Beranda</a></li>
              <li><a href="pengalaman" className="hover:text-white">Pengalaman</a></li>
              <li><a href="proyek" className="hover:text-white">Proyek</a></li>
              <li><a href="testimoni" className="hover:text-white">Testimoni</a></li>
            </ul>
          </div>

          {/* Kolom 3 (Sejajar Kolom 2) */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Frontend Development</li>
              <li>UI/UX Design</li>
              <li>Dashboard Design/BI</li>
              <li>Data Analyst</li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: alkhairijusuf@gmail.com</li>
              <li>Location: Tangerang, Indonesia</li>
            </ul>
          </div>

          {/* Logo sejajar Kolom 4 */}
          <div className="flex items-start justify-center">
            <img src={Logo} alt="Logo" className="w-20 opacity-80" />
          </div>
        </div>

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">

          {/* Kolom 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Alkhairi Jusuf</h2>
            <p className="text-sm text-gray-300">
              Frontend Developer | Business Intelligence Developer | Graphic Design Enthusiast. <br />
              Partner in growing your business together.
            </p>

            <div className="flex space-x-4 mt-4 text-lg">
              <a href="https://www.linkedin.com/in/alkhairijusuf?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-gray-400"><FaLinkedin /></a>
              <a href="https://www.instagram.com/alkhairi_je?igsh=aXJ3cmZiaGRseXJz" className="hover:text-gray-400"><FaInstagram /></a>
              <a href="https://www.behance.net/alkhairijusuf" className="hover:text-gray-400"><FaBehance /></a>
            </div>
          </div>

          {/* Kolom 2 */}
          <div className="md:ml-16">
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="beranda" className="hover:text-white">Beranda</a></li>
              <li><a href="pengalaman" className="hover:text-white">Pengalaman</a></li>
              <li><a href="proyek" className="hover:text-white">Proyek</a></li>
              <li><a href="testimoni" className="hover:text-white">Testimoni</a></li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Frontend Development</li>
              <li>UI/UX Design</li>
              <li>Dashboard Design/BI</li>
              <li>Data Analyst</li>
            </ul>
          </div>

          {/* Kolom 4 */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: alkhairijusuf@gmail.com</li>
              <li>WhatsApp: +62 895-6401-09058</li>
              <li>Location: Tangerang, Indonesia</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 mt-10">
          © {new Date().getFullYear()} Alkhairi Jusuf. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;