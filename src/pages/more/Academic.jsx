import { motion } from 'framer-motion';
import { FaGraduationCap, FaBookOpen, FaChalkboardTeacher, FaRunning, FaLightbulb, FaLaptop } from 'react-icons/fa';

export function Academic() {
  const features = [
    {
      icon: <FaBookOpen className="text-3xl" />,
      title: "Comprehensive Curriculum",
      description: "A well-structured syllabus from Montessori to College Level, ensuring a seamless educational journey."
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl" />,
      title: "Highly Qualified Faculty",
      description: "Experienced teachers dedicated to nurturing and guiding students toward academic success."
    },
    {
      icon: <FaRunning className="text-3xl" />,
      title: "Extracurricular Activities",
      description: "Sports, debates, arts, and club activities for overall personality development."
    },
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Skill-Based Learning",
      description: "Encouraging problem-solving, critical thinking, and innovation."
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Board Exam Preparation",
      description: "Special coaching and mock tests for 9th-12th grade students to ensure excellent results."
    },
    {
      icon: <FaLaptop className="text-3xl" />,
      title: "Smart Learning Environment",
      description: "Digital classrooms, science & computer labs, and a well-stocked library to enhance knowledge and skills."
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark font-merriweather mb-4">
            ICMS Academic Excellence
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-dark max-w-3xl mx-auto font-nunito">
            At ICMS, we take pride in offering a comprehensive and well-rounded education system that nurtures intellectual and personal growth.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary"
          >
            <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-4">
              Academic Excellence at ICMS
            </h3>
            <p className="text-dark font-nunito mb-4">
              At ICMS, we are committed to providing high-quality education that empowers students to achieve their full potential. Our academic programs are designed to foster intellectual growth, creativity, and leadership skills while maintaining a strong foundation in core subjects.
            </p>
            <p className="text-dark font-nunito">
              We believe in creating an environment where students can explore their interests, develop new skills, and prepare for the challenges of tomorrow's world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary-light p-8 rounded-lg shadow-lg flex items-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-4">
                Our Philosophy
              </h3>
              <p className="text-dark font-nunito">
                Education is not just about academic achievement but about developing well-rounded individuals who can think critically, act responsibly, and contribute meaningfully to society. At ICMS, we blend traditional values with modern teaching methodologies to create a dynamic learning experience.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-secondary"
            >
              <div className="text-secondary mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-primary-dark font-merriweather mb-2">
                {feature.title}
              </h4>
              <p className="text-dark-light font-nunito">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
