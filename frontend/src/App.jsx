import NavigasiBar from './components/NavigasiBar'

function App() {
  return (
    <>
      <NavigasiBar />

        <main id="beranda" className="min-h-screen bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h1 className="text-4xl font-extrabold text-black-88">
              GO WORK OUT <span className="text-fit-green">KEDIRI</span>
            </h1>

            <p className="mt-4 text-lg text-black-88">
              Workout lebih mudah, kapan saja dan dimana saja.
            </p>
          </div>
        </main>
    </>
  )
}

export default App