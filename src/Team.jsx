import React from 'react'

function Team() {
  return (
  <section class="text-gray-400 body-font bg-gray-900">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-2xl text-indigo-400 tracking-widest font-medium title-font mb-1">ABOUT ME</h2>
      <h1 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-white">Building Robust & Dynamic Web Apps</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">I'M a Full-Stack Web Developer passionate about building robust, scalable, and user-friendly web applications. I specialize in both frontend and backend development, and I enjoy turning complex problems into clean, functional solutions.</p>
    </div>
    <div class="flex flex-wrap">
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">Frontend</h2>
        <p class="leading-relaxed text-base mb-4">    

HTML5, CSS3, JavaScript

React.js, Redux

Responsive & Mobile-First Design.</p>
        <a class="text-indigo-400 inline-flex items-center hover:cursor-pointer">See More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">The Backend</h2>
        <p class="leading-relaxed text-base mb-4">Node.js, Express.js, MongoDB, PostgreSQL

RESTful APIs, GraphQL

Authentication & Authorization.</p>
        <a class="text-indigo-400 inline-flex items-center hover:cursor-pointer">See more
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">Tools</h2>
        <p class="leading-relaxed text-base mb-4">Git & GitHub

Postman.  Canva</p>
        <a class="text-indigo-400 inline-flex items-center hover:cursor-pointer">See More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">Dev Practices</h2>
        <p class="leading-relaxed text-base mb-4">VS Code, Figma (UI/UX basics)

Deployment: Netlify, Heroku.</p>
        <a class="text-indigo-400 inline-flex items-center hover:cursor-pointer">See More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">Get in Touch</button>
  </div>
</section>
  )
}

export default Team
