import { useState } from 'react'
import { useCallback, useEffect, useRef} from 'react'

function App() {
  
  const [length, setLen] = useState(8)
  const [NoAllowed, setAllowed] = useState(false)  
  const [CharAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(NoAllowed) str += "0123456789"
    if(CharAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    
  }, [length, NoAllowed, CharAllowed, setPassword])

  const CopyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, NoAllowed, CharAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow-xl rounded-lg overflow-hidden mb-4'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3 bg-gray-100'
              placeholder='Password'
              readOnly
              ref={passwordRef}
              />
            <button 
              className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              onClick={CopyPasswordToClipboard}
              >
              Copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-3 mb-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLen(e.target.value)}}
              />
            <label>Length: {length}</label>
          </div>  
          <input
            type='checkbox'
            defaultChecked={NoAllowed}
            id='numberInput'
            onChange={() => {
              setAllowed((prev) => !prev);
            }}
            />
          <label htmlFor='numberInput'>Numbers</label>
          <input
            type='checkbox'
            defaultChecked={CharAllowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
