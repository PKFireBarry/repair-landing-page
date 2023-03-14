import React, { useState } from 'react';

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
    <div className='h-screen'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <div className="text-red-500">{errors.email}</div>}
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={handleInputChange}
        />
        {errors.subject && <div className="text-red-500">{errors.subject}</div>}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
        />
        {errors.message && <div className="text-red-500">{errors.message}</div>}
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default ContactUs;
