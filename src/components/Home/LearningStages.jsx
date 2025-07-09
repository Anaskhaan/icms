// export function LearningStages() {
//   return (
//     <div className="bg-light py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-extrabold text-center text-dark mb-12">
//           Our Learning Pathway
//         </h2>
        
//         {/* Timeline-style alternating layout */}
//         <div className="space-y-16 relative">
//           {/* Vertical line */}
//           <div className="hidden md:block absolute left-1/2 h-full w-1 bg-primary-light transform -translate-x-1/2"></div>
          
//           {/* Stage 1 - Left aligned */}
//           <div className="relative md:flex md:items-center md:justify-between gap-8">
//             <div className="md:w-5/12 md:pr-8 mb-6 md:mb-0">
//               <div className="bg-primary text-light p-5 rounded-2xl shadow-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-primary-dark rounded-full p-3 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold">Early Learning & Fun</h3>
//                 </div>
//                 <p className="text-light">
//                   Our Playgroup program nurtures young minds with engaging activities,
//                   interactive learning, and a joyful environment to build a strong foundation.
//                 </p>
//               </div>
//             </div>
            
//             <div className="hidden md:block md:w-2/12 text-center">
//               <div className="bg-primary-dark text-light rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
//                 1
//               </div>
//             </div>
            
//             <div className="md:w-5/12"></div>
//           </div>
          
//           {/* Stage 2 - Right aligned */}
//           <div className="relative md:flex md:items-center md:justify-between gap-8">
//             <div className="md:w-5/12"></div>
            
//             <div className="hidden md:block md:w-2/12 text-center">
//               <div className="bg-secondary-dark text-light rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
//                 2
//               </div>
//             </div>
            
//             <div className="md:w-5/12 md:pl-8">
//               <div className="bg-secondary text-light p-5 rounded-2xl shadow-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-secondary-dark rounded-full p-3 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold">Building Strong Foundations</h3>
//                 </div>
//                 <p className="text-light">
//                   From Grade 1 to 8, we focus on core academic subjects, creativity, and
//                   character development to prepare students for future success.
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           {/* Stage 3 - Left aligned */}
//           <div className="relative md:flex md:items-center md:justify-between gap-8">
//             <div className="md:w-5/12 md:pr-8 mb-6 md:mb-0">
//               <div className="bg-success text-light p-5 rounded-2xl shadow-lg">
//                 <div className="flex items-center mb-4">
//                   <div className="bg-success-dark rounded-full p-3 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                     </svg>
//                   </div>
//                   <h3 className="text-xl font-bold">Path to Excellence</h3>
//                 </div>
//                 <p className="text-light">
//                   For Grades 9 to 12, we offer a comprehensive curriculum, experienced faculty,
//                   and career guidance to help students achieve their academic goals.
//                 </p>
//               </div>
//             </div>
            
//             <div className="hidden md:block md:w-2/12 text-center">
//               <div className="bg-success-dark text-light rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl font-bold">
//                 3
//               </div>
//             </div>
            
//             <div className="md:w-5/12"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


export function LearningStages() {
  return (
    <div className="bg-light py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-secondary-light/10 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="w-12 h-0.5 bg-primary-dark mr-3"></span>
            <span className="text-primary-dark font-semibold uppercase tracking-wider text-sm">
              Educational Pathway
            </span>
            <span className="w-12 h-0.5 bg-primary-dark ml-3"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-secondary-light/40 -z-10"></span>
              <span className="relative">The Learning</span>
            </span>
            <br />
            <span className="text-primary-dark">Continuum</span>
          </h2>
        </div>

        {/* Fluid Timeline Design */}
        <div className="relative">
          {/* Connecting wave path */}
          <svg 
            className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,200 Q300,100 600,200 T1200,200" 
              stroke="rgba(var(--color-primary-light), 0.3)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="5 5"
            />
          </svg>

          <div className="space-y-32 lg:space-y-0">
            {/* Stage 1 - Floating Orb */}
            <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-16 group">
              <div className="lg:w-5/12 lg:pr-8 mb-10 lg:mb-0 order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-dark rounded-full flex items-center justify-center text-white mr-4">1</span>
                  Early Learning & Fun
                </h3>
                <p className="text-dark-light text-lg">
                  Our Playgroup program nurtures young minds with engaging activities,
                  interactive learning, and a joyful environment to build a strong foundation.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-dark mr-2">→</span>
                    <span>Sensory-rich play activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-dark mr-2">→</span>
                    <span>Social-emotional development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-dark mr-2">→</span>
                    <span>Language immersion</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-7/12 order-1 lg:order-2 relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-primary-light/20 to-primary-light/5 rounded-3xl overflow-hidden border border-primary-light/30 flex items-center justify-center">
                  <div className="w-40 h-40 bg-primary rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 - Diagonal Flow */}
            <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-16 group">
              <div className="lg:w-7/12 relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-bl from-secondary-light/20 to-secondary-light/5 rounded-3xl overflow-hidden border border-secondary-light/30 flex items-center justify-center">
                  <div className="w-40 h-40 bg-secondary rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lg:w-5/12 lg:pl-8 mt-10 lg:mt-0">
                <h3 className="text-3xl font-bold text-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-secondary-dark rounded-full flex items-center justify-center text-white mr-4">2</span>
                  Building Strong Foundations
                </h3>
                <p className="text-dark-light text-lg">
                  From Grade 1 to 8, we focus on core academic subjects, creativity, and
                  character development to prepare students for future success.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-secondary-dark mr-2">→</span>
                    <span>Project-based learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-dark mr-2">→</span>
                    <span>Critical thinking development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-dark mr-2">→</span>
                    <span>Arts integration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stage 3 - Ascending Flow */}
            <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-16 group">
              <div className="lg:w-5/12 lg:pr-8 mb-10 lg:mb-0 order-2 lg:order-1">
                <h3 className="text-3xl font-bold text-dark mb-4 flex items-center">
                  <span className="w-8 h-8 bg-success-dark rounded-full flex items-center justify-center text-white mr-4">3</span>
                  Path to Excellence
                </h3>
                <p className="text-dark-light text-lg">
                  For Grades 9 to 12, we offer a comprehensive curriculum, experienced faculty,
                  and career guidance to help students achieve their academic goals.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-success-dark mr-2">→</span>
                    <span>Advanced Placement courses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-dark mr-2">→</span>
                    <span>University preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-success-dark mr-2">→</span>
                    <span>Leadership development</span>
                  </li>
                </ul>
              </div>
              <div className="lg:w-7/12 order-1 lg:order-2 relative">
                <div className="w-full h-64 lg:h-80 bg-gradient-to-br from-success-light/20 to-success-light/5 rounded-3xl overflow-hidden border border-success-light/30 flex items-center justify-center">
                  <div className="w-40 h-40 bg-success rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}