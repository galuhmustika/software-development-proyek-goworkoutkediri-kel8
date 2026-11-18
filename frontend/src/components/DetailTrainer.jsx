
import { FiUser } from 'react-icons/fi'

function DaftarTrainer() {
  const trainers = [
    { id: 1, name: 'Trainer 1' },
    { id: 2, name: 'Trainer 2' },
    { id: 3, name: 'Trainer 3' },
    { id: 4, name: 'Trainer 4' },
  ]

  return (
    <section className="bg-transparent px-6 py-14 md:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fit-red">
            MEET OUR TEAM
          </p>

          <h2 className="text-3xl font-extrabold md:text-5xl">
            OUR <span className="text-fit-red">TRAINERS.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm text-gray-soft">
            Kenali tim trainer yang akan mendampingi perjalanan
            workout dan kebugaranmu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-black-88 transition-all duration-300 hover:-translate-y-2 hover:border-fit-red"
            >
              {/* PLACEHOLDER FOTO */}
              <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-[#383838] to-black">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/5 text-gray-soft">
                  <FiUser size={48} />
                </div>
              </div>

              <div className="p-5 text-center">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-fit-red">
                  PERSONAL TRAINER
                </p>

                <h3 className="text-lg font-bold">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-xs text-gray-soft">
                  Profil dan spesialisasi akan segera ditambahkan.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default DaftarTrainer
