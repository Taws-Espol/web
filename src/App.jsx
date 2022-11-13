import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Sections from './Components/Sections'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='Contenedor bg-taws w-full'>
        <Navbar></Navbar>
        <Main></Main>
        <Sections></Sections>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
