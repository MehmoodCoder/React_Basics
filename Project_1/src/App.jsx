import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increment = function add(){
      setCount(count+1)
      console.log(count+1)
      
      // interview question
      
      // setCount(count+1)
      // setCount(count+1)
      // setCount(count+1)

      // It will not work as expected because it will not update the count value immediately

      // setCount(count+1) // 0 + 1 = 1
      // setCount(count+2) // 0 + 2 = 2
      // setCount(count+3) // 0 + 3 = 3
      
      // it will give 3 because it reverse the last value



      
      // To handle this we use callback function

      // setCount(prevCount => prevCount+1)
      // setCount(prevCount => prevCount+1)
      // setCount(prevCount => prevCount+1)
      
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
