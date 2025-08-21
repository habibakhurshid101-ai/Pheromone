import React from 'react'

const Subcribe = () => {
  return (
    <div className='p-20'>
      <div className='text-center'>
        <h1>Subscribe</h1>
        <p>Sign up with your email address to receive news and updates.</p>
        <div className='subcribe space-x-0 '>
         <input type="text" placeholder='Email address..' className='border border-r-0 pl-3 pr-10 py-2  text-start' />
         <button className='bg-black border text-white border-r-0 uppercase py-2 px-5'>subcribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subcribe
