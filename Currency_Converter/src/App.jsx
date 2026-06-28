import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Currency App</h1>
    </>
  )
}

export default App
