
function CTASection() {
  return (
    <section className="bg-transparent px-6 py-20 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#1F1F1F] px-6 py-16 text-center shadow-xl md:px-16 md:py-20">

          {/* DEKORASI BACKGROUND */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fit-red/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-fit-red/10 blur-3xl" />

          {/* KONTEN CTA */}
          <div className="relative z-10 mx-auto max-w-3xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-fit-red">
              START YOUR FITNESS JOURNEY
            </p>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
              YOUR FITNESS JOURNEY
              <span className="block text-fit-red">
                STARTS AT HOME.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-soft md:text-base">
              Tidak perlu pergi ke gym untuk memulai hidup lebih sehat.
              Nikmati pengalaman workout yang praktis bersama personal
              trainer profesional langsung dari rumahmu.
            </p>

            {/* TOMBOL BOOKING */}
            <a
              href="/booking"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-fit-red px-8 py-4 text-sm font-bold text-white shadow-lg shadow-fit-red/20 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
            >
              LET'S GET MOVING!
              <span className="text-lg">→</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
