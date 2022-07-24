import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {
  const links = [
    {
        id: 1,
        child: (
            <>
            LinkdeIn<FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/damlek1',
        style1: 'bg-blue-500'
    },
    {
        id: 1,
        child: (
            <>
            Github<FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/Damlek1',
        style2: 'bg-[#333333]'
    },
    {
        id: 1,
        child: (
            <>
            Email<HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto: ajayioluwasegun111@gmail.com',
        style3: 'bg-[#6fc2b0]'
    },
    {
        id: 1,
        child: (
            <>
            Resume<BsFillPersonLinesFill size={30} />
            </>
        ),
        href: '/Oluwasegun_Ajayi_Resume.pdf',
        // href: 'https://drive.google.com/file/d/1AYQ3oLNk6a0404M11MBXFHoJXRmCr1TH/view',
        style4: 'bg-[#565f69]',
        download: true,
    },
]
  return (
    <div className='w-full bg-[#0a192f] text-gray-300'>
    <div className='max-w-[1000px] px-4 justify-center grid lg:hidden'>
            <ul className='flex flex-wrap justify-center'>
            {
                links.map(({id, child, href, style1, style2, style3,style4, download })=> (
                    // eslint-disable-next-line no-useless-concat
                    <li key={id} className={'w-[140px] h-[60px] flex justify-between items-center m-2' + " " + style1 + " " + style2 + " " + style3 + " " + style4}>
                      <a className='flex justify-between items-center w-full text-gray-300' href={href} download={download} target='_blank' rel="noopener noreferrer">{child}</a></li>

                    ))
                }
                
            </ul>
        </div>
    </div>
  )
}

export default Footer