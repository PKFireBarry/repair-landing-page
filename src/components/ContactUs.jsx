import React, { useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import motion from 'framer-motion';
import bottom from '../Photos/bottom.jpg';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'subject') {
      setSubject(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!email.trim()) {
      errors.email = 'Email is required';
    }
    if (!subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Send email here
      console.log('Email sent');
      // Reset form fields
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
    }
  };

  return (
<div id='contact'  class="flex flex-col items-center justify-center text-white bg-[#004369] py-12 px-4 sm:px-6 lg:px-8">
  <div class="w-full space-y-8">

    <div>
      <h2 class="mb-6 text-center text-3xl  font-extrabold">
        Contact Us
      </h2>
      <p className="text-base font-semibold leading-7 p-4">
      Give us a call or fill out the form below to get a fast price estimate on a fix for your device.  If you are not local, we also offer a very streamlined Mail-In Service which makes it very easy to work with us from anywhere in the country.
      </p>    
      <button className='py-2 px-2 mt-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-00'>Mail-in Repair Service
      </button>
    </div>
    <div className='flex flex-col items-center justify-center bg-[#004369] md:flex-row'>
      <div className='w-full flex pb-6 flex-col pt-6 items-center justify-center text-white bg-[#004369]'>
        <h1 className='text-3xl capitalize font-bold'>Call Or Visit Us</h1>
      <div className='flex justify-center m-4'>
      <PhoneIcon className='w-6 h-6 mr-4'/>
      <p className='text-xl'>813-123-4567</p>
      </div>
      <div className=''>
      <p className='font-bold underline'>Hours</p>
      <p>Monday-Friday – 11 AM to 7 PM</p>
      <p>Saturday 12 PM to 4 PM</p>
      <p>Sunday Closed</p>
      <br/>
      <p className='font-bold underline'>Address</p>
      <p>1234 Main Street</p>
      <p>Tampa, FL 33601</p>        
      </div>
      </div>
      <div className='w-2/3 '>
      <form class="w-full max-w-lg mx-auto" action="#">
  <div class="shadow-md overflow-hidden rounded-2xl">

    <div class="bg-white px-6 py-4">
    <div class="py-4 px-6  rounded">
      <h2 class="text-lg font-medium text-gray-700">Let us know how we can help you.</h2>

    </div>
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
        <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="John Doe"/>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
        <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="you@example.com"/>
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input id="phone" name="phone" type="tel" autocomplete="tel" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="555-555-5555"/>
      </div>
      <div class="mb-4">
        <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
        <textarea id="message" name="message" rows="4" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="How can we help you?"></textarea>
      </div>
    </div>
    <div class="bg-gray-100 py-4 px-6 flex justify-end">
      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        Send Message
      </button>
    </div>
  </div>
</form>
      
      </div>
    </div>

    
  </div>      
</div>

  );
}

export default ContactUs;
