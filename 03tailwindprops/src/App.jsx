import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-orange-400 text-black p-4 rounded-xl mb-4' >Tailwind works!</h2>

      <Card />

    </>
  )
}

export default App
