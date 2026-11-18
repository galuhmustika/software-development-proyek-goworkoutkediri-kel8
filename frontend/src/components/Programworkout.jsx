
import {
  FiUser,
  FiUsers,
  FiArrowRight,
} from 'react-icons/fi'

function ProgramWorkout() {
  const programs = [
    {
      id: 'personal',
      icon: FiUser,
      title: 'Personal Home',
      subtitle: 'Private Workout Experience',
      price: 'Rp25.000',
      priceInfo: 'Sesi',
      description:
        'Nikmati pengalaman workout secara personal dengan pendampingan trainer yang datang langsung ke lokasi.',
    },
    {
      id: 'group',
      icon: FiUsers,
      title: 'Group Home',
      subtitle: 'Workout Together, Stay Healthy',
      price: 'Rp25.000',
      priceInfo: 'Orang',
      description:
        'Nikmati sesi workout bersama teman atau keluarga dalam satu lokasi dengan pendampingan trainer.',
    },
  ]

  return (
    <section
      id="program"
      className="relative overflow-hidden bg-transparent px-6 py-20 md:py-16"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-fit-red/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* JUDUL SECTION */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fit-red">
            OUR WORKOUT PROGRAMS
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
            FIND YOUR
            <span className="block text-fit-red">
              WORKOUT STYLE.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-gray-soft md:text-base">
            Pilih program workout yang sesuai dengan kebutuhanmu
            dan nikmati pengalaman latihan bersama Go WorkOut Kediri.
          </p>
        </div>

        {/* KARTU PROGRAM */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">

          {programs.map((program) => {
            const Icon = program.icon

            return (
              <div
                key={program.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-black-88 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-fit-red hover:shadow-xl"
              >
                {/* BAGIAN ATAS KARTU */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-fit-red via-[#A51520] to-black">
                  <div className="absolute h-40 w-40 rounded-full border border-white/20" />
                  <div className="absolute h-28 w-28 rounded-full border border-white/20" />

                  <Icon
                    size={76}
                    strokeWidth={1.4}
                    className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="absolute bottom-4 left-5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                    GO WORKOUT KEDIRI
                  </span>
                </div>

                {/* INFORMASI PROGRAM */}
                <div className="p-7 md:p-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-fit-red">
                    {program.subtitle}
                  </p>

                  <h3 className="text-2xl font-extrabold uppercase text-white">
                    {program.title}
                  </h3>

                  <div className="my-6 flex items-end gap-2">
                    <span className="text-3xl font-extrabold text-fit-red">
                      {program.price}
                    </span>

                    <span className="mb-1 text-sm text-gray-soft">
                      / {program.priceInfo}
                    </span>
                  </div>

                  <p className="mb-7 text-sm leading-relaxed text-gray-soft">
                    {program.description}
                  </p>

                  {/* TOMBOL MENUJU HALAMAN PROGRAM */}
                  <a
                    href="/program"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-fit-red px-6 py-4 text-sm font-bold text-white transition-all hover:bg-black-88"
                  >
                    LIHAT PROGRAM
                    <FiArrowRight size={18} />
                  </a>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default ProgramWorkout
