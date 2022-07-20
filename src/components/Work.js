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
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0'>
            {
                works.map(({id, src, alt, about, href1, href2})=>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105' />
                    <p className='px-5 py-1'>{about}</p>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-1 py-3 my-4 duration-200 hover:scale-105'><a href={href1} target='_blank' rel="noopener noreferrer">Live Demo</a></button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href={href2} target='_blank' rel="noopener noreferrer">Code</a></button>
                    </div>
                </div>



                ))
            }
            </div>
        </div>
        <div className='mt-5'>
             <a className='group container hover:underline transition duration-300 justify-center items-center font-bold flex' href='https://github.com/Damlek1'
             target='_blank' rel="noopener noreferrer">Check my other projects on github.
                 <span className='group-hover:scale-150 duration-300'><HiArrowNarrowRight size={30} className='ml-1' /></span>
                 </a>
        </div>
    </div>
      )
    }

    export default Work
   