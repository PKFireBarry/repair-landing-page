import React from 'react'

import Header from './Header'

function NavBar() {
  return (
    <div className='top-0 fixed  z-50 opacity-95 hover:opacity-100 duration-700'>
        <Header />
    <div className='bg-[#004369] flex justify-evenly text-white'>
        <a className='font-bold pt-2 hover:underline' href='/'>Home</a>
        <a className='font-bold pt-2 hover:underline' href='#about'>About Us</a>
        <a className='font-bold pt-2 hover:underline' href='#services'>Sevices</a>
        <a className='font-bold pt-2 hover:underline' href='#pricing'>Pricing</a>
        <a className='font-bold pt-2 hover:underline' href='#reviews'>Reviews</a>
        <a href='#contact' className='bg-green-500 hover:bg-green-600 text-white m-1 font-bold py-2 px-4 rounded'>Contact Us</a>
    </div>            
    </div>

  )
}

export default NavBar