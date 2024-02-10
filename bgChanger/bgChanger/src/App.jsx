import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-screen h-screen duration-200' 
      style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center top-20 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 px-10 py-3  rounded-2xl bg-slate-50'>
          <button className='outline-none bg-red-700 rounded-2xl px-4 py-1 shadow-lg'
          onClick={()=>setColor('red')}
          >
            Red
          </button>
          <button className='outline-none bg-blue-700 rounded-2xl px-4 py-1 shadow-lg'
            onClick={()=>setColor('blue')}>
            Blue
          </button>
          <button className='outline-none bg-green-700 rounded-2xl px-4 py-1 shadow-lg'
            onClick={()=>setColor('green')}>
            Green
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
