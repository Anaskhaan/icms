export function ParentTestimonials() {
  const testimonials = [
    {
      quote: "Mera beta pehle school jaane se ghabrata tha, lekin ICMS School ka friendly atmosphere dekh kar ab wo khud school jaane ke liye tayar hota hai. Bahut acha system hai!",
      name: "Asad Khan",
      role: "Parent of Grade 2 Student",
    },
    {
      quote: "Education ke saath-saath bachon ka akhlaq aur self-confidence bhi build hota hai. Hamain yahan ki teaching approach bohot pasand aayi.",
      name: "Nida Ahmed",
      role: "Parent of KG Student",
    },
    {
      quote: "ICMS School is the best decision we made for our child! The teachers are so caring, and the environment is perfect for learning. Highly recommended!",
      name: "Ayesha Malik",
      role: "Parent of Grade 5 Student",
    },
    {
      quote: "The STEM program here is exceptional. My daughter now dreams of becoming a scientist thanks to her inspiring teachers!",
      name: "Farhan Ali",
      role: "Parent of Grade 7 Student",
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-light to-primary-light/10 py-24 px-6 overflow-hidden">
      {/* Floating abstract elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary-light/10 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-light/20 text-primary-dark px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-4">
            Parent Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-4">
            <span className="bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
              Trusted By Families
            </span>
          </h2>
          <p className="text-dark-light text-lg max-w-3xl mx-auto">
            Hear what parents say about their transformative experiences with ICMS School
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              
              
              {/* Content */}
              <div className="p-8">
                {/* Decorative quote mark */}
                <div className="text-primary-light text-7xl font-serif absolute top-2 left-4 opacity-10 -z-0">
                  "
                </div>
                
                <blockquote className="text-lg md:text-xl text-dark-light mb-8 italic relative z-10">
                  {testimonial.quote}
                </blockquote>
                
                <div className="border-t border-dark-light/10 pt-6">
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-dark-light">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators - Enhanced */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                value: "98%", 
                label: "Parent Satisfaction",
                icon: (
                  <svg className="w-6 h-6 text-primary-dark mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                  </svg>
                )
              },
              { 
                value: "100+", 
                label: "5-Star Reviews",
                icon: (
                  <svg className="w-6 h-6 text-primary-dark mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                )
              },
              { 
                value: "4.9/5", 
                label: "Average Rating",
                icon: (
                  <svg className="w-6 h-6 text-primary-dark mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                )
              },
              { 
                value: "85%", 
                label: "Referral Rate",
                icon: (
                  <svg className="w-6 h-6 text-primary-dark mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                )
              }
            ].map((stat, index) => (
              <div key={index} className="p-4 text-center">
                <div className="flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-light font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}