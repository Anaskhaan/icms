
import { useState } from 'react';
import {
  FaPhone, FaEnvelope, FaClock,
  FaFacebookF, FaTwitter, FaYoutube, FaInstagram,
  FaChevronDown, FaUserGraduate, FaBars, FaSearch
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const dropdownItems = [
    'Academic', 'Extracurricular', 'Development Plans', 'Careers',
    'Home Learning', 'Achievements', 'Counseling Dept', 'Alumni', 'Admission Policy'
  ];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Curriculum', path: '/curriculum' },
    { name: 'Admission', path: '/admission' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Info Bar - Modern Gradient Background */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-dark text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium hidden md:flex">
            <div className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FaPhone className="text-secondary" />
              <span>+92 3339427676</span>
            </div>
            <div className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FaEnvelope className="text-secondary" />
              <span>info@icms.edu.pk</span>
            </div>
            <div className="flex items-center gap-2 hover:text-secondary transition-colors">
              <FaClock className="text-secondary" />
              <span>Mon - Fri: 8:30 AM - 2:00 PM</span>
            </div>
          </div>

          {/* Social Icons - Modern Hover Effect */}
          <div className="hidden md:flex gap-3 mt-2 md:mt-0">
            {[
              { icon: FaFacebookF, color: 'hover:bg-[#3b5998]' },
              { icon: FaTwitter, color: 'hover:bg-[#1da1f2]' },
              { icon: FaYoutube, color: 'hover:bg-[#ff0000]' },
              { icon: FaInstagram, color: 'hover:bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]' }
            ].map(({ icon: Icon, color }, idx) => (
              <a
                key={idx}
                href="#"
                className={`p-2 rounded-full bg-light text-primary hover:text-light transition-all duration-300 flex items-center justify-center w-8 h-8 ${color}`}
              >
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation - Modern Design */}
      <nav className="bg-white border-b border-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Text - Enhanced Styling */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="ICMS Logo" className="h-16 w-auto" />
              <div className="hidden md:block border-l-2 border-secondary pl-3">
                <h1 className="text-2xl font-bold text-primary">ICMS</h1>
                <p className="text-xs font-medium text-dark-light tracking-wider">Islamia College Model School</p>
              </div>
            </div>

            {/* Desktop Navigation - Modern Hover Effects */}
            <div className="hidden lg:flex items-center space-x-1">
              {mainNavItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="px-4 py-2 font-semibold text-dark hover:text-primary transition relative group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ))}

              {/* Dropdown - Modern Card Style */}
              <div className="relative">
                <button 
                  className="px-4 py-2 font-semibold text-dark hover:text-primary flex items-center gap-1 relative group"
                  onMouseEnter={() => setShowDropdown(true)}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>More</span>
                  <FaChevronDown className={`text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </button>
                {showDropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-72 bg-white shadow-xl rounded-lg border border-light z-50 overflow-hidden"
                    onMouseLeave={() => setShowDropdown(false)}
                  >
                    {dropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`/more/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center px-4 py-3 text-sm text-dark hover:bg-primary hover:text-light transition-colors border-b border-light last:border-b-0 group/item"
                        onClick={() => setShowDropdown(false)}
                      >
                        <FaUserGraduate className="mr-3 text-secondary group-hover/item:text-light transition-colors" />
                        <span>{item}</span>
                        <span className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

                
            </div>

            {/* Mobile Toggle + Apply Button - Enhanced Styling */}
            <div className="flex items-center space-x-4">
              <Link
                to="/admission/apply"
                className="hidden md:flex items-center bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-md hover:from-primary-dark hover:to-primary transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              >
                Apply Now
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-dark hover:text-primary transition"
              >
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Search Bar - Slides Down Effect */}
          {searchOpen && (
            <div className="hidden lg:block bg-light py-3 mb-4 rounded-lg shadow-inner animate-slideDown">
              <div className="container mx-auto px-4">
                <div className="relative max-w-xl mx-auto">
                  <input
                    type="text"
                    placeholder="Search ICMS..."
                    className="w-full pl-4 pr-10 py-2 rounded-full border border-light focus:border-primary focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-dark">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu - Modern Card Design */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border border-light shadow-xl rounded-lg mb-4 overflow-hidden animate-fadeIn">
              <div className="p-4 bg-primary text-white flex justify-between items-center">
                <span className="font-bold">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-secondary"
                >
                  ✕
                </button>
              </div>

              {mainNavItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="block px-6 py-3 font-semibold text-dark hover:bg-primary-light hover:text-white transition border-b border-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Dropdown - Accordion Style */}
              <div className="border-b border-light">
                <button
                  className="w-full flex justify-between items-center px-6 py-3 font-semibold text-dark hover:bg-primary-light hover:text-white transition"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>More</span>
                  <FaChevronDown className={`text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showDropdown && (
                  <div className="pl-8 bg-light">
                    {dropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={`/more/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-2.5 text-sm text-dark hover:bg-primary hover:text-white transition flex items-center"
                        onClick={() => {
                          setShowDropdown(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <FaUserGraduate className="mr-3 text-secondary" />
                        {item}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </nav>
    </header>
  );
};