
function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[700px] items-center overflow-hidden bg-black"
    >
      {/* FOTO TRAINER SEBAGAI BACKGROUND */}
      <img
        src="/images/Trainer-unsplash.jpg"
        alt="Personal trainer sedang mendampingi klien workout"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />

      {/* BACKGROUND MERAH */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* KONTEN */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">

        {/* TEKS */}
        <div className="max-w-3xl">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-fit-red">
            GO WORK OUT KEDIRI
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl xl:text-7xl">
            WORKOUT
            <span className="block">ANYWHERE,</span>
            <span className="block text-fit-red">
              ANYTIME.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-300 md:text-lg">
            Nikmati pengalaman workout lebih mudah bersama
            personal trainer profesional langsung dari rumahmu.
            Mulai perjalanan hidup sehatmu bersama kami.
          </p>

          {/* BUTTON */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="/booking"
              className="rounded-full bg-fit-red px-8 py-4 text-sm font-bold text-white transition-all hover:scale-105 hover:bg-red-700"
            >
              BOOK YOUR SESSION
            </a>

            <a
              href="#program"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-fit-red hover:text-fit-red"
            >
              EXPLORE PROGRAM
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
