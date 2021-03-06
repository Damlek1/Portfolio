import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Oluwasegun, a frontend web developer based in Lagos, Nigeria. Nice to meet you.</p>
                    </div>
                    <div>
                       <p >I'm a self-motivated learner with strong organisation, time management & communication skills.
                         I'm able to work independently & collaboratively in a team with a meticulous attention to detail.
                         I am passionate about building excellent software that improves the lives of those around me.
                         My goal is to always build applications that are scalable and efficient under the hood while
                          providing engaging, pixel-perfect user experiences.
                           </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About