import React from "react";
import Card from "../components/Card";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/authBg.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import { RiImageAddFill } from "react-icons/ri";

const Customize = () => {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-t from-[black] to-[#3b3bb1] flex justify-center items-center flex-col">
        <h1 className='text-white text-[30px] text-center p-[20px]'>Select Your 
            <span className='text-blue-200'> Assistant Image</span></h1>
      <div className="w-[90%] max-w-[900px] mb-[30px] flex justify-center items-center flex-wrap gap-[15px]">
        <Card image={image1} />
        <Card image={image2} />
        <Card image={image3} />
        <Card image={image4} />
        <Card image={image5} />
        <Card image={image6} />
        <Card image={image7} />

        <div
          className="w-[70px] h-[140px] lg:w-[150px] lg:h-[250px] bg-[#30326] border-2 
          border-[#0000ff66] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 
            cursor-pointer hover:border-4 hover:border-white flex items-center justify-center">

            <RiImageAddFill className='text-white w-[25px] h-[25px]' />

        </div>
      </div>
    </div>
  );
};

export default Customize;
