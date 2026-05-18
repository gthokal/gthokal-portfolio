import React from 'react'
import { ArrowRight, Computer } from 'lucide-react';
import RevealOnScroll from '../RevealOnScroll';

const Projects = () => {

  return (
    <section 
    id='projects'
    className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-tranparent text-center'>
            Featured Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch'>
            <div className='group relative rounded-xl p-px overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full'>

              {/* Animated Border */}
              <div className='absolute inset-0 rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>

              {/* Card Content */}
              <div className='relative rounded-xl bg-[#0a0a0a] p-6 border border-white/10 h-full flex flex-col'>
                <h3 className='text-xl font-bold mb-4'> Website Development</h3>
                
                <p className='text-gray-400 mb-4'>
                  Worked on Fitterfly HealthTech web applications, developing responsive and scalable React.js interfaces with API integration and performance optimization. Collaborated with UI/UX and backend teams to deliver seamless and user-friendly healthcare digital experiences.
                </p>

                <div className='flex flex-wrap gap-2'>
                  {["React", "Html", "Bootstrap"].map((tech, key)=>(
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                    >
                      {tech}
                    </span>
                    )
                  )}
                </div>

                <div className='flex justify-between items-center mt-4'>
                  <a href='https://www.fitterfly.com/' className='text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-1'>View Project <ArrowRight size={18} className='transition-transform duration-300 group-hover:translate-x-2'/></a>
                </div>
                
              </div>
            </div>

            <div className='group relative rounded-xl p-px overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full'>

              {/* Animated Border */}
              <div className='absolute inset-0 rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>

              {/* Card Content */}
              <div className='relative rounded-xl bg-[#0a0a0a] p-6 border border-white/10 h-full flex flex-col'>
                <h3 className='text-xl font-bold mb-4'> ToDo Task Dashboard</h3>
                
                <p className='text-gray-400 mb-4'>
                  Developed ToDo Task Dashboard, a responsive task management application for creating, organizing, and tracking daily tasks efficiently. Implemented dynamic task handling, intuitive UI components, and a seamless user experience using modern frontend technologies.
                </p>

                <div className='flex flex-wrap gap-2'>
                  {["React", "Redux toolkit", "TailwindCss", "Netlify"].map((tech, key)=>(
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                    >
                      {tech}
                    </span>
                    )
                  )}
                </div>

                <div className='flex justify-between items-center mt-4'>
                  <a href='https://todotaskdash.netlify.app/' 
                  target='_blank' 
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-1'>View Project 
                  <ArrowRight 
                  size={18} 
                  className='transition-transform duration-300 group-hover:translate-x-2'/>
                  </a>

                  <a
                    href='https://github.com/gthokal/todo-taskdashboard'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white transition-all hover:scale-110'
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ verticalAlign: "text-bottom" }}
                    >
                      <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>

            <div className='group relative rounded-xl p-px overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full'>

              {/* Animated Border */}
              <div className='absolute inset-0 rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>

              {/* Card Content */}
              <div className='relative rounded-xl bg-[#0a0a0a] p-6 border border-white/10 h-full flex flex-col'>
                <h3 className='text-xl font-bold mb-4'> E-commerce Web App</h3>
                
                <p className='text-gray-400 mb-4'>
                  Shopify E-commerce Web App: Designed and developed a fully responsive Shopify store with theme customization, product management, and performance optimization. Focused on delivering a seamless shopping experience with user-friendly design and mobile responsiveness.
                </p>

                <div className='flex flex-wrap gap-2'>
                  {["Shopify", "Shopify Themes", "Hostinger", "Paytm Payment Gateway"].map((tech, key)=>(
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                    >
                      {tech}
                    </span>
                    )
                  )}
                </div>

                <div className='flex justify-between items-center mt-4'>
                  <a href='https://aambalworld.myshopify.com/' 
                  target='_blank' 
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-1'>View Project 
                  <ArrowRight 
                  size={18} 
                  className='transition-transform duration-300 group-hover:translate-x-2'/>
                  </a>

                  <a
                    href='https://admin.shopify.com/store/my-store-fvxorlgt'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white transition-all hover:scale-110'
                  >
                    <img alt="Shopify" src="https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/shopify-glyph-white-d937213d06f1.svg"></img>
                  </a>
                </div>

              </div>
            </div>
            
            <div className='group relative rounded-xl p-px overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full'>

              {/* Animated Border */}
              <div className='absolute inset-0 rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>

              {/* Card Content */}
              <div className='relative rounded-xl bg-[#0a0a0a] p-6 border border-white/10 h-full flex flex-col'>
                <h3 className='text-xl font-bold mb-4'> Alarm Clock Demo</h3>
                
                <p className='text-gray-400 mb-4'>
                  React.js Alarm Clock Web App: Developed a responsive alarm clock application using React.js with real-time clock updates, alarm scheduling, and interactive controls. Focused on delivering a clean UI, smooth user experience, and efficient state management.
                </p>

                <div className='flex flex-wrap gap-2'>
                  {["React", "Redux Toolkit", "TailwindCss"].map((tech, key)=>(
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
                    >
                      {tech}
                    </span>
                    )
                  )}
                </div>

                <div className='flex justify-between items-center mt-4'>
                  <a href='https://github.com/gthokal/Alarm-Clock' 
                  target='_blank' 
                  className='text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-1'>View Project 
                  <ArrowRight 
                  size={18} 
                  className='transition-transform duration-300 group-hover:translate-x-2'/>
                  </a>

                  <a
                    href='https://github.com/gthokal/todo-taskdashboard'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-white transition-all hover:scale-110'
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ verticalAlign: "text-bottom" }}
                    >
                      <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
                    </svg>
                  </a> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      
    </section>
  )
}

export default Projects