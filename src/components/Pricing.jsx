import React from 'react'
import {CalendarDaysIcon, CreditCardIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import custom from '../Photos/custom-builds.jpeg'

function Pricing() {
  return (
    <div id='pricing' className='w-full bg-green-500'>
      <div className='flex flex-row justify-evenly'>
        <div className='w-1/3 py-[250px]'>
          <h1 className='text-3xl font-extrabold  pt-8 pb-8'>Top Reasons To Have Your Repairs Done By Us</h1>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
          </p>
          <div className='flex flex-col py-8'>
        <div className='flex flex-col m-4 justify-center bg-slate-100 overflow-hidden shadow rounded-lg'>
            <CheckBadgeIcon className='w-12 h-12'/>
          <h3 className='text-2xl mb-4 leading-6 font-medium text-gray-900 mt-3'>Guarantees</h3>  
            <p className='pb-4'>
            You can come to our store for a free estimate without an appointment, or mail your device to us from anywhere in the world to receive service.
            </p>              
            </div>
            
            <div className='flex flex-col m-4 justify-evenly bg-slate-100 overflow-hidden shadow rounded-lg'>
            <CalendarDaysIcon className='w-12 h-12'/>
          <h3 className='text-2xl mb-4 leading-6 font-medium text-gray-900 mt-3'>Same Day Service</h3>
          <p className='pb-4'> We stock our parts, so that means that you save time!
          </p>                
            </div>
            <div className='flex flex-col m-4 justify-evenly bg-slate-100 overflow-hidden shadow rounded-lg'>
            <CreditCardIcon className='w-12 h-12'/>
          <h3 className='text-2xl mb-4 leading-6 font-medium text-gray-900 mt-3'>Our pricing is fair</h3>     
          <p className='pb-4'>
          Give us a call or fill out the form below to get a fast price estimate on a fix for your device.  If you are not local, we also offer a very streamlined Mail-In Service which makes it very easy to work with us from anywhere in the country.
          </p>
            </div>
          </div>          
        </div>
        <div className='w-2/3 py-[250px]'>
          <div className="max-w-2xl mx-auto ">
          <h1 className='text-3xl font-extrabold py-16 pb-8'>We Can Fix Your Problem</h1>
  <div className="border border-gray-300 rounded-lg overflow-hidden inline-block ">
    <table className="w-full bg-slate-200">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 text-left">Water Damage Repair</th>

        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">Keyboard – $175-$350 (depending on model)</td>

        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">Trackpad – $125-$250 (depending on model)</td>

        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">Logic board repair – $250-$425 (depending on model)</td>
 
        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">Logic board + keyboard + trackpad –$300-$600 (depending on model)</td>

        </tr>
      </tbody>
    </table>
<table className="w-full bg-slate-200">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 text-left">Screen Replacement</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">A2337 (2020) – $500</td>

        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">A1465 (2012 – 2015) – $250</td>

        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">A1990 (2018 – 2019) – $550-$650</td>

        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">A1989 (2018 – 2019) – $550-$650</td>

        </tr>
      </tbody>
    </table>
    <table className="w-full bg-slate-200">
      <thead className="bg-gray-200">
        <tr>
          <th className="py-2 px-4 text-left">Hard Drive Data Recovery</th>

        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">SDcards/microSD cards
$200</td>

        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">Hard Drives
$100</td>

        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">CellPhones
$300-$650</td>

        </tr>
        <tr className="border-t border-gray-300">
          <td className="py-2 px-4">SSDs
$300-$1500</td>

        </tr>
      </tbody>
    </table>
  </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default Pricing