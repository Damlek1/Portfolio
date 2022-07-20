import React from 'react'
import weather from '../assets/weather.png'
import cloud from '../assets/cloud.png'
import crypto1 from '../assets/crypto1.png'
import website from '../assets/websiteimg.png'
import realestate from '../assets/real-estate.png'
import restaurant from '../assets/restaurant.png'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Work = () => {

    const works = [
        {
            id: 1,
            src: weather,
            alt: 'weather application',
            about: 'weather application',
            href1: 'https://damlek1-weather1.netlify.app',
            href2: 'https://github.com/Damlek1/react-weather-api'
        },
        {
            id: 2,
            src: cloud,
            alt: 'Cloud Management',
            about: 'Cloud Management',
            href1: 'https://cloud-management-damlek1.vercel.app',
            href2: 'https://github.com/Damlek1/cloud-management'
        },
        {
            id: 3,
            src: crypto1,
            alt: 'Crypto Application',
            about: 'Crypto Application',
            href1: 'https://crypto-app-damlek1.vercel.app',
            href2: 'https://github.com/Damlek1/Crypto-App'
        },
        {
            id: 4,
            src: website,
            alt: 'e-banking website',
            about: 'e-banking website',
            href1: 'https://e-bank-damlek1.vercel.app',
            href2: 'https://github.com/Damlek1/Banking-App'
        },
        {
            id: 5,
            src: realestate,
            alt: ' Real Estate Website',
            about: ' Real Estate Website',
            href1: 'https://real-estate-damlek1.vercel.app',
            href2: 'https://github.com/Damlek1/Real-Estate'
        },
        {
            id: 6,
            src: restaurant,
            alt: 'Restaurant website',
            about: 'Restaurant website',
            href1: 'https://foodyummy.vercel.app',
            href2: 'https://github.com/Damlek1/Restaurant-website'
        },
    ]
  return (
    <div name='work' className='w-full md:h-max pt-[80px] text-gray-300  bg-[#0a192f]'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'>Work</p>
            <p className='py-6'>{'// Check out some of my work right here'}</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                works.map(({id, src, alt, about, href1, href2})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105' />
                    <p>{about}</p>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-1 py-3 my-4 duration-200 hover:scale-105'><a href={href1} target='_blank' rel="noopener noreferrer">Live Demo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href2} target='_blank' rel="noopener noreferrer">Code</a></button>
                    </div>
                </div>



                ))
            }
            </div>
        </div>
        <div className='mt-10'>
             <a className='group container hover:underline transition duration-300 justify-center items-center font-bold flex' href='https://github.com/Damlek1'
             target='_blank' rel="noopener noreferrer">Check my other projects on github.
                 <span className='group-hover:left-4  duration-300'><HiArrowNarrowRight size={20} className='ml-3' /></span>
                 </a>
        </div>
    </div>
      )
    }

    export default Work
    // <div name='work' className='w-full md:h-screen text-gray-300 pt-24 pb-14  bg-[#0a192f]'>
    //     <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    //         <div className='pb-8'>
    //             <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'>Work</p>
    //             <p className='py-6'>{'// Check out some of my recent work'}</p>
    //         </div>
    //         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
    //             <div  style={{backgroundImage:`url(${weather})`}} className='shadow-lg shadow-[#040c16]
    //             group container rounded-md flex justify-center items-center mx-auto content-div'>
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider'>
    //                         Weather Application
    //                     </span>
    //                     <div>
    //                         <a href='https://damlek1-weather1.netlify.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
    //                          bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
    //                         <a href='https://github.com/Damlek1/react-weather-api' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4
    //                         py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div  style={{backgroundImage:`url(${cloud})`}} className='shadow-lg shadow-[#040c16] group container rounded-md
    //              flex justify-center items-center mx-auto content-div'>
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider'>
    //                         Cloud Management
    //                     </span>
    //                     <div>
    //                         <a href='https://cloud-management-damlek1.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4
    //                         py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Live Demo</button></a>
    //                         <a href='https://github.com/Damlek1/cloud-management' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4
    //                         py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Github</button></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div  style={{backgroundImage:`url(${crypto1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md
    //             flex justify-center items-center mx-auto content-div'>
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider'>
    //                         Crypto Application
    //                     </span>
    //                     <div>
    //                         <a href='https://crypto-app-damlek1.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
    //                          bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
    //                         <a href='https://github.com/Damlek1/Crypto-App' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
    //                          bg-white text-gray-700 font-bold text-lg'>Github</button></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div  style={{backgroundImage:`url(${website})`}} className='shadow-lg shadow-[#040c16] group container rounded-md
    //             flex justify-center items-center mx-auto content-div'>
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider'>
    //                         e-banking website
    //                     </span>
    //                     <div>
    //                         <a href='https://e-bank-damlek1.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
    //                          bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
    //                         <a href='https://github.com/Damlek1/Banking-App' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
    //                          bg-white text-gray-700 font-bold text-lg'>Github</button></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div  style={{backgroundImage:`url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container
    //             rounded-md flex justify-center items-center mx-auto content-div'>
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider'>
    //                         Real Estate Website
    //                     </span>
    //                     <div>
    //                         <a href='https://real-estate-damlek1.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg
    //                          px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
    //                         <a href='https://github.com/Damlek1/Real-Estate' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg
    //                          px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div  style={{backgroundImage:`url(${restaurant})`}} className='shadow-lg shadow-[#040c16] group container
    //             rounded-md flex justify-center items-center mx-auto content-div'>
    //                 <div className='opacity-0 group-hover:opacity-100'>
    //                     <span className='text-2xl font-bold text-white tracking-wider'>
    //                         Restaurant Website
    //                     </span>
    //                     <div>
    //                         <a href='https://foodyummy.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
    //                          bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
    //                         <a href='https://github.com/Damlek1/Restaurant-website' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg
    //                          px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //             <div className='mt-10'>
    //             <a className='group container hover:underline transition duration-300 justify-center items-center font-bold flex' href='https://github.com/Damlek1'
    //             target='_blank' rel="noopener noreferrer">Check my other projects on github.
    //                 <span className='top-11 group-hover:left-4  duration-300'><HiArrowNarrowRight size={20} className='ml-3' /></span>
    //                 </a>
    //             </div>
    // </div>