import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
     <div className='w-full h-screen duration-100'
        style={{backgroundColor: color}}>
       <div className='fixed flex flex wrap justify-center bottom-12 inset-x-0 px-3'>
         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
           
            <button onClick = {() => setColor("darkred")} 
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "darkred"}}>
              Red
            </button>

           <button 
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor: "green"}}
             onClick={() => setColor("green")}>
             Green
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor: "blue"}}
             onClick={() => setColor("blue")}>
             Blue
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor: "yellow"}}
             onClick={() => setColor("yellow")}>
             Yellow
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor: "pink"}}
             onClick={() => setColor("pink")}>
             Pink
           </button>

           <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor: "purple"}}
             onClick={() => setColor("purple")}>Purple</button>

           <button 
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor: "olive"}}
             onClick={() => setColor("olive")}>
             olive
           </button>

           <button 
             className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
             style={{backgroundColor: "gold"}}
             onClick={() => setColor("gold")}>
             Gold
           </button>
           
         </div>
       </div>
     </div>
    </>
  )
}

export default App
