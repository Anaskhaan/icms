import  { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaIdCard, FaSchool, FaHome, FaInfoCircle, FaUpload } from 'react-icons/fa';

export function Apply() {
  const [activeSection, setActiveSection] = useState('instructions');
  const [formData, setFormData] = useState({
    program: '',
    subProgram: '',
    comments: '',
    quota: '',
    applicantName: '',
    whatsappNo: '',
    mobileNetwork: '',
    cnic: '',
    gender: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    bloodGroup: '',
    domicile: '',
    district: '',
    email: '',
    hostelRequired: 'No',
    fatherName: '',
    fatherCNIC: '',
    landlineNo: '',
    fatherMobile: '',
    fatherMobileNetwork: '',
    fatherOccupation: '',
    jobNature: '',
    annualIncome: '',
    fatherEmail: '',
    postalAddress: '',
    permanentAddress: '',
    guardianName: '',
    guardianCNIC: '',
    guardianMobile: '',
    degree: 'SSC',
    board: '',
    instituteName: '',
    fataSchool: 'No',
    passingYear: '2025',
    examPassed: 'Annual',
    obtainedMarks: '',
    totalMarks: '1200',
    percentage: '',
    rollNo: '',
    registrationNo: '',
    marksReason: '',
    profileImage: null,
    verificationCode: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="bg-light min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-primary-dark font-merriweather mb-6">
          Online Admission Form
        </h1>
        
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          <button
            onClick={() => setActiveSection('instructions')}
            className={`px-4 py-2 rounded-lg ${activeSection === 'instructions' ? 'bg-primary text-light' : 'bg-primary-light text-primary-dark'} font-nunito flex items-center`}
          >
            <FaInfoCircle className="mr-2" /> Instructions
          </button>
          <button
            onClick={() => setActiveSection('program')}
            className={`px-4 py-2 rounded-lg ${activeSection === 'program' ? 'bg-primary text-light' : 'bg-primary-light text-primary-dark'} font-nunito flex items-center`}
          >
            <FaSchool className="mr-2" /> Program Info
          </button>
          <button
            onClick={() => setActiveSection('applicant')}
            className={`px-4 py-2 rounded-lg ${activeSection === 'applicant' ? 'bg-primary text-light' : 'bg-primary-light text-primary-dark'} font-nunito flex items-center`}
          >
            <FaUser className="mr-2" /> Applicant Info
          </button>
          <button
            onClick={() => setActiveSection('father')}
            className={`px-4 py-2 rounded-lg ${activeSection === 'father' ? 'bg-primary text-light' : 'bg-primary-light text-primary-dark'} font-nunito flex items-center`}
          >
            <FaIdCard className="mr-2" /> Father Info
          </button>
          <button
            onClick={() => setActiveSection('academic')}
            className={`px-4 py-2 rounded-lg ${activeSection === 'academic' ? 'bg-primary text-light' : 'bg-primary-light text-primary-dark'} font-nunito flex items-center`}
          >
            <FaSchool className="mr-2" /> Academic Info
          </button>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="bg-white rounded-xl shadow-lg overflow-hidden p-6 sm:p-8"
        >
          {activeSection === 'instructions' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary-dark font-merriweather mb-4">
                Important Instructions
              </h2>
              <ul className="space-y-3 text-dark">
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>Required information must be filled in correctly. The data once saved cannot be edited.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>Fields marked with (*) are mandatory. Incomplete forms will not be considered.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>Email ID is compulsory for communication.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>For multiple disciplines, submit separate applications.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>Upload original paid Bank Challan copy.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>Father's CNIC number serves as User Name/Tracking ID.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>Non-Peshawar Board students must submit original Migration Certificate.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>D grade passes are not eligible for admission.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>Specify quota for reserved seats applications.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>Hostel admission requires non-Peshawar domicile and is subject to availability.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-light rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5">!</span>
                  <span>False information will result in admission cancellation.</span>
                </li>
              </ul>
            </div>
          )}

          {activeSection === 'program' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-dark font-merriweather mb-4">
                Program Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark font-medium mb-2">
                    Program * <span className="text-success-dark">(Inter FA/FSc)</span>
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select Program</option>
                    <option value="FA">FA (Humanities)</option>
                    <option value="FSc">FSc (Pre-Engineering/Pre-Medical)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Sub Program *
                  </label>
                  <select
                    name="subProgram"
                    value={formData.subProgram}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select Sub Program</option>
                    <option value="Pre-Medical">Pre-Medical</option>
                    <option value="Pre-Engineering">Pre-Engineering</option>
                    <option value="Humanities">Humanities</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">
                  Comments (If Any)
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label className="block text-dark font-medium mb-2">
                  Select specified quota (if any)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {['Open Merit', 'Balochistan', 'Disable', 'Edwardes School', 'FATA', 'Girls', 'Hafiz E Quran', 'Minority', 'O-Level', 'Other Province', 'Sports', 'Staff Child'].map(quota => (
                    <label key={quota} className="flex items-center">
                      <input
                        type="radio"
                        name="quota"
                        value={quota}
                        checked={formData.quota === quota}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      {quota}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeSection === 'applicant' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-dark font-merriweather mb-4">
                Applicant Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark font-medium mb-2">
                    Applicant Name * <span className="text-xs">(As in SSC DMC)</span>
                  </label>
                  <input
                    type="text"
                    name="applicantName"
                    value={formData.applicantName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-dark font-medium mb-2">
                      WhatsApp No. *
                    </label>
                    <input
                      type="text"
                      name="whatsappNo"
                      value={formData.whatsappNo}
                      onChange={handleChange}
                      placeholder="0000-0000000"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-dark font-medium mb-2">
                      Mobile Network *
                    </label>
                    <select
                      name="mobileNetwork"
                      value={formData.mobileNetwork}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Jazz">Jazz</option>
                      <option value="Zong">Zong</option>
                      <option value="Telenor">Telenor</option>
                      <option value="Ufone">Ufone</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Applicant CNIC / Form-B
                  </label>
                  <input
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    placeholder="00000-0000000-0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Gender *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Date of Birth *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <input
                      type="number"
                      name="dobDay"
                      value={formData.dobDay}
                      onChange={handleChange}
                      placeholder="Day"
                      min="1"
                      max="31"
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                    <select
                      name="dobMonth"
                      value={formData.dobMonth}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Month</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                      ))}
                    </select>
                    <input
                      type="number"
                      name="dobYear"
                      value={formData.dobYear}
                      onChange={handleChange}
                      placeholder="Year"
                      min="1900"
                      max={new Date().getFullYear()}
                      className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Blood Group
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Domicile *
                  </label>
                  <select
                    name="domicile"
                    value={formData.domicile}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Peshawar">KPK</option>
                    <option value="Peshawar">FATA</option>
                    <option value="Peshawar">Punjab</option>
                    <option value="Peshawar">Sindh</option>
                    <option value="Peshawar">Balochistan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    District *
                  </label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Charsadda">Charsadda</option>
                    <option value="Mardan">Mardan</option>
                    <option value="Swabi">Swabi</option>
                    <option value="Nowshera">Nowshera</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Religion *
                  </label>
                  <input
                    type="text"
                    name="religion"
                    value="Islam"
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Applicant Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-dark font-medium mb-2">
                    Hostel Required *
                  </label>
                  <select
                    name="hostelRequired"
                    value={formData.hostelRequired}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                  <p className="text-xs text-dark-light mt-1">
                    Note: Applicants having domicile other than Peshawar are eligible for hostel admission.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Father/Guardian and Academic sections would follow similar patterns */}

          <div className="mt-8 flex justify-between">
            {activeSection !== 'instructions' && (
              <button
                type="button"
                onClick={() => {
                  const sections = ['instructions', 'program', 'applicant', 'father', 'academic'];
                  const currentIndex = sections.indexOf(activeSection);
                  if (currentIndex > 0) setActiveSection(sections[currentIndex - 1]);
                }}
                className="px-6 py-2 bg-primary-light text-primary-dark rounded-lg font-medium"
              >
                Previous
              </button>
            )}
            
            {activeSection !== 'academic' ? (
              <button
                type="button"
                onClick={() => {
                  const sections = ['instructions', 'program', 'applicant', 'father', 'academic'];
                  const currentIndex = sections.indexOf(activeSection);
                  if (currentIndex < sections.length - 1) setActiveSection(sections[currentIndex + 1]);
                }}
                className="px-6 py-2 bg-primary text-light rounded-lg font-medium ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-success text-light rounded-lg font-medium ml-auto"
              >
                Submit Application
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
