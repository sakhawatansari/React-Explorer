import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './compnents/AddTodo'
import Todos from './compnents/Todos'

function App() {
  
  return (
    <>
      <h1 className='text-amber-400 text-4xl text-wrap font-bold'>Todo with React, Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App