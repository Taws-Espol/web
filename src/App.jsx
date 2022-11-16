import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sections from './components/Sections'

function App() {
  return (
    <div className="App bg-taws">
      <div className='Contenedor w-10/12 mx-auto'>
        <Navbar/>
        <Main/>
        <Sections/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
