import React, { useContext, useState } from 'react'
import { userDataContext } from '../context/UserContext'

function Customize2() {
    const {userData} = useContext(userDataContext)
    const [assistantName, setAssistantName] = useState(userData ?. assistantName || '')
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#3b3bb1] 
    flex justify-center items-center flex-col p-[20px]'>
        <h1 className='text-white mb-[40px] text-[30px] text-center'
        >Enter Your <span className='text-blue-200'>Assistant Name</span></h1>

        <input type='text' placeholder='eg. Shifra' className='w-full max-w-[600px] h-[60px]
        outline-none border-2 border-white bg-transparent
        text-white placeholder-gray-300 px-[20px] py-[10px]
        rounded-full text-[18px]'required onChange={(e)=>setAssistantName(e.target.value)} value={assistantName}/>
        {assistantName && 
          <button
          className="min-w-[300px] h-[60px] mt-[30px] text-black font-seminbold
        bg-white rounded-full text-[19px] cursor-pointer"
        onClick={()=>navigate('/customize2')}>
          Finally Create Your Assistant
        </button>
        }
       
      
    </div>
  )
}

export default Customize2
