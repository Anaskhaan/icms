import { FaShieldAlt, FaGraduationCap, FaBookOpen, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const OurMission = () => {
  const stats = [
    { value: "100%", label: "Graduation Rate", icon: <FaGraduationCap className="text-success-dark" />, bg: "bg-success-light", text: "text-success-dark" },
    { value: "50+", label: "Programs Offered", icon: <FaBookOpen className="text-secondary-dark" />, bg: "bg-secondary-light", text: "text-secondary-dark" },
    { value: "1k+", label: "Students Enrolled", icon: <FaUsers className="text-primary-dark" />, bg: "bg-primary-light", text: "text-primary-dark" },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Background decorative elements */}
        <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl"></div>
        
        {/* Main card */}
        <div className="relative bg-light rounded-2xl shadow-xl overflow-hidden border border-light/20 backdrop-blur-sm">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-primary-dark to-primary p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-light rounded-full filter blur-xl"></div>
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-light rounded-full filter blur-xl"></div>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-dark mb-4 relative"
            >
              Our Mission
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-24 h-1.5 bg-secondary mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Icon with animated border */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative flex-shrink-0"
              >
                <div className="absolute inset-0 bg-primary-light rounded-full animate-pulse opacity-20"></div>
                <div className="relative bg-primary-light p-8 rounded-full border-4 border-primary/20">
                  <FaShieldAlt className="text-primary text-5xl" />
                </div>
              </motion.div>

              {/* Text content */}
              <div className="flex-1">
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-dark text-xl md:text-2xl leading-relaxed font-medium"
                >
                  To empower students through innovative education, foster critical thinking, 
                  and cultivate lifelong learners who contribute positively to society. 
                  We strive to create an inclusive environment where every student can achieve 
                  their full potential.
                </motion.p>
                
                {/* Stats grid with icons */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className={`${stat.bg} p-6 rounded-xl shadow-sm border border-light/10 transition-all duration-300`}
                    >
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="text-2xl">{stat.icon}</div>
                        <p className={`${stat.text} text-3xl font-bold`}>{stat.value}</p>
                      </div>
                      <p className="text-dark-light text-center text-sm font-medium">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurMission;