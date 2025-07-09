import { motion } from 'framer-motion';
import { FaHandsHelping, FaUserGraduate, FaBrain, FaHeart, FaChartLine } from 'react-icons/fa';

export function CounselingDept() {
  const services = [
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Academic Guidance",
      description: "Personalized learning strategies and study plans"
    },
    {
      icon: <FaUserGraduate className="text-4xl" />,
      title: "Career Counseling",
      description: "Career assessments and pathway planning"
    },
    {
      icon: <FaBrain className="text-4xl" />,
      title: "Mental Wellness",
      description: "Stress management and emotional support"
    },
    {
      icon: <FaHeart className="text-4xl" />,
      title: "Personal Development",
      description: "Building confidence and social skills"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Progress Tracking",
      description: "Regular check-ins and growth monitoring"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-light to-primary-light">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary opacity-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary opacity-10 -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark font-merriweather mb-6">
            Counseling Department
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-dark max-w-3xl mx-auto font-nunito">
            Guiding Students Towards Success
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-secondary"
          >
            <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-6">
              Our Mission
            </h3>
            <p className="text-dark font-nunito mb-6">
              At our Counseling Department, we are committed to providing guidance, support, and encouragement to help students navigate their academic, personal, and career challenges.
            </p>
            <p className="text-dark font-nunito">
              Our dedicated team of professional counselors works closely with students to ensure their well-being, foster personal growth, and empower them to make informed decisions for a brighter future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-light p-8 rounded-3xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-6 text-center">
              How We Help
            </h3>
            <ul className="space-y-4">
              {[
                "Individual counseling sessions",
                "Group workshops and seminars",
                "Crisis intervention support",
                "Parent-teacher consultations",
                "College and career readiness programs"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start text-dark font-nunito"
                >
                  <span className="text-secondary mr-3 mt-1">•</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-primary-dark font-merriweather text-center mb-10">
            Our Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-b-4 border-primary"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h4 className="font-bold text-primary-dark font-merriweather mb-2">
                  {service.title}
                </h4>
                <p className="text-dark-light font-nunito text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-secondary hover:bg-secondary-dark text-dark font-bold rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            Schedule a Counseling Session
          </button>
          <p className="text-dark font-nunito mt-4">
            Contact us at: counseling@icms.com.pk| +92 (333) 942-7676
          </p>
        </motion.div>
      </div>
    </section>
  );
};
