
import {
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6'

import {
  FiArrowUpRight,
} from 'react-icons/fi'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent px-6 pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div>
                <h2 className="text-xl font-extrabold tracking-wide">
                  GO WORKOUT
                  <span className="text-fit-red"> KEDIRI</span>
                </h2>

                <p className="mt-1 text-xs text-gray-soft">
                  by Coach Ella
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-soft">
              Workout lebih mudah dan nyaman bersama personal
              trainer. Nikmati pengalaman latihan langsung
              di lokasi pilihanmu.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-soft">
              <li>
                <a
                  href="/"
                  className="transition-colors hover:text-fit-red"
                >
                  Beranda
                </a>
              </li>

              <li>
                <a
                  href="/program"
                  className="transition-colors hover:text-fit-red"
                >
                  Program
                </a>
              </li>

              <li>
                <a
                  href="/galeri"
                  className="transition-colors hover:text-fit-red"
                >
                  Galeri
                </a>
              </li>

              <li>
                <a
                  href="/informasi"
                  className="transition-colors hover:text-fit-red"
                >
                  Informasi
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-fit-red"
              >
                <FaWhatsapp
                  size={21}
                  className="text-[#25D366]"
                />

                <span>WhatsApp</span>

                <FiArrowUpRight
                  size={16}
                  className="ml-auto text-gray-soft"
                />
              </a>

              {/* TIKTOK */}
              <a
                href="https://www.tiktok.com/@elokayuellasari?_r=1&_t=ZS-9BTxhn9cbKQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-gray-soft transition-colors hover:text-fit-red"
              >
                <FaTiktok
                  size={20}
                  className="text-white transition-colors group-hover:text-fit-red"
                />

                <span>TikTok</span>

                <FiArrowUpRight
                  size={16}
                  className="ml-auto transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-gray-soft">
            © {currentYear} Go Work Out Kediri. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
