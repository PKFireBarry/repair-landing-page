import React from 'react'
import recovery from '../Photos/data-recovery.jpeg'

function review() {
  return (
<div id='reviews' className='h-screen bg-slate-200'>
  <div>
    <h1 className='text-3xl font-bold ml-8'>Our Past Customers</h1>
  </div>

  <div className=' mt-10 flex flex-row'>
    <div className='w-1/3'>
      <img
      src={recovery}
      alt=''
      className='w-full h-full object-cover'
      />
    </div>
    <div className="mt-24 w-2/3">
      <div className="bg-white rounded-xl shadow-md mt-8 p-8">
        <div className='flex flex-row items-center'>
          <div className='w-16 h-16 rounded-full bg-gray-400 mr-4'></div>
          <div>
            <h2 className='text-lg font-bold'>John Doe</h2>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis</p>
          </div>
        </div>
      </div>
    </div>  
  </div>
</div>


  )
}

export default review