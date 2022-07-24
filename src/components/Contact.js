import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-max pt-[80px] bg-[#0a192f] flex justify-center items-center p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>Contact</p>
        <p className='text-gray-300 py-6'>{'// Submit the form below or send me an email -'} <a href='mailto:ajayioluwasegun111@gmail.com'>ajayioluwasegun111@gmail.com</a></p>
        </div>
        <div className='flex justify-center items-center'>
          <form method='POST' action='https://getform.io/f/3602bb28-8320-400c-a325-82df5ad0db3b' className='flex flex-col w-full md:w-3/4'>
          <input className=' bg-transparent border-2 rounded-md text-white p-2 focus:outline-none'  type="text" placeholder='Enter your name...*' name='name' required />
          <input className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="email" placeholder='Enter your email...*' name='email' required/>
          <textarea className='bg-transparent border-2 text-white rounded-md p-2 focus:outline-none' name='message' rows='10' placeholder='Enter your message' style={{resize: 'none'}} required></textarea>
          <button className='text-white border-2 px-6 py-3 my-8 mx-auto flex items-center rounded-md  hover:bg-pink-500 hover:border-pink-500 hover:scale-110 duration-300'>Contact me</button>
          </form>
        </div>
      </div>
    </div>
    )
  }

export default Contact
