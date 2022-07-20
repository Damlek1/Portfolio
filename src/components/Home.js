import React from 'react'
import {HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'
import pic from '../assets/Profile-pix.png'



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] pt-[120px]'>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Oluwasegun Ajayi</h1>
           <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer.</h2>
           <p className='text-[#8892b0] py-4 max-w-md'> I&#39;m a front-end web developer specializing in building exceptional digital experiences.
           I love building beautiful interfaces, web apps, and everything in between!</p>

           <div>
           <Link to="work"  smooth={true}  duration={500}>
           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded-md hover:bg-pink-600 hover:border-pink-600'>View Work
           <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></button>
         </Link>
           </div>
        </div>
        <div>
          <img src={pic} alt='my profile' className='rounded-2xl mx-auto  w-2/3 md:w-full ' />
        </div>
      </div>

    </div>
    )
  }

  export default Home
  // <div name='home' className='w-full h-screen bg-[#0a192f]'>
  //     {/* container */}
  //     <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center  h-full'>
  //         <p className='text-pink-600'>Hi, my name is</p>
  //         <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Oluwasegun Ajayi</h1>
  //         <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer.</h2>
  //         <p className='text-[#8892b0] py-4 max-w-[700px]'> I&#39;m a front-end web developer specializing in building exceptional digital experiences.
  //         I love building beautiful interfaces, web apps, and everything in between!</p>
  //       <div>
  //       <Link to="work"  smooth={true}  duration={500}>
  //         <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
  //         <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3' /></span></button>
  //       </Link>
  //       </div>
  //     </div>
  // </div>