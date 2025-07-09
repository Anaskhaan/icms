import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaSchool } from 'react-icons/fa';
import { IoMdSchool } from 'react-icons/io';

export function ContactInfoSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-light py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary-dark font-merriweather mb-3">
            Get in Touch With Us
          </h2>
          <div className="border-b-2 border-primary w-24 mx-auto"></div>
          <p className="text-dark-light mt-4 max-w-2xl mx-auto">
            We're here to help answer your questions about admissions, programs, or any other inquiries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone Contact */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary"
          >
            <div className="bg-primary-light text-primary p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaPhone className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3 font-merriweather">Phone Contact</h3>
            <ul className="space-y-2 text-dark">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Admissions: <strong className="text-primary-dark">+92 123 4567890</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Administration: <strong className="text-primary-dark">+92 123 4567891</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Emergency: <strong className="text-success-dark">+92 300 1234567</strong></span>
              </li>
            </ul>
          </motion.div>

          {/* Email Contact */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary"
          >
            <div className="bg-secondary-light text-secondary p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaEnvelope className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3 font-merriweather">Email Addresses</h3>
            <ul className="space-y-2 text-dark">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>General: <a href="mailto:info@icms.com.pk" className="text-secondary-dark underline">info@icms.com.pk</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Admissions: <a href="mailto:admissions@icms.com.pk" className="text-secondary-dark underline">admissions@icms.com.pk</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Principal: <a href="mailto:principal@icms.com.pk" className="text-secondary-dark underline">principal@icms.com.pk</a></span>
              </li>
            </ul>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-success"
          >
            <div className="bg-success-light text-success p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3 font-merriweather">Our Location</h3>
            <address className="not-italic text-dark">
              <p className="flex items-start mb-2">
                <span className="text-success mr-2">•</span>
                <span>Main Campus: <strong className="text-success-dark">123 Education Street, Academic Town, Peshawar</strong></span>
              </p>
              <p className="flex items-start">
                <span className="text-success mr-2">•</span>
                <span>Branch Campus: <strong className="text-success-dark">456 Learning Avenue, Knowledge City</strong></span>
              </p>
            </address>
            <button className="mt-4 px-4 py-2 bg-success-light text-success-dark rounded-lg text-sm font-medium hover:bg-success hover:text-light transition-colors">
              View on Map
            </button>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-dark"
          >
            <div className="bg-primary text-light p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FaClock className="text-xl" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3 font-merriweather">Office Hours</h3>
            <ul className="space-y-2 text-dark">
              <li className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span className="text-primary-dark">8:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span className="text-primary-dark">9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="text-primary-dark">Closed</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="font-medium text-dark-light mb-2 flex items-center">
                <IoMdSchool className="mr-2 text-primary-dark" />
                Admission Hours
              </h4>
              <p className="text-sm text-dark">
                Special hours during admission season: <strong className="text-primary-dark">8:00 AM - 5:00 PM</strong>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-primary-light rounded-xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-3">
                Need Immediate Assistance?
              </h3>
              <p className="text-dark">
                Our admission counselors are available during office hours to help with your queries. 
                For fastest response, please call directly during working hours.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="bg-white p-4 rounded-lg shadow-inner border-l-4 border-primary">
                <h4 className="font-bold text-primary-dark mb-2 flex items-center">
                  <FaSchool className="mr-2" />
                  Important Notice
                </h4>
                <p className="text-sm text-dark">
                  During peak admission periods, response times may be slightly longer. 
                  We appreciate your patience and will respond to all inquiries within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
