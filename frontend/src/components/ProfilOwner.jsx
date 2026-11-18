
import { FiUser } from 'react-icons/fi'

function ProfilOwner() {
  return (
    <section className="bg-transparent px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fit-red">
            THE PERSON BEHIND THE BRAND
          </p>

          <h2 className="text-3xl font-extrabold md:text-5xl">
            MEET THE <span className="text-fit-red">OWNER.</span>
          </h2>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-black-88 md:grid-cols-2">

          {/* PLACEHOLDER FOTO OWNER */}
          <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-[#383838] to-black">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/5 text-gray-soft">
              <FiUser size={64} />
            </div>
          </div>

          {/* INFORMASI OWNER */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-fit-red">
              FOUNDER & OWNER
            </p>

            <h3 className="text-3xl font-extrabold">
              Coach Ella
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-gray-soft">
              Sosok di balik Go Work Out Kediri yang menghadirkan
              pengalaman workout praktis dan personal langsung
              di lokasi pilihan pelanggan.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-soft">
              Profil lengkap dan perjalanan membangun Go Work Out
              Kediri akan segera ditambahkan.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProfilOwner
