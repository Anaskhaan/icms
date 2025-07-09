export function Footer() {
  return (
    <footer className="bg-light border-t border-dark-light/10 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              background: `rgba(var(--color-primary-light), ${Math.random() * 0.2 + 0.1})`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Logo/Intro column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center text-white font-bold mr-3">
                IC
              </div>
              <span className="text-xl font-bold text-dark">ICMS School</span>
            </div>
            <p className="text-dark-light mb-6">
              Empowering future leaders through innovative education since 2005.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-dark-light/10 hover:bg-primary-light/10 transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5 text-dark-light" fill="currentColor" viewBox="0 0 24 24">
                    {/* Social icons would go here */}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-dark mb-6 relative inline-block">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-light/40 -z-0"></span>
            </h3>
            <ul className="space-y-3">
              {['Admissions', 'Academics', 'Calendar', 'News'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-dark-light hover:text-primary-dark transition-colors flex items-start"
                  >
                    <span className="w-1 h-1 bg-primary-dark rounded-full mt-2 mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-dark mb-6 relative inline-block">
              <span className="relative z-10">Programs</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-secondary-light/40 -z-0"></span>
            </h3>
            <ul className="space-y-3">
              {['Early Years', 'Elementary', 'Middle School', 'High School'].map((program) => (
                <li key={program}>
                  <a 
                    href="#" 
                    className="text-dark-light hover:text-secondary-dark transition-colors flex items-start"
                  >
                    <span className="w-1 h-1 bg-secondary-dark rounded-full mt-2 mr-2"></span>
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-dark mb-6 relative inline-block">
              <span className="relative z-10">Contact</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-success-light/40 -z-0"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-success-dark mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-dark-light">D- Block township Bannu, KPK</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-success-dark mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-dark-light">+92 (333) 942-7676</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-success-dark mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-dark-light">info@icms-school.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-xl p-8 mb-16 shadow-sm border border-dark-light/10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-dark mb-4">Stay Updated</h3>
            <p className="text-dark-light mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news, events, and educational insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-dark-light/20 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-primary-dark text-white rounded-lg font-medium hover:bg-primary transition-colors shadow-md hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-light/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-light text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ICMS School. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-dark-light hover:text-primary-dark text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}