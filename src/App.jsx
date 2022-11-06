import { useState } from 'react'
import './App.css'
import './Components/Navbar'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='Contenedor bg-taws h-screen w-full'>
        <Navbar></Navbar>
      </div>
    </div>
  )
}

export default App
