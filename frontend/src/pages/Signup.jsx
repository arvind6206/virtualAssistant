import React, { useContext, useState } from "react";
import bg from "../assets/authBg.png";
import {useNavigate} from 'react-router-dom'
import { userDataContext } from "../context/userContext";
import axios from 'axios'
const Signup = () => {

  const {serverUrl, userData, setUserData} = useContext(userDataContext)
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault()
    setErr("")
    setLoading(true)
    try {
      let result = await axios.post(`${serverUrl}/api/auth/signup`, {
        name, email, password
      }, {withCredentails: true})
      setUserData(result.data)
      setLoading(false)
      navigate("/customize")
      }
     catch (error) {
      setUserData(null)
      console.log(error)
      setLoading(false)
      setErr(error.response.data.message)
    }
  }
  

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <form
        className="
          w-[90%] max-w-md h-[600px]
          bg-black/40 backdrop-blur-lg shadow-lg shadow-black
          flex flex-col items-center justify-center
          gap-5 px-5
        "
        onSubmit={handleSignup}
      >
        <h1 className="text-white text-3xl font-semibold mb-7 text-center">
          Register to <span className="text-blue-400">Virtual Assistant</span>
        </h1>

        <input
          type="text"
          placeholder="Enter your Name"
          className="
            w-full h-14
            outline-none border-2 border-white
            bg-transparent text-white placeholder-gray-300
            px-5 rounded-full text-lg
          "
          required onChange={(e)=>setName(e.target.value)} value={name}
        />
        <input
          type="email"
          placeholder="Email"
          className="
            w-full h-14
            outline-none border-2 border-white
            bg-transparent text-white placeholder-gray-300
            px-5 rounded-full text-lg
          "
          required onChange={(e)=>setEmail(e.target.value)} value={email}
        />
        <div className="w-full h-14 border-2 border-white bg-transparent text-white rounded-full text-lg">
          <input
            type="password"
            placeholder="Pasword"
            className="
            w-full h-full
            outline-none border-2 border-white
            bg-transparent text-white placeholder-gray-300
            px-5 rounded-full text-lg
          "
          required onChange={(e)=>setPassword(e.target.value)} value={password}
          />
        </div>
        {err.length > 0 && <p className='text-red-500 text-lg'>
          *{err}
          </p>}
        <button className="min-w-[150px] h-14 mt-7 bg-white text-black font-semibold text-lg rounded-full" disabled={loading}>
          {loading ? "Loading..." : "Sign Up"}
        </button>

        <p className='text-white text-lg cursor-pointer'
        onClick={()=>navigate('/signin')}>Already have an account ? <span className='text-blue-300'>Sign In</span></p>
      </form>
    </div>
  );
};

export default Signup;
