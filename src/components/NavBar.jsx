import React from 'react'
import logo from '../Photos/amd-motherboard.jpeg'
import Header from './Header'

function NavBar() {
  return (
    <div className='top-0 fixed'>
        <Header />
    <div className='bg-[#004369] flex justify-evenly text-white'>
        <a  className='pt-2 hover:underline' href='/'>Home</a>
        <a className='pt-2 hover:underline' href='#about'>About Us</a>
        <a className='pt-2 hover:underline' href='#services'>Sevices</a>
        <a className='pt-2 hover:underline' href='#pricing'>Pricing</a>
        <a className='pt-2 hover:underline' href='#reviews'>Reviews</a>
        <a href='#contact' className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Contact Us</a>
    </div>            
    </div>

  )
}

export default NavBar