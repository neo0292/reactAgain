import { useState, useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [pass, setPass] = useState('')
  const [char, setChar] = useState(false)
  const [number, setNumber] = useState(false)

  const passGenerator = useCallback(() =>{
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (number) str += '0123456789'
    if (char) str +='!@#$%^&*()*+,-./'
    let passn='';

    for (let i = 1; i <= length; i++) {
      let selectChar =  Math.floor(Math.random() * str.length + 1)
      passn += str.charAt(selectChar)
      }
    setPass(passn);
  }, [number, char, setPass, length])

  useEffect(() =>{
    passGenerator();
    
  }, [number, char,  length]);

  // useRef hook

  const passwordRef = useRef('null') // initial value of password is null
  const copyGeneratedPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pass);
  },[pass]);
  return (
   <>
   <div className='fixed flex flex-wrap flex-col justify-center  mx-auto top-20 bg-slate-500 rounded-md py-4 px-4   '>
    <h1 className=' text-4xl text-center text-white'>Password Generator</h1>
    <br />
    <div>
    <input type="text" className='rounded-md ml-40' value={pass}
      ref= {passwordRef}  />
    <button className='bg-blue-700 rounded-md mx-2  px-1'
      onClick={copyGeneratedPass}>Copy</button>
    </div>

    <div className='mx-40'>
    <input type="range" name="number" id="num1" min={5} max={25} value={length} 
      className='my-4'
      onChange={(e)=>{
        setLength(e.target.value);
      }}
      /> <label htmlFor="range">Length: {length}</label>

    <input type="checkbox" name="num" id="num2" 
      className='mx-2'
      onClick={()=>{
        setNumber(!number);
      }}
      /> <label>Numbers</label>
    <input type="checkbox" name="num" id="num2" 
      className='mx-2'
      onClick={()=>{
        setChar(!char);
      }}
      /> <label>Special Charatcter</label>
    
    </div>
    </div>
   </>
  )
}

export default App
