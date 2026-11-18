
import { useState, useEffect, useRef } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

function NavigasiBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // HALAMAN AKTIF
  const [activeMenu, setActiveMenu] = useState(
    window.location.pathname === '/program' ? '/program' : '/'
  )

  // REF UNTUK POSISI MENU
  const menuRefs = useRef({})

  // POSISI INDIKATOR GARIS BAWAH
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  })

  // MENU NAVIGASI
  const menuItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Program', href: '/program' },
    { name: 'Galeri', href: '/#galeri' },
    { name: 'Informasi Layanan', href: '/#informasi' },
  ]

  // MENDETEKSI PERUBAHAN HALAMAN
  useEffect(() => {
    const handleLocationChange = () => {
      setActiveMenu(
        window.location.pathname === '/program' ? '/program' : '/'
      )
    }

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  // MENGATUR POSISI INDIKATOR
  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = menuRefs.current[activeMenu]

      if (activeElement) {
        setIndicator({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
        })
      }
    }

    updateIndicator()

    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [activeMenu])

  // STYLE MENU
  const getMenuClass = (href) => {
    const isActive = activeMenu === href

    return `py-2 text-sm font-medium transition-colors duration-300 ${
      isActive
        ? 'text-fit-red'
        : 'text-white hover:text-fit-red'
    }`
  }

  return (
    <nav className="relative z-50 border-b border-white/10 bg-black/75 text-white shadow-lg backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a
          href="/"
          onClick={() => setActiveMenu('/')}
          className="flex items-center"
        >
          <img
            src="/logo_goworkout.jpeg"
            alt="Logo Go Work Out Kediri"
            className="h-14 w-auto object-contain"
          />

          <div className="flex flex-col">
            <span className="text-base font-extrabold uppercase leading-tight tracking-wide text-white">
              Go Work Out Kediri
            </span>

            <span className="mt-1 text-xs font-medium tracking-wider text-gray-soft">
              by Coach Elle
            </span>
          </div>
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden items-center gap-8 lg:flex">

          {/* MENU UTAMA */}
          <div className="relative flex items-center gap-8">

            {menuItems.map((item) => (
              <a
                key={item.name}
                ref={(el) => {
                  menuRefs.current[item.href] = el
                }}
                href={item.href}
                onClick={() => {
                  setActiveMenu(
                    item.href === '/program' ? '/program' : '/'
                  )
                }}
                className={getMenuClass(item.href)}
              >
                {item.name}
              </a>
            ))}

            {/* SLIDING UNDERLINE */}
            <span
              className="absolute bottom-0 h-[2px] rounded-full bg-fit-red transition-all duration-500 ease-in-out"
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
            />

          </div>

          {/* LOGIN ADMIN */}
          <a
            href="/admin/login"
            className="text-sm font-medium transition-colors duration-300 hover:text-fit-red"
          >
            Login Admin
          </a>

          {/* BOOK NOW */}
          <a
            href="/booking"
            className="rounded-full bg-fit-red px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-red-700"
          >
            BOOK NOW
          </a>

        </div>

        {/* TOMBOL MENU MOBILE */}
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
              onClick={() => {
                setActiveMenu(
                  item.href === '/program' ? '/program' : '/'
                )
                setMenuOpen(false)
              }}
              className={`relative w-fit py-2 text-sm font-medium transition-colors duration-300 ${
                activeMenu === item.href
                  ? 'text-fit-red after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-fit-red'
                  : 'text-white hover:text-fit-red'
              }`}
            >
              {item.name}
            </a>
          ))}

          {/* LOGIN ADMIN */}
          <a
            href="/admin/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium transition-colors hover:text-fit-red"
          >
            Login Admin
          </a>

          {/* BOOK NOW */}
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
