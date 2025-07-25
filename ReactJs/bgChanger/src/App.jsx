import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("aqua")

  return (
    <>
      <div className='w-full h-screen duration-200'
       style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap 
        justify-center top-12 inset-x-0 px-2'>

         <div className='flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 
        rounded-full text-white'  style={{backgroundColor:"black"}}>
        Black
        </button>

        <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 
        rounded-full text-white'  style={{backgroundColor:"blue"}}>
        Blue
        </button>

        <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 
        rounded-full text-white'  style={{backgroundColor:"red"}}>
        Red
        </button>

        <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 
        rounded-full text-white'  style={{backgroundColor:"purple"}}>
        Purple
        </button>

        <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 
        rounded-full text-white'  style={{backgroundColor:"green"}}>
        green
        </button>
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
