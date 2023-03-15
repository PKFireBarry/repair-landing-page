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
<div  class="min-h-screen min-w-screen flex flex-col items-center justify-center text-white bg-[#004369] py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="w-full h-px px-4 bg-bg-[#004369]"
      />
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mb-6 text-center text-3xl font-extrabold">
        Contact Us
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis
      </p>
      <div className='flex justify-center m-4'>
      <PhoneIcon className='w-6 h-6 mr-4'/>
      <p className='text-xl'>Call Us! 813-123-4567</p>
      </div>

    </div>


    <form class="mt-8 space-y-6" action="#">
      <input type="hidden" name="remember" value="true"/>
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email" class="sr-only">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"/>
        </div>
        <div>
          <label for="subject" class="sr-only">Subject</label>
          <input id="subject" name="subject" type="text" autocomplete="subject" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Subject"/>
        </div>
        <div>
          <label for="message" class="sr-only">Message</label>
          <textarea id="message" name="message" rows="4" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Message"></textarea>
        </div>
      </div>
      <div class="flex items-center justify-end mt-4">
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-00">
          Send Email
        </button>
      </div>
    </form>
  </div>      
      <div
        className="w-full h-2/5 bg-[#004369]"
      >
      </div>
</div>

  );
}

export default ContactUs;
