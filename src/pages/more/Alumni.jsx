import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaUserGraduate, FaCalendarAlt, FaUsers } from 'react-icons/fa';
export function Alumni() {
  const graduationHighlights = [
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Ceremonial Traditions",
      description: "Time-honored rituals including cap toss and diploma presentation"
    },
    {
      icon: <FaUserGraduate className="text-3xl" />,
      title: "Graduate Spotlights",
      description: "Exceptional students recognized for their achievements"
    },
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      title: "Annual Event",
      description: "Held every June in our historic campus courtyard"
    }
  ];

  const resultHighlights = [
    {
      icon: <FaTrophy className="text-3xl" />,
      title: "Top Performers",
      description: "Students recognized for academic excellence"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Community Gathering",
      description: "Students, teachers and parents celebrate together"
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Future Pathways",
      description: "Graduates share their college and career plans"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-light to-primary-light">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-secondary opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-primary opacity-10 translate-x-1/2 translate-y-1/2"></div>
      
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
            Alumni Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-dark max-w-3xl mx-auto font-nunito">
            Celebrating Our Graduates and Their Success Stories
          </p>
        </motion.div>

        {/* Graduation Ceremony Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-primary">
            <h3 className="text-3xl font-bold text-primary-dark font-merriweather mb-6">
              Graduation Ceremony
            </h3>
            <p className="text-dark font-nunito mb-8">
              A momentous occasion that marks the culmination of years of dedication, perseverance, and hard work. It is a time when students transition from one chapter of their academic journey to the next, stepping into a world of new opportunities and challenges.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {graduationHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-light p-6 rounded-xl text-center"
                >
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h4 className="font-bold text-primary-dark font-merriweather mb-2">
                    {item.title}
                  </h4>
                  <p className="text-dark-light font-nunito text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-96 bg-gradient-to-br from-primary-light to-light rounded-3xl shadow-xl overflow-hidden">
            {/* Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaGraduationCap className="text-8xl text-primary opacity-20" />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                <span className="text-white font-bold text-xl bg-primary bg-opacity-80 px-4 py-2 rounded-full">
                  Graduation Day 2023
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Annual Results Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="relative h-full min-h-96 bg-gradient-to-br from-secondary-light to-light rounded-3xl shadow-xl overflow-hidden order-last lg:order-first">
            {/* Replace with actual image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <FaTrophy className="text-8xl text-secondary opacity-20" />
              <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                <span className="text-white font-bold text-xl bg-secondary bg-opacity-80 px-4 py-2 rounded-full">
                  Annual Results Day
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-secondary">
            <h3 className="text-3xl font-bold text-primary-dark font-merriweather mb-6">
              Annual Results Celebration
            </h3>
            <p className="text-dark font-nunito mb-8">
              One of the most anticipated occasions in the academic calendar, where students, teachers, and parents come together to recognize and celebrate academic achievements. This event highlights the hard work, dedication, and perseverance of students throughout the year.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {resultHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-light p-6 rounded-xl text-center"
                >
                  <div className="text-secondary mb-4">{item.icon}</div>
                  <h4 className="font-bold text-primary-dark font-merriweather mb-2">
                    {item.title}
                  </h4>
                  <p className="text-dark-light font-nunito text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Alumni Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 text-center"
        >
          <h3 className="text-2xl font-bold text-dark font-merriweather mb-6">
            Alumni Success Stories
          </h3>
          <p className="text-dark font-nunito mb-6 max-w-3xl mx-auto">
            Our graduates have gone on to excel in prestigious universities and rewarding careers across diverse fields.
          </p>
          <button className="px-8 py-3 bg-dark hover:bg-primary-dark text-light font-bold rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            Explore Alumni Network
          </button>
        </motion.div>
      </div>
    </section>
  );
};
