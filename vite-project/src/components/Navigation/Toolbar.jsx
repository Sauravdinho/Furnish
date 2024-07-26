import React from 'react'
import { Link } from 'react-router-dom'

function Toolbar() {
  return (
    <div className=' absolute w-full flex justify-start md:justify-between pt-11 px-7 lg:px-48 z-50'>
     <div className="text-xl font-bold">Furnish</div>
    
      <ul className='hidden md:flex gap-14 text-sm font-semibold text-black opacity-75  '>
        <li className='hover:text-white' ><Link to="/">Home</Link> </li>
        <li className='hover:text-white' ><Link to='/about'>About</Link> </li>
        <li className='hover:text-white' ><Link to="/collections">Collections</Link> </li>
        <li className='hover:text-white' ><Link to="/blog">Blog</Link> </li>
        <li className='hover:text-white' ><Link to="/contact">Contact</Link> </li>
      </ul>
    </div>
  )
}
export default Toolbar
