import React from 'react'
import HTML from '../assests/html.png'
import CSS from '../assests/css.png'
import javascript from '../assests/javascript.png'
import react from '../assests/react.png'
import Tailwind from '../assests/tailwind.png'
import Github from '../assests/github.png'


function Skills() {
  return (
    <div name="Skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#66D3FA] '>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div  className='w-full grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
            <div className='shadow-md shadow-[#050c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#050c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
              <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#050c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={javascript} alt="javascript icon" />
              <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#050c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={react} alt="REACT icon" />
              <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#050c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
              <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#050c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Github} alt="GITHUB icon" />
              <p className='my-4'>GITHUB</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Skills