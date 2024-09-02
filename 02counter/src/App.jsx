import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)
  // above useState hook are same works as let counter
  //let Counter = 10

  const addValue = () => {
    if (counter < 50)
    setCounter(counter +1)
  }

  const removeValue = () => {
    if(counter >0)
    setCounter(counter -1)
  }

  return (
    <>
    <h1>Count Application in React</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
