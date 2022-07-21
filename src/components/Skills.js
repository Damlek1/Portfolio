import React from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Next from '../assets/nextjs.png'
import Node from '../assets/nodejs.png'

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: ReactImg,
            title: 'REACTJS',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: Next,
            title: 'NextJS',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: Github,
            title: 'GITHUB',
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: Tailwind,
            title: 'TAILWIND CSS',
            style: 'shadow-sky-400'
        },
        {
            id: 8,
            src: Node,
            title: 'NodeJS',
            style: 'shadow-lime-400'
        },

    ]
  return (
    <div name='skills' className='w-full h-max bg-[#0a192f] pt-[80px] text-gray-300'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Skills & Tools</p>
            <p className='py-6'>{"// These are skills, tools and technologies I work with"}</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-12 sm:px-0'>
                {
                    skills.map(({id, src, title, style})=> (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto' />
                    <p className='mt-4'>{title}</p>
                </div>

                    ))
                }
            </div>
            <p className='px-10 w-full md:px-0 mt-[-5px]'>Others are: Material UI, Npm, Git, Responsive website, VS Code, PWA </p>
        </div>
    </div>
      )
    }

    export default Skills
