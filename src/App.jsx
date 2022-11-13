import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sections from './components/Sections'

function App() {
  return (
    <div className="App">
      <div className='Contenedor bg-taws w-full'>
        <Navbar/>
        <Main/>
        <Sections/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
