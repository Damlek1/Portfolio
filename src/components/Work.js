import React from 'react'
import weather from '../assets/weather.png'
import cloud from '../assets/cloud.png'
import crypto1 from '../assets/crypto1.png'
import website from '../assets/websiteimg.png'
import restaurant from '../assets/restaurant.png'
import realestate from '../assets/real-estate.png'
import arrow from '../assets/arrow.png'


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-500'>Work</p>
                <p className='py-6'>{'// Check out some of my recent work'}</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div  style={{backgroundImage:`url(${weather})`}} className='shadow-lg shadow-[#040c16]
                group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Weather Application
                        </span>
                        <div>
                            <a href='https://damlek1-weather1.netlify.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
                             bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
                            <a href='https://github.com/Damlek1/react-weather-api' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4
                            py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${cloud})`}} className='shadow-lg shadow-[#040c16] group container rounded-md
                 flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Cloud Management
                        </span>
                        <div>
                            <a href='https://cloud-management-damlek1.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4
                            py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Live Demo</button></a>
                            <a href='https://github.com/Damlek1/cloud-management' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4
                            py-3 m-2 bg-white text-gray-700 font-bold text-lg' >Github</button></a>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${crypto1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md
                flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Crypto Application
                        </span>
                        <div>
                            <a href='https://crypto-app-damlek1.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
                             bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
                            <a href='https://github.com/Damlek1/Crypto-App' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
                             bg-white text-gray-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${website})`}} className='shadow-lg shadow-[#040c16] group container rounded-md
                flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            e-banking website
                        </span>
                        <div>
                            <a href='https://e-bank-damlek1.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
                             bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
                            <a href='https://github.com/Damlek1/Banking-App' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
                             bg-white text-gray-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${realestate})`}} className='shadow-lg shadow-[#040c16] group container
                rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Real Estate Website
                        </span>
                        <div>
                            <a href='https://real-estate-damlek1.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg
                             px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
                            <a href='https://github.com/Damlek1/Real-Estate' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg
                             px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
                <div  style={{backgroundImage:`url(${restaurant})`}} className='shadow-lg shadow-[#040c16] group container
                rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Restaurant Website
                        </span>
                        <div>
                            <a href='https://foodyummy.vercel.app' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg px-4 py-3 m-2
                             bg-white text-gray-700 font-bold text-lg'>Live Demo</button></a>
                            <a href='https://github.com/Damlek1/Restaurant-website' target='_blank' rel="noopener noreferrer"><button className='text-center rounded-lg
                             px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button></a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-1 align-center justify-center group container'>
                <a className='hover:underline transition duration-300 justify-center items-center font-bold flex' href='https://github.com/Damlek1'
                target='_blank' rel="noopener noreferrer">Check my other projects on github.<span className='relative group-hover:left-4 duration-300 max-w-[9%] ml-3'>
                    <img className='' src={arrow} alt='arrow' /></span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work