import React from 'react'
import logo from '../Photos/macbook-open.jpeg'
import { motion, useInView } from "framer-motion";


function Hero() {

  
  return (
<div className='flex h-screen w-full flex-col md:flex-row justify-center items-center bg-slate-200 m-4'>
  <div className='max-w-2xl mx-8 mb-4'>
    <h1 className='font-bold text-4xl mb-4'>Blithe's Computer Repair</h1>
    <p className='text-lg text-gray-600 mb-8'>We build custom computers for any need, from gaming to business.</p>
    <motion.a
    initial={{ x:-250 , opacity: 0 }}
    transition={{ duration: 1.4 }}
    whileInView={{ opacity: 1, x: 0 }}
    href='#contact'
    className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'>Get a FREE Estimate</motion.a>
  </div>
  <div className='max-w-2xl'>
    <motion.img 
    viewport={{ once: true }}
    initial={{ x:500 , opacity: 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, x: 0 }}

    src={logo} alt='macbook photo' className='rounded-lg shadow-lg border-1 border-black' />

    <motion.p
    viewport={{ once: true }}
    initial={{ y:-250 , opacity: 0 }}
    transition={{ duration: 1.4 }}
    whileInView={{ opacity: 1, y: 0 }}
      className='text-base font-semibold leading-7 p-4 mt-8'>At Blithe's Computer Repair, we specialize in building custom computers that meet your specific needs. Whether you're a gamer looking for a high-performance machine, or a business owner in need of a reliable computer for your employees, we've got you covered. Our experienced team can build a custom computer that's tailored to your unique needs, ensuring that you get the performance and functionality you need to succeed. Contact us today to request a service!</motion.p>
  </div>
</div>

  )
}

export default Hero