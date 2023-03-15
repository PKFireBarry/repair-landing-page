import React from 'react'

function Footer() {
  return (
<div class="bg-gray-200 py-4 px-4">
  <div class="flex flex-row p-2 justify-evenly bg-white overflow-hidden shadow border-2 border-black rounded-lg">
    <a href="#about" class="text-gray-800 hover:text-gray-600 transition-colors duration-300">
      About
    </a>
    <a href="#services" class="text-gray-800 hover:text-gray-600 transition-colors duration-300">
      Services
    </a>
    <a href="#contract" class="text-gray-800 hover:text-gray-600 transition-colors duration-300">
      Contact
    </a>
    <a href="#reviews" class="text-gray-800 hover:text-gray-600 transition-colors duration-300">
      Reviews
    </a>
    <a href="#pricing" class="text-gray-800 hover:text-gray-600 transition-colors duration-300">
      Pricing
    </a>
  </div>

  <div class="mb-8"></div>

  <div class="flex flex-row justify-between mb-1">
    <div class="text-gray-800 overflow-hidden rounded-lg">
      <p class="font-bold mb-2">Contact</p>
      <p>Phone: 555-555-5555</p>
      <p>Email:</p>
      <p>Address:</p>
    </div>
    <div class="text-gray-800 overflow-hidden rounded-lg">
      <p class="font-bold mb-2">Hours</p>
      <p>Monday-Friday: 9am-5pm</p>
      <p>Saturday: 10am-2pm</p>
      <p>Sunday: Closed</p>
    </div>
  </div>

  <div class="flex flex-row justify-evenly mb-2 m-4">
    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
      <img src="https://img.icons8.com/ios/50/000000/facebook-new.png" alt="Facebook" />
    </a>
    <a href='https://www.instagram.com/'>
      <img src="https://img.icons8.com/ios/50/000000/instagram-new.png" alt="Instagram" />
    </a>
    <a>
      <img src="https://img.icons8.com/ios/50/000000/twitter.png" alt="Twitter" />
    </a>
    <a>
      <img src="https://img.icons8.com/ios/50/000000/youtube-play.png" alt="YouTube" />
    </a>
    <a>
      <img src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="LinkedIn" />
    </a>
    <a>
      <img src="https://img.icons8.com/ios/50/000000/pinterest.png" alt="Pinterest" />
    </a>
  </div>

  <div class="flex justify-center border-2 p-2 bg-white border-black rounded-xl">
    <p class="text-gray-800">&copy; 2023 Blithe's Computer Repair</p>
  </div>
</div>
  )
}

export default Footer