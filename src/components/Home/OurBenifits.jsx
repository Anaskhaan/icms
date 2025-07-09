export function OurBenefits() {
  const benefits = [
    {
      title: "Social & Fun",
      description: "We create an interactive and joyful atmosphere where children learn through play, teamwork, and hands-on activities.",
      graphic: (
        <div className="relative w-full h-full">
          {/* Floating bubbles */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary-light/30 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-secondary-light/30 rounded-full animate-float-medium"></div>
          {/* Smiling faces */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-inner">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-dark rounded-full animate-blink" style={{ animationDelay: '0s' }}></span>
                    <span className="w-2 h-2 bg-dark rounded-full animate-blink" style={{ animationDelay: '0.2s' }}></span>
                  </div>
                  <div className="absolute bottom-3 w-8 h-3 bg-dark/10 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -left-4 -top-4 w-10 h-10 bg-pink-100 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-8 h-8 bg-blue-100 rounded-full"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Caring Staff",
      description: "Our trained and compassionate educators ensure that each student feels supported and encouraged in their learning journey.",
      graphic: (
        <div className="relative w-full h-full">
          {/* Heart pulse animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <svg className="w-16 h-16 text-red-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              {/* Floating hands */}
              <svg className="absolute -left-6 -top-2 w-10 h-10 text-primary-dark animate-float-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Safe Environment",
      description: "A secure, well-monitored, and child-friendly campus that prioritizes the safety and well-being of every student.",
      graphic: (
        <div className="relative w-full h-full">
          {/* Shield with checkmark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              {/* Floating security elements */}
              <div className="absolute -right-4 -top-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Qualified Teachers",
      description: "Our experienced and highly qualified teachers are dedicated to fostering academic excellence and personal growth.",
      graphic: (
        <div className="relative w-full h-full">
          {/* Graduation cap with stars */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
              {/* Floating stars */}
              {[...Array(3)].map((_, i) => (
                <svg 
                  key={i}
                  className={`absolute w-4 h-4 text-yellow-400 animate-twinkle`}
                  style={{
                    top: `${Math.random() * 60 + 20}%`,
                    left: `${Math.random() * 60 + 20}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative bg-light py-10 px-6 md:px-12 overflow-hidden">
      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary-light/10 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
            
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            <span className="bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
              Exceptional Learning Experience
            </span>
          </h2>
          <p className="text-dark-light text-lg max-w-3xl mx-auto">
            At <strong className="text-primary-dark">ICMS School</strong>, we combine innovative teaching methods with a nurturing environment to create the perfect foundation for your child's future success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Glass morphic effect */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Animated graphic container */}
                <div className="w-32 h-32 mx-auto mb-6 relative">
                  {benefit.graphic}
                </div>
                
                <h3 className="text-xl font-bold text-dark text-center mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark-light text-center mb-6 flex-grow">
                  {benefit.description}
                </p>
                
                {/* Animated underline */}
                <div className="w-16 h-0.5 bg-primary-dark mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Reflection effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
