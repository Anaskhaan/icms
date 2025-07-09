import { motion } from 'framer-motion';
import { FaBookOpen, FaVideo, FaTasks, FaUsers, FaUserClock, FaChartLine } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

export function HomeLearning() {
  const features = [
    {
      icon: <FaBookOpen className="text-3xl" />,
      title: "Comprehensive Study Materials",
      desc: "E-books, lecture notes, and video lessons tailored to your curriculum"
    },
    {
      icon: <FaVideo className="text-3xl" />,
      title: "Live & Recorded Sessions",
      desc: "Real-time classes or recorded sessions for concept clarity"
    },
    {
      icon: <FaTasks className="text-3xl" />,
      title: "Assignments & Assessments",
      desc: "Homework, quizzes, and online tests to track progress"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Teacher & Peer Support",
      desc: "Discussion forums and Q&A sessions with teachers and classmates"
    },
    {
      icon: <FaUserClock className="text-3xl" />,
      title: "Flexible Learning",
      desc: "Study anytime, anywhere from the comfort of your home"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Progress Tracking",
      desc: "Parents can monitor learning progress with regular feedback"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-light to-primary-light">
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
            <span className="bg-clip-text text-primary bg-gradient-to-r from-primary to-secondary">
              Home Learning
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-dark max-w-3xl mx-auto font-nunito">
            A Smarter Way to Learn at ICMS
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary to-secondary opacity-20 blur-md"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-6">
                Learning Without Limits
              </h3>
              <p className="text-dark font-nunito mb-6">
                At ICMS Schools & Colleges, we bring education to your fingertips through our Home Learning Program. Designed to support students beyond the classroom, this initiative ensures uninterrupted learning with access to digital resources, expert guidance, and interactive study materials.
              </p>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary-light">
                  <GiTeacher className="text-2xl text-primary" />
                </div>
                <p className="text-dark font-nunito italic">
                  "Education that adapts to your lifestyle"
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-secondary">
              <div className="grid md:grid-cols-2 gap-6">
                {features.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl bg-light hover:shadow-md transition-all"
                  >
                    <div className="text-secondary mb-4">{feature.icon}</div>
                    <h4 className="font-bold text-primary-dark font-merriweather mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-dark-light font-nunito text-sm">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="h-full p-6 rounded-xl border-2 border-light group-hover:border-primary-light transition-all">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h4 className="font-bold text-primary-dark font-merriweather mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-dark-light font-nunito">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
};
