import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import SocialLinks from './SocialLinks'



const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const links = [
      {
        id: 1,
        link: 'home'
      },
      {
        id: 2,
        link: 'about'
      },
      {
        id: 3,
        link: 'skills'
      },
      {
        id: 4,
        link: 'work'
      },
      {
        id: 5,
        link: 'contact'
      },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 px-4  text-gray-300 bg-[#0a192f] fixed'>
      <div className='z-10 cursor-pointer'>
      <Link to="home"  smooth={true}  duration={500}>
        <img src={Logo} alt='logo' style={{width: '80px'}} />
      </Link>
        </div>
      <ul className='hidden md:flex'>
        {
          links.map(({id, link})=> (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200'>
               <Link to={link}  smooth={true}  duration={500}>
              {link}
              </Link>
              </li>

          ))
        }
      </ul>
      <div onClick={handleClick} className='z-10 pr-4 cursor-pointer md:hidden'>
        {
            !nav ? <FaBars size={25} /> : <FaTimes size={25} />
        }
    </div>
    {
      nav && (
    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#0a192f]'>
    {
          links.map(({id, link})=> (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
               <Link onClick={()=> setNav(!nav)} to={link}  smooth={true}  duration={500}>
              {link}
              </Link>
            </li>

          ))
        }
    </ul>

      )
    }
    <SocialLinks />
    </div>
  )
}

export default Navbar
