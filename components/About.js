'use client'
import Link from 'next/link';
import React, {useRef} from 'react'
import Image from 'next/image';





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
  


  function convertToArray(obj){
    return Object.keys(obj).map(key =>({
      key,
      ...obj[key],
    }))
  }
    const skillsArray  = convertToArray(skillsObjList)


export default function About() {

  return (
    <div className=" z-10   bgColor  ">

<div className=" p-8 sm:p-14 text-zinc-400 z-10 lg:my-14 "  id="about">
        <h1 className="text-zinc-200 sm:text-4xl lg:text-3xl ">About</h1>
        <p className="my-4 sm:text-xl lg:text-base">
          I began my journey into web development in 2018, inspired by my uncle, who was an
          experienced developer. I spent hours reading through his code, fascinated by how
          websites were built from scratch. That curiosity quickly turned into a passion, and I
          began teaching myself how to code, determined to build websites just like him. At first,
          it was a lot of trial and error, but those early days laid the foundation for what would
          become a long-term interest in web development.
        </p>
        <p className="my-4 sm:text-xl lg:text-base">
          Fast forward to today, and my focus has shifted towards mastering modern frameworks and
          languages. I’m working on developing full-stack applications and becoming proficient in
          handling data. Staying updated with the latest technology trends has been a major part of
          my learning process, as I aim to create dynamic, efficient applications that meet today’s
          standards. From backend development to frontend design, I’m constantly exploring new
          tools and frameworks to sharpen my skills.
        </p>
        <p className="my-4 lg:my-0 sm:text-xl lg:text-base">
          Outside of coding, I have a few passions that keep me grounded. I’ve developed a deep love
          for philosophy, particularly in areas like the philosophy of religion, epistemology, and
          logic, which challenge me to think critically and explore deeper questions about knowledge
          and existence. I also practice calligraphy, enjoying the art of blackletter and copperplate
          scripts. Spending time with my two cats and traveling through the stunning landscapes of
          New Zealand are other ways I unwind and stay inspired.
        </p>
      </div>


<div className="lg:flex lg:flex-col p-8 sm:p-14 lg:px-14 text-zinc-400 z-10" id="skills">
        <p className="text-2xl sm:text-4xl my-4 sm:my-8 lg:my-4 lg:text-3xl text-zinc-200  " >Skills</p>
        <ul className="grid grid-cols sm:grid-cols-2  gap-4 sm:gap-8 lg:gap-12 lg:my-5">
          {skillsArray.map((item) => (
            <li
              key={item.key}
              className="grid grid-rows border border-fill justify-center sm:p-8 text-xl sm:text-2xl lg:text-2xl bgColor2 lg:mx-4 xl:mx-12 rounded-3xl"
            >
              <p className="text-center ">{item.name}</p>
              <span className="text-center">
                <i className={item.icon + ' text-center my-4'} />
                {item.name === 'HTML&CSS' && (
                  <i className="fa-brands fa-css3-alt text-red-200 mx-2 "></i>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
        {/*project1*/}
      <div className="flex flex-col p-8 sm:p-14 text-zinc-400 z-10 " id="projects">
        <h1 className="text-2xl sm:text-4xl my-4 lg:text-3xl text-zinc-200">Projects</h1>
        <div className="text-sm sm:text-lg lg:text-2xl">
          <div className="md:flex md:flex-row-reverse md:gap-16">
            <div>
              <Link href={'https://trackingyourlife.netlify.app'}>
                <h1 className="my-4 text-zinc-100">Lifetracker - Track your Mood!</h1>
              </Link>
              <div className="flex justify-center">
              <div className="max-w-lg 0">
      <div className="max-w-xs sm:max-w-md lg:max-w-lg"  >
      <Link href={'https://trackingyourlife.netlify.app/'}>
        <Image
          src="/images/lifetracker.jpg"
          alt="Next.js Logo"
          width={400}
          height={250}
          className=" p-2"
        />
              </Link>
      </div>
      </div>
    </div>
              <p className="my-4 text-base">
                Simple website where you track your mood each day and gets displayed on a calendar
                from which you can look back on and see how you have been feeling! In addition to
                this there is a section of the website where you can answer daily questions and save
                them to a Firestore NoSQL db. Deployed with Netlify.
              </p>
              <ul className="flex flex-wrap gap-2 sm:gap-2 text-xs sm:text-base lg:text-lg my-6 md:my-10 justify-center">
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block">
              React
            </li>
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block">
              Next.js
            </li>
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2">
              Tailwind
            </li>
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block">
              Firestore
            </li>
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block">
              Netlify
            </li>
          </ul>
            </div>         
          </div>    
        </div>
      </div>
       {/* project2*/}
      <div className="flex flex-col p-8 sm:p-14 text-zinc-400 z-10">
        <div className="text-sm sm:text-lg lg:text-2xl">
          <div className="md:flex lg:flex-row-reverse md:gap-16">
            <div>
              <Link href={'https://lachlanlochnoteynote.netlify.app/'}>
                <h1 className="my-4 text-zinc-100">NoteyNote - Preserve Your Thoughts Forever</h1>
                
              </Link>

              <div className="flex justify-center">
              <div className="max-w-lg ">
      <div className="rounded-lg overflow-hidden shadow-lg">
      <Link href={'https://lachlanlochnoteynote.netlify.app/'}>
        <Image
          src="/images/noteynote.jpg"
          alt="Next.js Logo"
   
          width={400}
          height={250}
          className="object-cover p-2"
        />
        </Link>
      </div>
    </div>
    </div>
              <p className="my-4 text-base">
              Welcome to NoteyNote, a sleek, intuitive web app I developed to make note-taking fun and effortless!
              On NoteyNote, you can easily add, delete, and filter through your notes in an instant, ensuring your
              thoughts stay organized and accessible. Plus, your data is saved securely, so your notes are always with you,
              forever. Whether you&apos;re tracking ideas, daily tasks, or creative inspirations, NoteyNote is built to handle it
              all—making it your ultimate companion for capturing and storing everything that matters!
              </p>
              <ul className="flex flex-wrap gap-2 sm:gap-2 text-xs sm:text-base lg:text-lg my-6 md:my-10 justify-center">
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block">
              React
            </li>
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block">
              Next.js 
            </li>
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2">
              Tailwind
            </li>
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block">
              Firestore
            </li>
            <li className="bg-[#0f2b40] text-[#77d2d3] border border-[#77d2d3] border-none rounded-lg p-2 inline-block">
              Netlify
            </li>
          </ul>
            </div>     
          </div>        
        </div>
      </div>
        </div>
  )
}
