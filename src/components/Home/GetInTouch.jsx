export function GetInTouch() {
  return (
    <section className="relative bg-light overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-light/10 rounded-full filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-secondary-light/10 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Contact Form Section */}
          <div className="bg-white p-8 md:p-12 flex items-center">
            <div className="w-full max-w-md mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-2">
                <span className="bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </h2>
              <p className="text-dark-light mb-8">
                Have questions? We're here to help. Reach out to us today.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-light mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-dark-light/20 focus:ring-2 focus:ring-primary-light focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-light mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-dark-light/20 focus:ring-2 focus:ring-primary-light focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-light mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-dark-light/20 focus:ring-2 focus:ring-primary-light focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-light mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-dark-light/20 focus:ring-2 focus:ring-primary-light focus:border-transparent"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-dark to-secondary-dark text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map and Contact Info Section */}
          <div className="relative">
            {/* Google Maps iframe - Replace with your actual embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.2404935921413!2d70.69680947534474!3d33.019255471567725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d8095cf1d3a9e9%3A0x9d25f698e00ed0d4!2sICMS%20System%20Girls%20Campus%20D.Block%20Bannu%20Township!5e1!3m2!1sen!2s!4v1752024322772!5m2!1sen!2s"
              width="100%"
              height="100%"
              className="absolute inset-0 border-0"
              allowFullScreen=""
              loading="lazy"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>

            {/* Contact Info Overlay - Glass Morphic Effect */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-lg border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-primary-light/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Our Location</h3>
                    <p className="text-dark-light">D-Block Township, Bannu Township, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-light/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Call Us</h3>
                    <p className="text-dark-light">+92 (333) 942-7676</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-light/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Email Us</h3>
                    <p className="text-dark-light">info@icms-school.edu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-light/10 p-3 rounded-lg mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">Opening Hours</h3>
                    <p className="text-dark-light">Mon-Fri: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}