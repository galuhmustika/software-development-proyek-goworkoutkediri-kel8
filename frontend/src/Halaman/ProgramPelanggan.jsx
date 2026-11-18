
import NavigasiBar from "../components/NavigasiBar";
import Footer from "../components/Footer";

import DetailProgram from "../components/DetailProgram";
import DetailTrainer from "../components/DetailTrainer";
import ProfilOwner from "../components/ProfilOwner";
import CTASection from "../components/CTA";

function ProgramPelanggan() {
  return (
    <>
      <NavigasiBar />

      <div className="min-h-screen bg-gradient-to-b from-fit-red via-black-88 to-black text-white">
        <main>
          {/* HEADER HALAMAN */}
          <section className="px-6 pb-10 pt-20 text-center md:pt-28">
            <div className="mx-auto max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-fit-red">
                GO WORK OUT KEDIRI
              </p>

              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                FIND YOUR
                <span className="block text-fit-red">
                  WORKOUT STYLE.
                </span>
              </h1>

              <p className="mt-6 text-sm leading-relaxed text-gray-soft md:text-base">
                Kenali pilihan program workout, tim trainer,
                dan orang-orang di balik Go Work Out Kediri.
              </p>
            </div>
          </section>

          <DetailProgram />
          <DetailTrainer />
          <ProfilOwner />
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProgramPelanggan;
