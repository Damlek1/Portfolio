import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/3602bb28-8320-400c-a325-82df5ad0db3b' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>{'// Submit the form below or send me an email - ajayioluwasegun111@gmail.com'}</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 outline-none'  type="text" placeholder='Name...*' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6] outline-none' type="email" placeholder='Email...*' name='email' required/>
            <textarea className='bg-[#ccd6f6] p-2 outline-none' name='message' rows='10' placeholder='message' style={{resize: 'none'}} required></textarea>
            <button className='text-white border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>Contact me</button>
        </form>
    </div>
  )
}

export default Contact