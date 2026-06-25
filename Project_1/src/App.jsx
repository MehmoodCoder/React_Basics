import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increment = function add(){
      setCount(count+1)
      console.log(count+1)
  }
  const decrement = function remove(){
      setCount(count-1)
      console.log(count-1)
  }

  return (
    <>
    <center>
            <h1>Counter</h1><hr />
            <p id="counter"> Counter : {count}</p><hr />
            <button id="decrement" onClick={decrement}>Decrement</button>
            <button id="increment" onClick={increment}>Increment</button>
    </center>
    </>
  )
}

export default App
