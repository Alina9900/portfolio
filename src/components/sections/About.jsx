import React from 'react'

const About = () => {
  const FrontendSkills = ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Web Design"];
  const Frameworks = ["React.js", "React Router", "Tailwind CSS", "Redux Toolkit"];
  const Tools = ["Git", "GitHub", "VS Code", "Chrome DevTools", "npm"];
  const Deployment = [ "Vercel", "GitHub Pages"];
  const ApiSkills = ["REST APIs", "Fetch API", "Axios", "JSON", "Basic CRUD"];
  const SoftSkills = ["Problem Solving", "Team Collaboration", "Communication", "Attention to Detail"];

  return (
    <div id="about" className='min-h-screen flex items-center justify-center py-20'>
      <div className='max-w-3xl mx-auto px-4'>

        {/* Heading */}
        <h2 className='font-bold text-3xl mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
          About Me
        </h2>

        {/* Main Card */}
        <div className='glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>

          {/* Description */}
          <p className='text-gray-300 mb-6'>
            Passionate frontend developer with a strong focus on building responsive, 
            visually appealing and user-friendly web applications. I enjoy turning 
            ideas into interactive digital experiences.
          </p>

          {/* Skills Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            {/* Frontend */}
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-lg font-semibold mb-3'>Frontend</h3>
              <div className='flex flex-wrap gap-2'>
                {FrontendSkills.map((item, index) => (
                  <span key={index} className='bg-blue-500/10 text-blue-400 py-2 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-lg font-semibold mb-3'>Frameworks & Libraries</h3>
              <div className='flex flex-wrap gap-2'>
                {Frameworks.map((item, index) => (
                  <span key={index} className='bg-purple-500/10 text-purple-400 py-2 px-3 rounded-full text-sm hover:bg-purple-500/20 transition'>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-lg font-semibold mb-3'>Tools</h3>
              <div className='flex flex-wrap gap-2'>
                {Tools.map((item, index) => (
                  <span key={index} className='bg-yellow-500/10 text-yellow-400 py-2 px-3 rounded-full text-sm hover:bg-yellow-500/20 transition'>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Deployment */}
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-lg font-semibold mb-3'>Deployment</h3>
              <div className='flex flex-wrap gap-2'>
                {Deployment.map((item, index) => (
                  <span key={index} className='bg-green-500/10 text-green-400 py-2 px-3 rounded-full text-sm hover:bg-green-500/20 transition'>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* API Skills */}
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
              <h3 className='text-lg font-semibold mb-3'>API & Backend Basics</h3>
              <div className='flex flex-wrap gap-2'>
                {ApiSkills.map((item, index) => (
                  <span key={index} className='bg-red-500/10 text-red-400 py-2 px-3 rounded-full text-sm hover:bg-red-500/20 transition'>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2'>
              <h3 className='text-lg font-semibold mb-3'>Soft Skills</h3>
              <div className='flex flex-wrap gap-2'>
                {SoftSkills.map((item, index) => (
                  <span key={index} className='bg-pink-500/10 text-pink-400 py-2 px-3 rounded-full text-sm hover:bg-pink-500/20 transition'>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className='rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2'>
              <h3 className='text-lg font-semibold mb-3 text-white'>Education</h3>

              <div className='space-y-3 text-gray-300'>

                <div>
                  <h4 className='font-semibold text-white'>Bachelor of Computer Applications (BCA)</h4>
                  <p className='text-sm text-gray-400'>Ganga Institute Of Technology And Management  • 2022–2025</p>
                </div>

                <div>
                  <h4 className='font-semibold text-white'>12th Grade (CBSE)</h4>
                  <p className='text-sm text-gray-400'>Completed in 2022</p>
                </div>

                <div>
                  <h4 className='font-semibold text-white'>10th Grade (CBSE)</h4>
                  <p className='text-sm text-gray-400'>Completed in 2020</p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About
