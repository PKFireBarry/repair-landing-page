import React from 'react'
import logo from '../Photos/macbook-open.jpeg'
import { motion } from 'framer-motion'

function Hero() {
  return (
<div className='flex h-screen flex-row justify-center items-center bg-slate-200'>
  <div className='max-w-2xl mx-8'>
    <h1 className='font-bold text-4xl mb-4'>Blithe's Computer Repair</h1>
    <p className='text-lg text-gray-600 mb-8'>We build custom computers for any need, from gaming to business.</p>
    <motion.button
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1 , x: 0 }}
      transition={{ duration: 2 }}
    className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Get a FREE Estimate</motion.button>
  </div>
  <div className='max-w-2xl'>
    <motion.img 
      initial={{ opacity: 0, x: '+100vw' }}
      animate={{ opacity: 1 , x: 0 }}
      transition={{ duration: 2 }}
    src={logo} alt='macbook photo' className='rounded-lg shadow-lg border-1 border-black' />

    <motion.p
      initial={{ opacity: 0,}}
      animate={{ opacity: 1  }}
      transition={{ duration: 2.5 }}
    className='text-base mt-8'>At Blithe's Computer Repair, we specialize in building custom computers that meet your specific needs. Whether you're a gamer looking for a high-performance machine, or a business owner in need of a reliable computer for your employees, we've got you covered. Our experienced team can build a custom computer that's tailored to your unique needs, ensuring that you get the performance and functionality you need to succeed. Contact us today to request a service!</motion.p>
  </div>
</div>

  )
}

export default Hero