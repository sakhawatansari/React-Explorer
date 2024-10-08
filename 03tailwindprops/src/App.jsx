import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-orange-400 text-black p-4 rounded-xl mb-4' >Tailwind works!</h1>

      <Card username= "sakhawatansari.dev" btnText="click here"/>
      <Card username="sakhawatansari.staff" btnText="visit me"/>

    </>
  )
}

export default App
