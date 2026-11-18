import {
  FiActivity,
  FiCalendar,
  FiClipboard,
  FiCheckCircle,
} from 'react-icons/fi'

function CaraBooking() {
  const langkahBooking = [
    {
      nomor: '01',
      icon: FiActivity,
      title: 'Pilih Program',
      description:
        'Pilih program workout yang sesuai dengan kebutuhanmu, Personal Home atau Group Home.',
    },
    {
      nomor: '02',
      icon: FiCalendar,
      title: 'Tentukan Jadwal',
      description:
        'Pilih tanggal dan waktu latihan yang tersedia sesuai dengan jadwalmu.',
    },
    {
      nomor: '03',
      icon: FiClipboard,
      title: 'Isi Data Pemesanan',
      description:
        'Lengkapi data diri, jumlah peserta, dan alamat lokasi workout dengan benar.',
    },
    {
      nomor: '04',
      icon: FiCheckCircle,
      title: 'Tunggu Konfirmasi',
      description:
        'Admin akan memeriksa pemesanan dan mengonfirmasi jadwal serta trainer yang ditugaskan.',
    },
  ]

  return (
    <section
      id="cara-booking"
      className="bg-transparent px-6 py-20 text-white md:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* JUDUL SECTION */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fit-red">
            EASY BOOKING PROCESS
          </p>

          <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
            HOW TO BOOK
            <span className="block text-fit-red">
              YOUR WORKOUT?
            </span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-gray-soft md:text-base">
            Booking workout kini lebih mudah.
            Ikuti empat langkah sederhana untuk memulai
            sesi latihan bersama kami.
          </p>
        </div>

        {/* LANGKAH BOOKING */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {langkahBooking.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.nomor}
                className="group relative rounded-2xl border border-white/10 bg-black-88 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-fit-red hover:shadow-xl"
              >
                {/* NOMOR LANGKAH */}
                <span className="absolute right-6 top-5 text-3xl font-extrabold text-white/10 transition-colors duration-300 group-hover:text-fit-red/30">
                  {item.nomor}
                </span>

                {/* ICON */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-fit-red/10 text-fit-red transition-all duration-300 group-hover:bg-fit-red group-hover:text-white">
                  <Icon size={28} />
                </div>

                {/* KONTEN */}
                <h3 className="mb-3 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-soft">
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

export default CaraBooking
