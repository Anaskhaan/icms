import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaHandsHelping, FaLightbulb, FaUserGraduate } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

export function Careers() {
  const benefits = [
    {
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: "Teaching Positions",
      description: "Inspire young minds with innovative teaching methods"
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Research Roles",
      description: "Contribute to educational research and development"
    },
    {
      icon: <RiTeamFill className="text-3xl" />,
      title: "Administrative Staff",
      description: "Support our educational mission behind the scenes"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Student Support",
      description: "Help students achieve their full potential"
    }
  ];

  const perks = [
    "Competitive salaries",
    "Professional development programs",
    "Health and wellness benefits",
    "Collaborative work environment",
    "Cutting-edge teaching resources"
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-light to-light">
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
            <span className="bg-clip-text text-primary bg-gradient-to-r from-primary to-secondary">
              Join Our Team
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-dark max-w-3xl mx-auto font-nunito">
            Shape the Future of Education at ICMS
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-10 rounded-3xl shadow-2xl border-l-8 border-primary">
              <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-6">
                Why Join ICMS?
              </h3>
              <p className="text-dark font-nunito mb-6">
                At ICMS, we are committed to providing high-quality education and fostering an environment where students and teachers thrive. We believe in continuous learning, innovation, and teamwork.
              </p>
              <p className="text-dark font-nunito mb-8">
                If you have a passion for education and want to be part of a dynamic team, explore our career opportunities below.
              </p>
              <div className="space-y-3">
                {perks.map((perk, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-secondary mr-3"></div>
                    <span className="text-dark font-nunito">{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-8 -left-8 w-full h-full rounded-3xl border-4 border-secondary-light z-0"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-xl z-10">
              <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-8">
                Professional Development & Growth
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-light p-6 rounded-xl border-b-4 border-primary"
                  >
                    <div className="text-primary mb-4">{benefit.icon}</div>
                    <h4 className="font-bold text-primary-dark font-merriweather mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-dark-light font-nunito">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full overflow-hidden group">
            <span className="relative z-10">Explore Current Openings</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
