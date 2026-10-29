import { useState } from 'react'

function NavigasiBar(){
    const [menuOpen, setMenuOpen] = useState(false)

    const menuItems=[
        {name: 'Beranda', href: '#beranda'},
        {name: 'Program', href: '#program'},
        {name: 'Galeri', href: '#galeri'},
        {name: 'Informasi', href: '#informasi'},
    ]

    return(
        <nav className="bg-black-88 text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"> 

                <a href="#beranda" className="text-xl font-extrabold tracking-tight">
                    GO WORK <span className="text-fit-green">OUT</span>
                </a>

                <div className="hidden items-center gap-8 lg:flex">
                    {menuItems.map((item) => (
                        <a
                           key={item.name}
                           href={item.href}
                           className="text-sm font-medium transition-colors hover:text-fit-green"
                        >
                            {item.name}
                        </a>
                    ))}

                    <a 
                        href="/admin/login"
                        className="text-sm font-medium transition-colors hover:text-fit-green"
                    >
                        Login Admin
                    </a>

                    <a 
                        href="/booking"
                        className="rounded-full bg-fit-green px-6 py-3 text-sm font-bold text-black transition-opacity hover:opacity-90"
                    >
                        BOOK NOW
                    </a>
                </div>
                <button
                    type="button"
                    className="text-2xl lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? '\u2715' : '\u2630'}
                </button>
            </div>

            {menuOpen && (
                <div className="flex flex-col gap-5 border-t border-white/20 px-6 py-6 lg:hidden">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm font-medium hover:text-fit-green"
                        >
                            {item.name}
                        </a>
                    ))}

                    <a 
                        href="/admin/login"
                        className="text-sm font-medium hover:text-fit-green"
                    >
                        Login Admin
                    </a>

                    <a
                        href="/booking"
                        className="rounded-full bg-fit-green px-6 py-3 text-center text-sm font-bold text-black"
                    >
                        BOOK NOW 
                    </a>
                </div>
            )}
            </nav>
    )
}
export default NavigasiBar