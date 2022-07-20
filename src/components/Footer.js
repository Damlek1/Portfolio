import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full bg-[#0a192f] text-gray-300'>
    <div className='max-w-[1000px] px-4 justify-center grid lg:hidden'>
            <ul className='flex flex-wrap justify-center'>
                <li className='w-[140px] h-[60px] flex justify-between items-center bg-blue-500 m-2'>
                  <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/damlek1' target='_blank' rel="noopener noreferrer">LinkdeIn <FaLinkedin size={30} /> </a></li>
                <li className='w-[140px] h-[60px] flex justify-between items-center bg-[#333333] m-2'>
                  <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Damlek1' target='_blank' rel="noopener noreferrer">Github <FaGithub size={30} /></a></li>
                <li className='w-[140px] h-[60px] flex justify-between items-center bg-[#6fc2b0] m-2'>
                  <a className='flex justify-between items-center w-full text-gray-300' href='mailto: ajayioluwasegun111@gmail.com'>Email <HiOutlineMail size={30} /></a></li>
                <li className='w-[140px] h-[60px] flex justify-between items-center bg-[#565f69] m-2'>
                  <a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1AYQ3oLNk6a0404M11MBXFHoJXRmCr1TH/view' target='_blank' rel="noopener noreferrer">Resume <BsFillPersonLinesFill size={30} /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer