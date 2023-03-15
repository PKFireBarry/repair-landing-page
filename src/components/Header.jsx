import React from 'react'
import { BeakerIcon, CubeIcon, PhoneIcon } from '@heroicons/react/24/solid'



function Header() {
  return (
    <div className='bg-[#004369]  h-[30px] w-screen'>
      
        
        <div className='flex justify-evenly text-white'>
          <div className='flex'>
          <CubeIcon className='w-6 h-6 mx-2'/>
          <a href='/'>Blithe's Computer Repair</a>            
          </div>

          <div className='flex'>
          <PhoneIcon className='w-5 h-5 mx-2'/>
          <p className=''>813-123-4567</p>               
          </div>
       
        </div>

    </div>
  )
}

export default Header