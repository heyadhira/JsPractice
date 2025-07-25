import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0)

  const increment = () =>{
    setCounter(counter2 => counter2 + 1)
    setCounter(counter2 => counter2 + 1)
    setCounter(counter2 => counter2 + 1)
    setCounter(counter2 => counter2 + 1)
    setCounter(counter2 => counter2 + 1)
  }

  const reset = () =>{
    setCounter(0)
  }

  const decrement = () =>{
    setCounter(counter>0?counter - 1:0)
  }


  return (
    <>
      <h3>Counter = {counter}</h3>
      <button onClick={increment}>Increment</button>
      <button disabled={counter==0} onClick={reset}>Reset</button>
      <button disabled={counter==0} onClick={decrement}>Decrement</button>

    </>
  )
}

export default App
