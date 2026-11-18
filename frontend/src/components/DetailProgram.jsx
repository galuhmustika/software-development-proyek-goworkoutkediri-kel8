
import {
  FiUser,
  FiUsers,
  FiCheckCircle,
  FiMapPin,
} from 'react-icons/fi'

function DetailProgram() {
  const programs = [
    {
      id: 'personal',
      icon: FiUser,
      title: 'Personal Home',
      subtitle: 'PRIVATE WORKOUT EXPERIENCE',
      price: 'Rp25.000',
      unit: '/ sesi',
      description:
        'Program workout secara personal dengan pendampingan trainer yang datang langsung ke lokasi pilihanmu.',
      features: [
        'Latihan secara personal',
        'Pendampingan personal trainer',
        'Jadwal latihan dapat dipilih',
        'Lokasi latihan sesuai pilihan pelanggan',
      ],
      transport:
        'Biaya transportasi menyesuaikan jarak lokasi pelanggan.',
    },
    {
      id: 'group',
      icon: FiUsers,
      title: 'Group Home',
      subtitle: 'WORKOUT TOGETHER, STAY HEALTHY',
      price: 'Rp25.000',
      unit: '/ orang / sesi',
      description:
        'Program workout bersama teman atau keluarga dalam satu lokasi dengan pendampingan trainer.',
      features: [
        'Latihan bersama teman atau keluarga',
        'Pendampingan trainer',
        'Jadwal latihan dapat dipilih',
        'Lokasi latihan sesuai pilihan pelanggan',
      ],
      transport:
        'Biaya transportasi dihitung satu kali untuk kelompok.',
    },
  ]

  return (
    <section id="detail-program" className="bg-transparent px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fit-red">
            OUR WORKOUT PROGRAMS
          </p>

          <h2 className="text-3xl font-extrabold md:text-5xl">
            FIND YOUR <span className="text-fit-red">PROGRAM.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-soft">
            Pilih program latihan yang sesuai dengan kebutuhanmu
            dan nikmati pengalaman workout langsung dari rumah.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon

            return (
              <div
                key={program.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-black-88 transition-all duration-300 hover:-translate-y-2 hover:border-fit-red"
              >
                <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-[#A51520] via-black-88 to-black">
                  <div className="absolute h-36 w-36 rounded-full border border-white/20" />
                  <Icon size={70} className="relative z-10 text-white" />
                </div>

                <div className="p-7 md:p-8">
                  <p className="mb-2 text-xs font-bold tracking-widest text-fit-red">
                    {program.subtitle}
                  </p>

                  <h3 className="text-2xl font-extrabold">
                    {program.title}
                  </h3>

                  <div className="my-5 flex items-end gap-2">
                    <span className="text-3xl font-extrabold text-fit-red">
                      {program.price}
                    </span>
                    <span className="mb-1 text-sm text-gray-soft">
                      {program.unit}
                    </span>
                  </div>

                  <p className="mb-6 text-sm leading-relaxed text-gray-soft">
                    {program.description}
                  </p>

                  <div className="border-t border-white/10 pt-6">
                    <h4 className="mb-4 text-sm font-bold uppercase">
                      Program Benefits
                    </h4>

                    <div className="space-y-3">
                      {program.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <FiCheckCircle className="mt-0.5 shrink-0 text-fit-red" />
                          <p className="text-sm text-gray-soft">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-black p-4">
                    <FiMapPin className="mt-0.5 shrink-0 text-fit-red" />
                    <p className="text-xs leading-relaxed text-gray-soft">
                      {program.transport}
                    </p>
                  </div>

                  <a
                    href={`/booking?program=${program.id}`}
                    className="mt-7 flex items-center justify-center rounded-full bg-fit-red px-6 py-4 text-sm font-bold transition hover:bg-red-700"
                  >
                    BOOK THIS PROGRAM
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

export default DetailProgram
