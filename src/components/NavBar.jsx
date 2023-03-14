import React from 'react'
import logo from '../Photos/amd-motherboard.jpeg'

function NavBar() {
  return (
    <div className='bg-[#004369] flex justify-evenly text-white'>
        <img
        src={logo}
        alt=''
        className='h-[50px]'
        />
        <a  className='pt-2 hover:underline' href='/'>Home</a>
        <a className='pt-2 hover:underline' href='#about'>About Us</a>
        <a className='pt-2 hover:underline' href='#services'>Sevices</a>
        <a className='pt-2 hover:underline' href='#pricing'>Pricing</a>
        <a className='pt-2 hover:underline' href='#reviews'>Reviews</a>
        <button className='bg-[#87ACA3] p-1 h-[35px] rounded-lg hover:bg-[#0C1446]'>Contact Us</button>
    </div>
  )
}

export default NavBar