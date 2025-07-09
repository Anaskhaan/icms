import { useState } from 'react';
import {
  FaPhone, FaEnvelope, FaClock,
  FaFacebookF, FaTwitter, FaYoutube, FaInstagram,
  FaChevronDown, FaUserGraduate, FaBars, FaSearch, FaTimes
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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

  const socialIcons = [
    { icon: FaFacebookF, color: 'hover:bg-[#3b5998]' },
    { icon: FaTwitter, color: 'hover:bg-[#1da1f2]' },
    { icon: FaYoutube, color: 'hover:bg-[#ff0000]' },
    { icon: FaInstagram, color: 'hover:bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743]' }
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Info Bar - Vibrant Gradient */}
      <div className="bg-gradient-to-r from-primary-dark to-primary text-dark text-sm py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-medium">
            <div className="flex items-center gap-2 hover:text-secondary-light transition-colors">
              <FaPhone className="text-secondary-light" />
              <span>+92 3339427676</span>
            </div>
            <div className="flex items-center gap-2 hover:text-secondary-light transition-colors">
              <FaEnvelope className="text-secondary-light" />
              <span>info@icms.edu.pk</span>
            </div>
            <div className="flex items-center gap-2 hover:text-secondary-light transition-colors">
              <FaClock className="text-secondary-light" />
              <span>Mon - Fri: 8:30 AM - 2:00 PM</span>
            </div>
          </div>

          {/* Social Icons - Glowing Effect */}
          <div className="hidden md:flex gap-3 mt-2 md:mt-0">
            {socialIcons.map(({ icon: Icon, color }, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`p-2 rounded-full bg-light/10 text-dark hover:text-dark transition-all duration-300 flex items-center justify-center w-8 h-8 ${color}`}
              >
                <Icon className="text-sm" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation - Elevated Design */}
      <nav className="bg-white border-b border-light/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo with Glow Effect */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <img src={logo} alt="ICMS Logo" className="h-14 w-auto" />
              <div className="hidden md:block border-l-2 border-secondary pl-3">
                <h1 className="text-2xl font-bold text-primary-dark">ICMS</h1>
                <p className="text-xs font-medium text-dark tracking-wider">Islamia College Model School</p>
              </div>
            </motion.div>

            {/* Desktop Navigation - Animated Underline */}
            <div className="hidden lg:flex items-center space-x-1">
              {mainNavItems.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  className="px-4 py-3 font-semibold text-dark hover:text-primary-dark transition relative group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary-dark group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </Link>
              ))}

              {/* Enhanced Dropdown */}
              <div className="relative">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-3 font-semibold text-dark hover:text-primary-dark flex items-center gap-1 relative group"
                  onMouseEnter={() => setShowDropdown(true)}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>More</span>
                  <FaChevronDown className={`text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary-dark group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </motion.button>
                
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-0 mt-1 w-72 bg-white shadow-xl rounded-lg border border-light/20 z-50 overflow-hidden"
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      {dropdownItems.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/more/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="flex items-center px-4 py-3 text-sm text-dark hover:bg-primary hover:text-dark transition-colors border-b border-light/20 last:border-b-0 group/item"
                          onClick={() => setShowDropdown(false)}
                        >
                          <FaUserGraduate className="mr-3 text-secondary group-hover/item:text-dark transition-colors" />
                          <span>{item}</span>
                          <span className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            
            </div>

            {/* Mobile Toggle + Apply Button - Glowing Effect */}
            <div className="flex items-center space-x-4">
              <Link
                to="/apply"
                className="hidden md:flex items-center bg-gradient-to-r from-primary to-primary-dark text-dark px-6 py-2.5 rounded-md hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-semibold shadow-md"
              >
                Apply Now
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-dark hover:text-primary-dark transition"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar - Smooth Animation */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="hidden lg:block overflow-hidden"
              >
                <div className="py-3">
                  <div className="relative max-w-xl mx-auto">
                    <input
                      type="text"
                      placeholder="Search ICMS..."
                      className="w-full pl-4 pr-10 py-2 rounded-full border border-light/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-dark hover:text-primary">
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu - Full Screen Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="lg:hidden fixed inset-0 bg-white z-50 mt-20 overflow-y-auto"
              >
                <div className="container mx-auto px-4 py-6">
                  {/* Search in Mobile */}
                  <div className="relative mb-6">
                    <input
                      type="text"
                      placeholder="Search ICMS..."
                      className="w-full pl-4 pr-10 py-3 rounded-lg border border-light/30 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-dark">
                      <FaSearch />
                    </button>
                  </div>

                  {/* Main Navigation */}
                  <div className="space-y-2 mb-6">
                    {mainNavItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-3 font-semibold text-dark hover:bg-primary/10 rounded-lg transition"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* Dropdown in Mobile */}
                  <div className="mb-6">
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 font-semibold text-dark hover:bg-primary/10 rounded-lg transition"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      <span>More Options</span>
                      <FaChevronDown className={`text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {showDropdown && (
                      <div className="pl-6 mt-2 space-y-1">
                        {dropdownItems.map((item, idx) => (
                          <Link
                            key={idx}
                            to={`/more/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2.5 text-sm text-dark hover:bg-primary/10 rounded-lg transition flex items-center"
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

                  {/* Apply Button in Mobile */}
                  <Link
                    to="/apply"
                    className="block w-full text-center bg-gradient-to-r from-primary to-primary-dark text-dark px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-semibold shadow-md mb-6"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Apply Now
                  </Link>

                  {/* Contact Info in Mobile */}
                  <div className="bg-light/20 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <FaPhone className="text-primary" />
                      </div>
                      <span className="font-medium">+92 3339427676</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <span className="font-medium">info@icms.edu.pk</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <FaClock className="text-primary" />
                      </div>
                      <span className="font-medium">Mon - Fri: 8:30 AM - 2:00 PM</span>
                    </div>
                  </div>

                  {/* Social Icons in Mobile */}
                  <div className="flex justify-center gap-4 mt-6">
                    {socialIcons.map(({ icon: Icon, color }, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className={`p-3 rounded-full bg-light/10 text-primary hover:text-dark transition-all ${color}`}
                      >
                        <Icon className="text-lg" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};