import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll'

function Navbar() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300'>

            <ul className='hidden md:flex'>
                <li>
                <Link to="home"  smooth={true}  duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link to="about"  smooth={true}  duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link to="Skills"  smooth={true}  duration={500}>
                Skills
                </Link>
                </li>
                <li>
                <Link to="project"  smooth={true}  duration={500}>
                Projects
                </Link>
                </li>
                <li>
                <Link to="contact"  smooth={true}  duration={500}>
                Contact
                </Link>
                </li>
            </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
            {!show ? <FaBars /> : <FaTimes />}
        </div>

        <ul className={!show ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
            Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about"  smooth={true}  duration={500}>
            About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="Skills"  smooth={true}  duration={500}>
            Skills
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="project"  smooth={true}  duration={500}>
            Projects
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact"  smooth={true}  duration={500}>
            Contact
            </Link>
            </li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
                    <a className='flex justify-between items-center w-full text-gray-200' target="_blank"  href='https://www.linkedin.com/in/bunyamin-yasar-ugur-077262206/'>
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700'>
                    <a className='flex justify-between items-center w-full text-gray-200' target="_blank" href='https://github.com/Bunyaminugur'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-200' subject="subject text" href='mailto:bunyamin26@outlook.com'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text-gray-200' href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar