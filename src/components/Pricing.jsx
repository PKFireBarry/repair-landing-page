import React from 'react'

import { motion } from 'framer-motion'

function Pricing() {
  return (
    <div id='pricing' className='w-full bg-green-500'>
      <div className='flex flex-row justify-center'>
        <div className='w-3/5 py-[250px]'>
          <div className="max-w-2xl mx-auto ">
          <h1 className='text-3xl font-extrabold py-16 pb-8'>We Can Fix Your Problem</h1>
    <p className='pb-8'>
      There’s an informative, no-nonsense approach that’s unique here. Rossmann’s was built to provide the best experience by focusing on your expectations before our comfort & convenience. We encourage you to shop around; the Rossmann difference is most easily noticed by those who have been somewhere else first!
    </p>
    <div class="flex justify-cente flex-col flex-grow sm:flex-col md:flex-row lg:flex-row xl:flex-row py-4">

      <motion.div
        initial={{ y:500 , opacity: 0 }}
        transition={{ duration: .9 }}
        whileInView={{ opacity: 1, y: 0 }}
      class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <div class="bg-slate-200 p-4 rounded-lg shadow-lg hover:bg-slate-300">
          <h2 class="text-xl font-bold mb-2">Screen Repair</h2>
          <p class="text-gray-700 text-base mb-2">Starting at $70</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Book Now</button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y:500 , opacity: 0 }}
        transition={{ duration: .9 }}
        whileInView={{ opacity: 1, y: 0 }}
      class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <div class="bg-slate-200 p-4 rounded-lg shadow-lg hover:bg-slate-300">
          <h2 class="text-xl font-bold mb-2">Battery Service</h2>
          <p class="text-gray-700 text-base mb-2">Starting at $30</p>
          <ul class="text-gray-700 text-base mb-4">
          </ul>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Book Now</button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y:500 , opacity: 0 }}
        transition={{ duration: .9 }}
        whileInView={{ opacity: 1, y: 0 }}
      class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <div class="bg-slate-200 p-4 rounded-lg shadow-lg hover:bg-slate-300">
          <h2 class="text-xl font-bold mb-2">Water Damage</h2>
          <p class="text-gray-700 text-base mb-2">Starting at $99</p>
          <ul class="text-gray-700 text-base mb-4">
          </ul>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Book Now</button>
        </div>
      </motion.div>

    </div>

    <div class="flex justify-cente flex-col flex-grow sm:flex-col md:flex-row lg:flex-row xl:flex-row">

    <motion.div
        initial={{ y:500 , opacity: 0 }}
        transition={{ duration: .9 }}
        whileInView={{ opacity: 1, y: 0 }}
      class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <div class="bg-slate-200 p-4 rounded-lg shadow-lg hover:bg-slate-300">
          <h2 class="text-xl font-bold mb-2">Consulting</h2>
          <p class="text-gray-700 text-base mb-2">Starting at $25</p>
          <ul class="text-gray-700 text-base mb-4">
          </ul>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Book Now</button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y:500 , opacity: 0 }}
        transition={{ duration: .9 }}
        whileInView={{ opacity: 1, y: 0 }}
      class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <div class="bg-slate-200 p-4 rounded-lg shadow-lg hover:bg-slate-300">
          <h2 class="text-xl font-bold mb-2">Mac Repair</h2>
          <p class="text-gray-700 text-base mb-2">Starting at $80</p>
          <ul class="text-gray-700 text-base mb-4">
          </ul>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Book Now</button>
        </div>
      </motion.div>

      <motion.div
        initial={{ y:500 , opacity: 0 }}
        transition={{ duration: .9 }}
        whileInView={{ opacity: 1, y: 0 }}
      class="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
        <div class="bg-slate-200 p-4 rounded-lg shadow-lg hover:bg-slate-300">
          <h2 class="text-xl font-bold mb-2">Data Recovery</h2>
          <p class="text-gray-700 text-base mb-2">Starting at $150</p>
          <ul class="text-gray-700 text-base mb-4">
          </ul>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Book Now</button>
        </div>
      </motion.div>

    </div>


</div>

        </div>
      </div>
    </div>
  )
}

export default Pricing