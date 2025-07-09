import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChild, FaFileAlt, FaPencilAlt, FaGraduationCap, FaCheckCircle, FaIdCard, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function AdmissionPolicy() {
  const [activeTab, setActiveTab] = useState('school');
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const buttonHoverVariants = {
    rest: { 
      scale: 1,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3
      }
    }
  };

  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 5 }
  };

 

  return (
    <div className="bg-light min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-primary-dark font-merriweather mb-2">
              Admission Policy & Procedure
            </h1>
            <div className="border-b-2 border-primary w-24 mx-auto md:mx-0 mb-4 md:mb-0"></div>
          </div>
          
          <motion.button
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
            whileTap={{ scale: 0.98 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
           
            className="bg-success text-light px-6 py-3 rounded-lg font-medium flex items-center whitespace-nowrap"
            variants={buttonHoverVariants}
          >
            <Link to="/apply" className="mr-2 font-nunito">Apply Online Now</Link>
            <motion.span variants={arrowVariants}>
              <FaArrowRight />
            </motion.span>
          </motion.button>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('school')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${activeTab === 'school' ? 'bg-primary text-light' : 'bg-primary-light text-primary-dark hover:bg-primary hover:text-light'} transition-colors duration-200 font-nunito`}
            >
              <FaChild className="inline mr-2" />
              Montessori to Class IX
            </button>
            <button
              onClick={() => setActiveTab('college')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${activeTab === 'college' ? 'bg-primary text-light' : 'bg-primary-light text-primary-dark hover:bg-primary hover:text-light'} transition-colors duration-200 font-nunito`}
            >
              <FaGraduationCap className="inline mr-2" />
              First Year (Classes XI & XII)
            </button>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        {activeTab === 'school' && (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
           <div className="p-6 sm:p-8">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-secondary-dark mb-4 font-merriweather flex items-center">
                    <FaFileAlt className="mr-3" />
                    Registration
                  </h2>
                  <ul className="space-y-3 text-dark">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>Parents seeking admission should first register their child and make an appointment to appear in the test.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>Registration does not in any way confirm or guarantee admission. Admission is subject to passing the admission test and the interview and the availability of space in the class.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>The class for which a child is tested is determined according to the child's age.</span>
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-secondary-dark mb-4 font-merriweather flex items-center">
                    <FaPencilAlt className="mr-3" />
                    Assessment/Admission Test
                  </h2>
                  <ul className="space-y-3 text-dark">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>Applicants for Montessori and onwards are tested in three subjects - English, Urdu and Mathematics (for class VIII and IX, Science is also included in the test).</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>For the written test, the child should come properly equipped with the required stationary.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>The tests are of general nature, designed to assess the knowledge.</span>
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-secondary-dark mb-4 font-merriweather flex items-center">
                    <FaIdCard className="mr-3" />
                    Admission Steps
                  </h2>
                  <ul className="space-y-3 text-dark">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>Admission is based on merit, availability of seats and sibling reference. Those found suitable are issued admission forms.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>Once the admission is approved by the principal, the necessary fee challan is issued. Admission will be confirmed on deposit of fee as well as the completion of steps 3 and 4.</span>
                    </li>
                  </ul>
                </motion.section>

                <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary-light p-5 rounded-lg">
                    <h3 className="font-bold text-primary-dark mb-3 font-nunito">Fresh Admission Documents</h3>
                    <ul className="space-y-2 text-primary-dark">
                      <li className="flex items-start">
                        <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                        <span>Parent's/guardian's CNIC copy.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                        <span>Birth certificate/B form of applicant.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                        <span>Two 1x1 sized latest photographs of the students.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-secondary-light p-5 rounded-lg">
                    <h3 className="font-bold text-secondary-dark mb-3 font-nunito">Admission through Migration</h3>
                    <ul className="space-y-2 text-secondary-dark">
                      <li className="flex items-start">
                        <span className="bg-secondary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                        <span>Parent's/guardian's CNIC copy.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                        <span>Two 1x1 sized latest photographs of the students.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                        <span>School leaving certificate.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                        <span>Last progress report.</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {activeTab === 'college' && (
          <motion.div
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
             <div className="p-6 sm:p-8">
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-secondary-dark mb-4 font-merriweather">
                    Admissions: First Year (Classes XI & XII)
                  </h2>
                  <ul className="space-y-3 text-dark">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>Admission in College classes XI & XII will be test-based for all students.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>Students with 90% or above marks are eligible to apply for full tuition fee concession whereas students with 80% or above are eligible to apply for 50% tuition fee concession.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>As per Board of Intermediate and Secondary Education-BISE Bannu rules, English, Urdu, Islamic Education (1st year) and Pakistan Studies (2nd year) are compulsory for all Intermediate students.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-success mt-1 mr-3 flex-shrink-0" />
                      <span>Besides these compulsory subjects, students are required to take up three major courses.</span>
                    </li>
                  </ul>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-secondary-dark mb-4 font-merriweather">
                    Subjects Offered for HSSC Part-I
                  </h2>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-primary-light">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-primary-dark uppercase tracking-wider font-nunito">
                            Program
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-primary-dark uppercase tracking-wider font-nunito">
                            Subjects Combination
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-dark">
                            Pre-Medical
                          </td>
                          <td className="px-6 py-4 text-dark">
                            Physics, Chemistry, Biology
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-dark">
                            Pre-Engineering
                          </td>
                          <td className="px-6 py-4 text-dark">
                            Physics, Chemistry, Mathematics
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-dark">
                            FA/Humanities
                          </td>
                          <td className="px-6 py-4 text-dark">
                            <p className="mb-2">Select THREE subjects from the following list:</p>
                            <ul className="grid grid-cols-2 gap-2">
                              <li>Statistics</li>
                              <li>General Mathematics</li>
                              <li>Civics</li>
                              <li>Economics</li>
                              <li>Islamic History</li>
                              <li>Urdu Advanced</li>
                              <li>English Advanced</li>
                              <li>Pashto</li>
                              <li>Islamic Studies</li>
                              <li>Psychology</li>
                              <li>Library Science</li>
                              <li>Health and Physical Education</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.section>

                <motion.section variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-secondary-dark mb-4 font-merriweather">
                    Eligibility Criteria
                  </h2>
                  <ul className="space-y-3 text-dark">
                    <li className="flex items-start">
                      <span className="bg-success text-light rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 font-bold">≥70%</span>
                      <span>Pre-Medical & Pre-Engineering: Minimum 70% marks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-success text-light rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 font-bold">≥50%</span>
                      <span>Humanities: Minimum 50% marks</span>
                    </li>
                  </ul>
                </motion.section>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

