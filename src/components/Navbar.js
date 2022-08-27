import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    const [show, setShow] = useState(false)
    const handeClick = () => setShow(!show)

  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300'>

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

        <div onClick={handeClick} className='md:hidden z-10'>
            {!show ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!show ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar