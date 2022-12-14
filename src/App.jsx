import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

import AboutMe from './Components/AboutMe'
import Hobbies from './Components/Hobbies'
import FreeTime from './Components/FreeTime'
import Technologies from './Components/Technologies'
import Food from './Components/Food'



function App() {
  const [count, setCount] = useState(0)



  return (
    <div className="App">
      <div className='Encabezado'>
        <h1>Tarea Moral React</h1>
      </div>
      <div className='Container'>
        <AboutMe />
        <Hobbies />
        <FreeTime />
        <Food />
        <Technologies />
      </div>
    </div>

  )
}

export default App
