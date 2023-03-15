import React from 'react'
import {ComputerDesktopIcon, GlobeAmericasIcon, UserGroupIcon, ShieldExclamationIcon, ArchiveBoxXMarkIcon  } from '@heroicons/react/24/solid'
import bottom from '../Photos/bottom.jpg'
import networking from '../Photos/networking.jpg'
import data from '../Photos/data.jpg'
import phone from '../Photos/phone.jpg'
import {motion} from 'framer-motion'


function Services() {
  return (
<div className='min-h-screen bg-gray-200' >
<div id='services' className=''>
<h2 className='text-3xl font-extrabold pt-12 pb-6 text-gray-900'>Our Services</h2>
    <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis velit a sem sagittis accumsan. Sed non molestie neque, quis aliquam justo.</p>
</div>
<div class="mt-6 grid grid-cols-1  p-20 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
<motion.div
  initial={{ opacity: 0, x: '-100vw' }}
  animate={{ opacity: 1, x: 0, transition: { duration: 2 }}}
className='bg-white overflow-hidden shadow rounded-lg'>
        <img
        src={phone}
        alt=''
        className='object-cover  resize'
        />
        <div className='px-4 py-5 sm:p-6'>
            <div className='flex flex-col justify-evenly'>
            <ShieldExclamationIcon className='w-12 h-12'/>
          <h3 className='text-2xl leading-6 font-medium text-gray-900'>Hardware Repair</h3>                
            </div>

          <p className='mt-2 max-w-2xl text-sm text-gray-500'>We offer support from experienced technicians who can answer your questions about MacBook boards. </p>
        </div>
      </motion.div>
  <motion.div
    initial={{ opacity: 0, x: '-100vw' }}
  animate={{ opacity: 1, x: 0, transition: { duration: 2.2 }}}
  className='bg-white overflow-hidden shadow rounded-lg'>
        <img
        src={bottom}
        alt=''
        className='object-cover  resize'
        />
        <div className='px-4 py-5 sm:p-6'>
            <div className='flex flex-col justify-evenly'>
            <UserGroupIcon className='w-12 h-12'/>
          <h3 className='text-2xl leading-6 font-medium text-gray-900'>Consulting</h3>                
            </div>

          <p className='mt-2 max-w-2xl text-sm text-gray-500'>Give us a call or fill out the form below to get a fast price estimate on a fix for your device.  If you are not local, we also offer a very streamlined Mail-In Service which makes it very easy to work with us from anywhere in the country.</p>
        </div>
      </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: '-100vw' }}
  animate={{ opacity: 1, x: 0, transition: { duration: 2.4 }}}
  className='bg-white overflow-hidden shadow rounded-lg'>
        <img
        src={networking}
        alt=''
        className='object-cover resize'
        />
        <div className='px-4 py-5 sm:p-6'>
            <div className='flex flex-col justify-evenly'>
            <GlobeAmericasIcon className='w-12 h-12'/>
          <h3 className='text-2xl leading-6 font-medium text-gray-900 '>Networking</h3>                
            </div>
          <p className='mt-2 max-w-2xl text-sm text-gray-500'>Fill out the form on our mail in page, and follow the instructions on our mail in page to send your device in for repair.</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: '-100vw' }}
  animate={{ opacity: 1, x: 0, transition: { duration: 2 }}}
      className='bg-white overflow-hidden shadow rounded-lg'>
        <img
        src={data}
        alt=''
        className='object-cover resize'
        />
        <div className='px-4 py-5 sm:p-6'>
            <div className='flex flex-col justify-evenly'>
            <ArchiveBoxXMarkIcon className='w-12 h-12'/>
          <h3 className='text-2xl leading-6 font-medium text-gray-900 '>Data Recovery</h3>                
            </div>

          <p className='mt-2 max-w-2xl text-sm text-gray-500'>something about data recoveryLost data? Don't sweat it. We can easily recover data from hard drives, SD cards, cellphones, and more.</p>
        </div>
      </motion.div>
  </div>
    <div className='m-4'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis velit a sem sagittis accumsan. Sed non molestie neque, quis aliquam justo. Sed non molestie neque, quis aliquam justo.
      </p>
    </div>
</div>
  )
}

export default Services

