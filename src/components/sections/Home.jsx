import React from 'react'

const Home = () => {
  return (
    <section id="home" className='min-h-screen flex items-center justify-center relative '>
      <div className='text-center z-10 px-4 '>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  leading-right'>
         Hey! I'm Alina
        </h1>
        <p className='text-lg text-gray-400 mb-8 max-w-lg mx-auto '>
          I am a frontend developer who enjoys crafting digital experiences that look great and feel even better.
          I love blending creativity with clean code to build interfaces that are fast, engaging, and visually appealing.
        </p>
        <div className='justify-center flex space-x-4 '>
          <a href="#projects" className='bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>View Project</a>
          <a href="#contact" className='flex justify-center items-center border border-blue-500/50 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500/10'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Home