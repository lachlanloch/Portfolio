'use client'
import React, {useState} from 'react'
import Info from './Info';
import { Poppins } from "next/font/google";
import About from './About';



const poppins = Poppins({ subsets: ["latin"], weight: ['400']});



export default function Hero() {

  

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = ((e.clientX - rect.left) / rect.width) * 100;
    const yPos = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: xPos, y: yPos });
  };


  return (
    <div className={'grid lg:grid-cols-2 relative lg:h-screen  h-screen text-center word-break w-full h-full ' + poppins.className} 
    onMouseMove={handleMouseMove} >
    <div 
        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none`} 
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #171A39, 10%, transparent 25%)`,
          zIndex: 2,
        }}
      />
    <Info  /> 
    <About />
      
      


      
    </div>
  );
}
