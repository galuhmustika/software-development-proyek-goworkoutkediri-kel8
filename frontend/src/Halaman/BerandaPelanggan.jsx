import NavigasiBar from '../components/NavigasiBar'
import HeroSection from '../components/HeroSection'
import KeunggulanLayanan from '../components/KeunggulanLayanan'
import ProgramWorkout from '../components/Programworkout'
import Footer from '../components/Footer'
import CaraBooking from '../components/Carabooking'
import CTASection from '../components/CTA'

function BerandaPelanggan() {
  return (
    <>
      <NavigasiBar />

      {/* BACKGROUND GRADIENT UTAMA */}
      <div className="bg-gradient-to-b from-fit-red via-black-88 to-black">

        <main>
          <HeroSection />
          <KeunggulanLayanan />
          <ProgramWorkout />
          <CaraBooking />
          <CTASection />
        </main>

        <Footer />

      </div>
    </>
  )
}

export default BerandaPelanggan