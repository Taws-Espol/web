import './App.css'
import Main from './components/Main'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sections from './components/Sections'
import Dots from './Components/DotPattern'

function App() {
  return (
    <div className="App bg-taws">
      <Dots/>
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
