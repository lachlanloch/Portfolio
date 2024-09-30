'use client'
import React, {useState} from 'react'
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Link from 'next/link';

const skillsObjList = [{
  name: "HTML&CSS",
  icon: "fa-brands fa-html5 text-blue-400 "
},
{
  name: "React",
  icon: "fa-brands fa-react text-blue-400 ",
},{
  name: "Javascript",
  icon: "fa-brands fa-js text-yellow-200 "
},{
  name: "Git",
  icon: "fa-brands fa-git-alt text-red-200 "
},{
  name: "Firestore",
  icon: "fa-solid fa-database text-orange-200 "
},{
  name: "Next.js",
  icon: "fa-solid fa-n text-black "
},]

const poppinsLarge = Poppins({ subsets: ["latin"], weight: ['700']});
const poppins = Poppins({ subsets: ["latin"], weight: ['400']});
export default function Hero() {


  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = ((e.clientX - rect.left) / rect.width) * 100;
    const yPos = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePos({ x: xPos, y: yPos });
  };

  function convertToArray(obj){
    return Object.keys(obj).map(key =>({
      key,
      ...obj[key],
    }))
  }
  const skillsArray  = convertToArray(skillsObjList)
  return (
    <div className={'grid bgColor relative overflow-hidden ' + poppins.className} 
    
    onMouseMove={handleMouseMove} 
    >
    <div 
        className={`absolute inset-0 transition-opacity duration-300 pointer-events-none`} 
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #171A39, 10%, transparent 25%)`,
          zIndex: 2,
        }}  
      />
      
      <div className=' p-8 text-zinc-200 sm:p-14 my-10 z-10'>
        <div className='max-w-[100%] lg:max-w-[400px] '>
        <p className={"text-4xl sm:text-6xl sm:my-4 lg:text-8xl " + poppinsLarge.className }>Lachlan Sim</p>
        <p className={"text-l my-4 sm:text-2xl sm:my-8 lg:text-4xl " + poppinsLarge.className }> Front End Developer</p>
        <p className='text-zinc-400 text-sm sm:text-base lg:text-2xl '>Crafting code that connects <span className='text-zinc-50'>people</span> and <span className='text-zinc-50'>possibilities</span></p>


        <ul className='flex my-6 sm:my-8 justify-left gap-6 sm:gap-8 md:gap-10 text-zinc-400 sm:text-2xl  lg:text-4xl lg:my-14 '>
          <Link href="https://github.com/lachlanloch"><li><i className="fa-brands fa-github"></i></li></Link>
          
          <Link href="https://www.linkedin.com/in/lachlan-sim">  <li><i className="fa-brands fa-linkedin"></i></li></Link>  
        
          <Link href="https://www.instagram.com/lachland0/"> <li><i className="fa-brands fa-instagram"></i></li></Link>
         
        </ul>    
        </div> 
      </div>


      <div className='p-8 sm:p-14 text-zinc-400 text-sm sm:text-lg z-10 '>
        <h1 className='text-zinc-200 sm:text-2xl lg:text-4xl'>About Me!</h1>

          <p className='my-4'>
            I began my journey into web development in 2018,
            inspired by my uncle, who was an experienced developer.
            I spent hours reading through his code, fascinated
            by how websites were built from scratch. 
            That curiosity quickly turned into a passion,
            and I began teaching myself how to code, determined
            to build websites just like him. At first, it was a
            lot of trial and error, but those early days laid
            the foundation for what would become a long-term
            interest in web development.
          </p>


        <p className='my-4'>
          Fast forward to today, and my focus has shifted towards
          mastering modern frameworks and languages. I’m working on developing
          full-stack applications and becoming proficient in handling data.
          Staying updated with the latest technology trends has been a major
          part of my learning process, as I aim to create dynamic, efficient
          applications that meet today’s standards. From backend development
          to frontend design, I’m constantly exploring new tools and 
          frameworks to sharpen my skills.</p>
      
       <p className='my-4'> 
          Outside of coding, I have a few passions that keep me grounded.
          I’ve developed a deep love for philosophy, particularly in areas 
          like the philosophy of religion, epistemology, and logic, which challenge
          me to think critically and explore deeper questions about knowledge
          and existence. I also practice calligraphy, enjoying the art
          of blackletter and copperplate scripts. Spending time with my 
          two cats and traveling through the stunning landscapes of New
          Zealand are other ways I unwind and stay inspired
      </p>


      </div>


      <div className='lg:flex lg:flex-col  p-8 sm:p-14 text-zinc-400 z-10'>
        <p className=" text-2xl sm:text-4xl my-4 sm:my-8 lg:text-4xl text-zinc-200">
            My Skills
            </p>
        <ul className=' grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12'>
          {skillsArray.map((item) =>{
            return(
          <li key={item.key} className="grid grid-rows border border-fill justify-center sm:p-8 text-xl sm:text-2xl lg:text-4xl bgColor2">
            <p className='text-center'>{item.name}</p>
            <span className='text-center'>
               <i className={ item.icon + " text-center my-4 " }/>
            {item.name === "HTML&CSS" && <i className="fa-brands fa-css3-alt text-red-200 mx-2"></i>}
            </span>                     
          </li>
            )
          })}
        </ul>
      </div>


      <div className='flex flex-col  p-8 sm:p-14 text-zinc-400 z-10'>
        
        <h1 className='text-2xl sm:text-4xl my-4 lg:text-4xl text-zinc-200'>My Projects</h1>
       
        <div className='text-sm sm:text-lg  lg:text-2xl'>
            
            <div className='md:flex md:flex-row-reverse md:gap-16 '>

              <div>
              <Link href={"https://trackingyourlife.netlify.app"}>
              <h1 className='my-4 text-zinc-100'>Lifetracker - Track your Mood!</h1>
              </Link>

<p className='my-4'>
  Simple website where you track your mood each day and gets displayed on a calender from which
  you can look back on and see how you have been feeling! In addition to this there is a section 
  of the website where you can answer daily questions and saves them to a firestore noSQL db .
  Deployed with Netlify.

</p>

              </div>
              <Link href={"https://trackingyourlife.netlify.app"}>
            <Image
            src='/images/lifetracker.jpg'
            width={300}
            height={50}
            alt="LifeTracker website"
            className="my-8 w-full   lg:max-w-[400px] "/>
            </Link>
            </div>
              <ul className='flex flex-wrap gap-2 sm:gap-2 text-xs sm:text-base lg:text-2xl my-6 md:my-10 '>
                <li className='bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block '>React</li>
                <li className='bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block' >Next.js</li>
                <li className='bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 '>Tailwind</li>
                <li className='bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 '>Javascript</li>
                <li className='bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 '>Firestore</li>
                <li className='bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 '>Netlify</li>
              </ul>
        </div>
      </div>
    </div>

  )
}
