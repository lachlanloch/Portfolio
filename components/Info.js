'use client'
import React, {useState, useEffect} from 'react'
import { Poppins } from "next/font/google";
import Link from 'next/link';
import UseScreenSize from './UseScreenSize';


const poppinsLarge = Poppins({ subsets: ["latin"], weight: ['700']});
const poppins = Poppins({ subsets: ["latin"], weight: ['400']});

function scrollToElement(elementName) {
  if (elementName) {
    elementName.scrollIntoView({ behavior: 'smooth' });
  }
}

const largeScreen = 
(
    <div className='max-w-[100%] lg:max-w-[400px] flex flex-col lg:items-center lg:my-20 fixed ' >
     <p className={"text-4xl sm:text-6xl sm:my-4 lg:text-8xl text-indigo-300 " + poppinsLarge.className }>Lachlan Sim</p>
    <p className={"text-l my-4 sm:text-2xl sm:my-8 lg:text-4xl " + poppinsLarge.className }> Front End Developer</p>
    <p className='text-zinc-400 text-sm sm:text-base lg:text-2xl '>Crafting code that connects <span className='text-indigo-200'>people</span> and <span className='text-indigo-200'>possibilities</span></p>
    <ul className='flex my-6 sm:my-8 justify-left gap-6 sm:gap-8 md:gap-10 text-zinc-400 sm:text-2xl  lg:text-4xl lg:my-14 '>
      <Link href="https://github.com/lachlanloch"><li><i className="fa-brands fa-github sm:hover:text-2xl lg:hover:text-5xl"></i></li></Link>     
      <Link href="https://www.linkedin.com/in/lachlan-sim">  <li><i className="fa-brands fa-linkedin sm:hover:text-2xl lg:hover:text-5xl"></i></li></Link>         
      <Link href="https://www.instagram.com/lachland0/"> <li><i className="fa-brands fa-instagram sm:hover:text-2xl lg:hover:text-5xl"></i></li></Link>
    </ul>    

    <div className="flex flex-col gap-1">
    <button className='text-xl hover:text-2xl'  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >About</button>
    <button  className='text-xl hover:text-2xl' onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button>
    <button className='text-xl hover:text-2xl' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
    </div>
    </div> 
)
const smallScreen = (
    <div className='flex flex-col'>
    <p className={"text-4xl sm:text-6xl sm:my-4 lg:text-8xl text-indigo-300 " + poppinsLarge.className }>Lachlan Sim</p>
    <p className={"text-l my-4 sm:text-2xl sm:my-8 lg:text-4xl " + poppinsLarge.className }> Front End Developer</p>
    <p className='text-zinc-400 text-sm sm:text-base lg:text-2xl '>Crafting code that connects <span className='text-indigo-200'>people</span> and <span className='text-indigo-200'>possibilities</span></p>
    <ul className='flex my-6  text-2xl sm:my-8 justify-evenly gap-6 sm:gap-8 md:gap-10 text-zinc-400 sm:text-3xl  lg:my-14 '>
      <Link href="https://github.com/lachlanloch"><li><i className="fa-brands fa-github hover:text-4xl"></i></li></Link>     
      <Link href="https://www.linkedin.com/in/lachlan-sim">  <li><i className="fa-brands fa-linkedin hover:text-4xl"></i></li></Link>         
      <Link href="https://www.instagram.com/lachland0/"> <li><i className="fa-brands fa-instagram hover:text-4xl"></i></li></Link>
    </ul>    
    </div> 
)
export default function Info() {

    const [isLargeScreen, setIsLargeScreen] = useState(false);

   
 // Function to handle resizing
 const handleResize = () => {
    const windowWidth = window.innerWidth;
    // Set screen size based on a Tailwind breakpoint (e.g., lg is 1024px)
    setIsLargeScreen(windowWidth >= 1024); // 1024px is the `lg` breakpoint in Tailwind
  };
  useEffect(() => {
    // Initialize the correct screen size on component mount
    handleResize();
    // Add event listener to track screen resizing
    window.addEventListener('resize', handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    const screenSize = UseScreenSize()
  return (
    <div className='p-8 text-zinc-200 sm:p-14 z-10 bgColor flex justify-center '>

{isLargeScreen ? largeScreen : smallScreen}
       
      </div>
  )
}
