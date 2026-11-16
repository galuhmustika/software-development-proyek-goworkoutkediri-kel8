import {
  FiHome,
  FiUserCheck,
  FiCalendar,
  FiActivity,
} from 'react-icons/fi'

function KeunggulanLayanan() {
  const keunggulan = [
    {
      icon: FiHome,
      title: 'Workout di Rumah',
      description:
        'Nikmati sesi latihan tanpa harus pergi ke gym. Trainer datang langsung ke lokasi pilihanmu.',
    },
    {
      icon: FiUserCheck,
      title: 'Personal Trainer',
      description:
        'Dapatkan pendampingan latihan secara langsung bersama personal trainer.',
    },
    {
      icon: FiCalendar,
      title: 'Jadwal Fleksibel',
      description:
        'Pilih jadwal latihan sesuai waktu yang tersedia melalui sistem booking.',
    },
    {
      icon: FiActivity,
      title: 'Program Beragam',
      description:
        'Temukan pilihan program workout yang dapat disesuaikan dengan kebutuhan latihanmu.',
    },
  ]

  return (
    <section
      id="keunggulan"
       className="bg-gradient-to-br from-fit-red via-black-88 to-black px-6 py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* JUDUL SECTION */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fit-red">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            WORKOUT LEBIH MUDAH,
            <span className="block text-fit-red">
              HASIL LEBIH MAKSIMAL.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-gray-soft md:text-base">
            Kami menghadirkan pengalaman workout yang praktis
            dan nyaman dengan pendampingan personal trainer
            langsung di lokasi pilihanmu.
          </p>
        </div>

        {/* DAFTAR KEUNGGULAN */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keunggulan.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-fit-red hover:shadow-xl"
              >
                {/* ICON */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F01E2C]/10 text-fit-red transition-colors duration-300 group-hover:bg-fit-red group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* JUDUL */}
                <h3 className="mb-3 text-lg font-bold">
                  {item.title}
                </h3>

                {/* DESKRIPSI */}
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default KeunggulanLayanan
