import React from "react";
import bg from "../assets/authBg.png";

const Signup = () => {
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
      >
        <h1 className="text-white text-3xl font-semibold mb-7 text-center">
          Register to{" "}
          <span className="text-blue-400">Virtual Assistant</span>
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
        />
        <div className='w-full h-14 border-2 border-white bg-transparent text-white rounded-full text-lg'>
         <input
          type="password"
          placeholder="Pasword"
          className="
            w-full h-full
            outline-none border-2 border-white
            bg-transparent text-white placeholder-gray-300
            px-5 rounded-full text-lg
          "
         />
        </div>
          
      </form>
    </div>
  );
};

export default Signup;
