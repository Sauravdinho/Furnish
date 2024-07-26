import React from 'react'
import { Link } from 'react-router-dom'
const Collection = () => {
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
      <div className='relative h-screen w-screen bg-[#8DB0C6]'>
        <div className='h-screen w-screen'>
      <img className='size-full' src="https://preview.colorlib.com/theme/furnish/images/image_2.jpg" alt="" />
      </div>
      
      <div className='absolute font-semibold text-base text-white grid  h-screen w-screen bottom-0 bg-black bg-opacity-65'>
      <div className=' '>
      <label className='hover:text-orange-400'><Link to="/">HOME <i class="fa-solid fa-greater-than"></i></Link></label><label className=''>COLLECTIONS <i class="fa-solid fa-greater-than"></i></label>
      </div>
      <div className='text-7xl'>
        <p>Our Collections</p>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Collection
