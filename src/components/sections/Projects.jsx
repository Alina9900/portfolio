import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import zaptro from "../../assets/zaptro.png"
import shopper from "../../assets/shopper.png"
import agency from "../../assets/agency.png"

const Projects = () => {
  const skills = ["React", "Tailwind CSS", "React Router", "Context API", "Vite", "npm", "GitHub", "Vercel"];

  const projects = [
    {
      id: 1,
      title: "Zaptro",
      accent: "text-red-500",
      img: zaptro,
      desc:
        "Zaptro is a modern e-commerce shopping web application with a clean and responsive UI. Users can browse products, view details, and manage their cart smoothly with fast performance.",
      tech: skills,
      live: "https://zaptro-ecommerce-pi.vercel.app/",
      github: "https://github.com/zaptro-ecommerce"
    },
    {
      id: 2,
      title: "Shopper",
      accent: "text-green-500",
      img: shopper,
      desc:
        "Shopper is a fully responsive e-commerce app featuring product browsing, cart system, and smooth UI interactions, delivering a clean, real-world shopping experience.",
      tech: skills,
      live: "https://shopper-umber-two.vercel.app/",
      github: "https://github.com/Alina9900/shopper"
    },
    {
      id: 3,
      title: "Agency.ai",
      accent: "text-purple-500",
      img: agency,
      desc:
        "Agency.ai is a modern digital agency landing page featuring services, testimonials, and a clean UI with strong visual design and smooth interactions.",
      tech: skills,
      live: "https://agency-ai-chi-one.vercel.app/",
      github: "https://github.com/Alina9900/agency-ai"
    }
  ];

  return (
    <div id="projects" className='min-h-screen flex justify-center items-center py-20'>
      <div className='max-w-6xl mx-auto px-4'>

        <h2 className='font-bold text-3xl mb-14 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
          Featured Projects
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((p) => (
            <div key={p.id} className='glass rounded-xl p-6 border border-white/10 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 flex flex-col'>
              
              <h3 className='text-2xl font-semibold mb-3'>
                <span className={`${p.accent} font-serif text-3xl`}>{p.title.charAt(0)}</span>
                {p.title.slice(1)}
              </h3>

              <div className='mb-4 overflow-hidden rounded-lg shadow-lg'>
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className='rounded-lg hover:scale-110 transition-transform duration-500 w-full h-44 object-cover'
                />
              </div>

              <p className='text-gray-300 leading-relaxed mb-4 grow'>
                {p.desc}
              </p>

              <div className='flex flex-wrap gap-2 mt-3'>
                {p.tech.map((item, i) => (
                  <span key={i} className='bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-full text-xs'>
                    {item}
                  </span>
                ))}
              </div>

              <div className='mt-5 flex gap-3'>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm shadow-sm transition'
                >
                  <FiExternalLink className='text-lg' />
                  Live Demo
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='inline-flex items-center gap-2 border border-white/10 text-white px-4 py-2 rounded-md text-sm hover:bg-white/5 transition'
                >
                  <FaGithub className='text-lg' />
                  GitHub
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Projects
