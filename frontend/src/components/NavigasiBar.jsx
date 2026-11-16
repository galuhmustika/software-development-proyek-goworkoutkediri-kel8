import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

function NavigasiBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Program', href: '#program' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Informasi Layanan', href: '#informasi' },
  ]

  return (
    <nav className="relative z-50 border-b border-white/10 bg-black/75 text-white shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="#beranda" className="flex items-center">
          <img
            src="/logo_goworkout.jpeg"
            alt="Logo Go Work Out Kediri"
            className="h-14 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-base font-extrabold uppercase leading-tight tracking-wide text-white">
                Go WorkOut Kediri
            </span>

            <span className="mt-1 text-xs font-medium tracking-wider text-gray-soft">
                by Coach Elle
            </span>
          </div>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-8 lg:flex">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-fit-red"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/admin/login"
            className="text-sm font-medium transition-colors hover:text-fit-red"
          >
            Login Admin
          </a>

          <a
            href="/booking"
            className="rounded-full bg-fit-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-700"
          >
            BOOK NOW
          </a>
        </div>

        {/* MENU MOBILE */}
        <button
          type="button"
          className="text-fit-red transition-colors hover:text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* DROPDOWN MOBILE */}
      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-white/10 bg-black/95 px-6 py-6 lg:hidden">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium hover:text-fit-red"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/admin/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium hover:text-fit-red"
          >
            Login Admin
          </a>

          <a
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-fit-red px-6 py-3 text-center text-sm font-bold text-white"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </nav>
  )
}

export default NavigasiBar
