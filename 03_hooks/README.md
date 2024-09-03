# Hooks in React library

* Hooks were added to React in version 16.8.
* Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

## What is a Hook?
=> Hooks allow us to "hook" into React features such as state and lifecycle methods.

## Hook Rules
There are 3 rules for hooks:
* 1. Hooks can only be called inside React function components.
* 2. Hooks can only be called at the top level of a component.
* 3. Hooks cannot be conditional

## Example -

```Javascript
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Declare a new state variable, which we'll call 'count'
  const [count, setCount] = useState(0)

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

export default App

```


## Reference
- [@React.dev](https://react.dev/reference/rules/rules-of-hooks)
- [@W3schools](https://www.w3schools.com/react/react_hooks.asphttps://github.com/vitejs/vite-plugin-react-swc)