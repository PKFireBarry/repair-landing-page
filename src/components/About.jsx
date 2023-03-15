import React from 'react'
import repair from '../Photos/repair.jpg'
import shipping from '../Photos/shipping.jpg'
import consulting from '../Photos/consulting.jpg'

function About() {
  return (
<div id='about' className=' bg-[#004369] py-16'>
  <div className='max-w-3xl mx-auto py-12 px-2 sm:px-6 lg:px-8'>
    <h2 className='text-3xl font-extrabold text-white pb-4'>How It Works</h2>
    <h2 className='
    text-2xl font-extrabold text-white pb-4
    '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
    </h2>
    <div className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <img
          src={consulting}
          className=''
          />
          <h3 className='text-lg leading-6 font-medium text-gray-900'>Schedule an appointment</h3>
          <p className='mt-2 max-w-2xl text-sm text-gray-500'>Get in touch with us to schedule an appointment and let us know what's going on with your computer.</p>
        </div>
      </div>

      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <img
          src={repair}
          />
          <h3 className='text-lg leading-6 font-medium text-gray-900'>We Pickup And Repair</h3>
          <p className='mt-2 max-w-2xl text-sm text-gray-500'>We'll come to you to pick up your computer, take it back to our shop, and repair it as quickly as possible.</p>
        </div>
      </div>

      <div className='bg-white overflow-hidden shadow rounded-lg'>
        <div className='px-4 py-5 sm:p-6'>
          <img
          src={shipping}
          />
          <h3 className='text-lg leading-6 font-medium text-gray-900'>Shipping or Pickup?</h3>
          <p className='mt-2 max-w-2xl text-sm text-gray-500'>Once your computer is repaired, you can choose to have it shipped back to you or schedule a time for us to deliver it back to you.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default About