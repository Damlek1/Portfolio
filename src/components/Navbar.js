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
// const [nav, setNav] = useState(false)
// const handleClick = () => setNav(!nav)
// <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
//     <div  className='z-10 cursor-pointer'>
//     <Link to="home"  smooth={true}  duration={500}>
//         <img src={Logo} alt='logo' style={{width: '80px'}} />
//     </Link>
//     </div>
//     {/* Menu */}
//     <div className='hidden md:flex'>
//         <ul className='hidden md:flex'>
//             <li>
//             <Link to="home"  smooth={true}  duration={500}>
//               Home
//              </Link>
//             </li>
//             <li>
//             <Link to="about"  smooth={true} duration={500}>
//               about
//             </Link>
//             </li>
//             <li>
//             <Link to="skills"  smooth={true} duration={500}>
//               skills
//             </Link>
//             </li>
//             <li>
//             <Link to="work" smooth={true} duration={500}>
//               work
//             </Link>
//             </li>
//             <li>
//             <Link to="contact" smooth={true} duration={500}>
//               contact
//             </Link>
//             </li>
//         </ul>
//     </div>
//     {/* Hummerburet */}
//     <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
//         {
//             !nav ? <FaBars size={25} /> : <FaTimes size={25} />
//         }
//     </div>
//     {/* Mobile Menu */}
//     <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
//        <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="home"  smooth={true}  duration={500}>
//               Home
//              </Link>
//        </li>
//        <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="about" smooth={true} duration={500}>
//               about
//             </Link>
//        </li>
//        <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
//               skills
//             </Link>
//        </li>
//        <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="work" smooth={true} duration={500}>
//               work
//             </Link>
//        </li>
//        <li className='py-6 text-4xl'>
//             <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
//               contact
//             </Link>
//        </li>
//     </ul>

//     {/* social Icon */}
//     <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
//         <ul>
//             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
//               <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/damlek1' target='_blank' rel="noopener noreferrer" >LinkdeIn <FaLinkedin size={30} /> </a></li>
//             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
//               <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Damlek1' target='_blank' rel="noopener noreferrer" >Github <FaGithub size={30} /></a></li>
//             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
//               <a className='flex justify-between items-center w-full text-gray-300' href='mailto: ajayioluwasegun111@gmail.com' target='_blank' rel="noopener noreferrer">Email <HiOutlineMail size={30} /></a></li>
//             <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'
//             ><a className='flex justify-between items-center w-full text-gray-300' href='https://drive.google.com/file/d/1AYQ3oLNk6a0404M11MBXFHoJXRmCr1TH/view' target='_blank' rel="noopener noreferrer" >Resume <BsFillPersonLinesFill size={30} /></a></li>
//         </ul>
//     </div>
// </div>