import React from 'react'
import {CalendarDaysIcon, CreditCardIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import custom from '../Photos/custom-builds.jpeg'

function Pricing() {
  return (
    <div id='pricing' className='h-screen w-full bg-slate-200'>
      <div className='flex flex-row justify-evenly'>
        <div className='w-[80%] py-[250px]'>
          <h1 className='text-3xl font-extrabold  pt-8 pb-8'>Why Choose Us</h1>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
          </p>
          <div className='flex flex-col py-8'>
        <div className='flex flex-col m-4 justify-center bg-slate-100 overflow-hidden shadow rounded-lg'>
            <CheckBadgeIcon className='w-12 h-12'/>
          <h3 className='text-2xl mb-4 leading-6 font-medium text-gray-900 mt-3'>Guarantees</h3>  
            <p className='pb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at sem consequat porttitor ac vel nulla. Donec efficitur dui vel imperdiet placerat.
            </p>              
            </div>
            
            <div className='flex flex-col m-4 justify-evenly bg-slate-100 overflow-hidden shadow rounded-lg'>
            <CalendarDaysIcon className='w-12 h-12'/>
          <h3 className='text-2xl mb-4 leading-6 font-medium text-gray-900 mt-3'>Same Day Service</h3>
          <p className='pb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at sem consequat porttitor ac vel nulla. Donec efficitur dui vel imperdiet placerat.
          </p>                
            </div>
            <div className='flex flex-col m-4 justify-evenly bg-slate-100 overflow-hidden shadow rounded-lg'>
            <CreditCardIcon className='w-12 h-12'/>
          <h3 className='text-2xl mb-4 leading-6 font-medium text-gray-900 mt-3'>No payment Required</h3>     
          <p className='pb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac tortor at sem consequat porttitor ac vel nulla. Donec efficitur dui vel imperdiet placerat.
          </p>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Pricing