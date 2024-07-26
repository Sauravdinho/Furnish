import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
    <div className='relative h-screen w-screen bg-[#8DB0C6]'>
      <img className='size-full' src="https://preview.colorlib.com/theme/furnish/images/image_1.jpg" alt="" />
      <div className='absolute font-semibold text-base text-white grid gap-10 w-screen text-center bottom-0'>
      <div className=' text-center'>
      <label className='hover:text-orange-400'><Link to="/">HOME <i class="fa-solid fa-greater-than"></i></Link></label><label className='pl-5'>CONTACTS <i class="fa-solid fa-greater-than"></i></label>
      </div>
      <div className='text-7xl pb-20'>
        <p>Contacts Us</p>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Contact
