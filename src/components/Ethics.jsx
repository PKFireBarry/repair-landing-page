import React from 'react'
import { StarIcon, UsersIcon, ChatBubbleBottomCenterIcon, CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Ethics() {
  return (
    <div className='bg-slate-200 p-10'>
        <h1 className='text-3xl font-extrabold pb-4'>Built On Ethics & Integrity</h1>
        <div className='flex flex-row m-4 justify-center'>
        <div className='w-1/3 p-4'>
            {/*img*/}
            <StarIcon className='w-12 h-12'/>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>100% Free Estimates</h2>
            <p>Taking apart your Macbook to determine what is wrong with it costs $0 here. We believe diagnostic fees are predatory in this business. For a spoken word estimate of your problem, there is no fee!</p>
        </div>
        <div className='w-1/3 p-4'>
                        {/*img*/}
            <UsersIcon className='w-12 h-12'/>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>Not In It For The Money</h2>
            <p>We don’t lie about your problem to milk you for more money. We never misrepresent what we are doing, such as replacing an external hard drive cable and charging you for data recovery.</p>
        </div>
        <div className='w-1/3 p-4'>
                        {/*img*/}
            <ChatBubbleBottomCenterIcon className='w-12 h-12'/>
            <h2 className='text-base font-semibold leading-7 text-gray-900'>Real Reviews</h2>
            <p>We never review ourself, or bribe customers with discounts to leave in-store reviews. Our feedback has all been earned and reviews have been left at the customer’s discretion, NOT ours!</p>
        </div>
        </div>

        <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Get To Know Us Better</button>
    </div>
  )
}
