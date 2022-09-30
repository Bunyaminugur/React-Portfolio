import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#66D3FA]'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Bunyamin, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I’m a Full Stack Developer located in Belgium.
                        I have a serious passion for building web pages from scratch.
                    </p>
                    <br/>
                    <p>Teamwork person. Problem solver, good observer and flexible
                    </p>
                    <br/>
                    <p>Interested in ambitious projects with positive people.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About