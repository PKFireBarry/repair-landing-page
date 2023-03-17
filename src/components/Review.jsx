import React from 'react'
import {UserCircleIcon } from '@heroicons/react/24/outline'


const features = [
  {
    name: 'BRET BULLARD',
    description:
      'Even though they said no to repairing my 2011 15inch macbook pro with AMD graphics I was completely impressed with the customer support given.',
    icon: UserCircleIcon,
  },
  {
    name: 'MICHAEL ARUSTAMYAN',
    description:
      ' Very friendly, thorough, easy to get in touch with, and respond quickly in addition to fantastic work. I ended up spilling some water on my Macbook Pro that',
    icon: UserCircleIcon,
  },
  {
    name: 'MATTHEW SPINDLER',
    description:
      'First off if you need out of warranty repair on a macbook they know their stuff better than anyone else.',
    icon: UserCircleIcon,
  },
  {
    name: 'TALTECH CHIP',
    description:
      'Good repair shop, honest people and good prices. Specially recommanded for macbook repair. Thank you',
    icon: UserCircleIcon,
  },
]

function review() {
  return (
<div id='reviews' className=' bg-slate-200 text-black p-20' >
    <h1 className='text-3xl font-extrabold pt-8 pb-2 '>Love From Our Customers?</h1>
    <p className="text-base leading-7 p-4">The number of reviews as well as the number of ratings we have is head & shoulders above every company in our industry. Look for Macbook Repair on Google maps – there is no business that does what we do with the same combination of high ratings & high quantity of high ratings on Google business listings. We live & breathe making customers happy and believe it shows in our online reputation.</p>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-slate-100 p-4 hover:bg-green-100 rounded-3xl">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex  h-10 w-10 items-center justify-center rounded-full bg-green-500">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7  text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    <div className='my-4 pt-8 text-black '>
      <p className="text-base font-semibold leading-7 p-4">
      Funny thing about good service, there’s no “oh, please leave us a review!!” or “hey, we’ll give you TEN PERCENT OFF if you write a review RIGHT NOW!!!” nonsense. We don’t need it. We get plenty of reviews from happy customers. We just want to make sure you know that we’re not just saying we’re good, we’re actually good.
      </p>
    </div>

</div>
  )
}

export default review