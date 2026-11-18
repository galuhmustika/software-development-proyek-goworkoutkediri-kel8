
import BerandaPelanggan from './Halaman/BerandaPelanggan'
import ProgramPelanggan from './Halaman/ProgramPelanggan'

function App() {
  const halaman = window.location.pathname

  if (halaman === '/program') {
    return <ProgramPelanggan />
  }

  return <BerandaPelanggan />
}

export default App
