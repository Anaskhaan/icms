import { FaFlask, FaBook, FaBasketballBall, FaPalette, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Color mapping object to properly handle dynamic Tailwind classes
const colorMap = {
  primary: {
    border: 'border-primary',
    bg: 'bg-primary-light',
    text: 'text-primary'
  },
  secondary: {
    border: 'border-secondary',
    bg: 'bg-secondary-light',
    text: 'text-secondary'
  },
  success: {
    border: 'border-success-dark',
    bg: 'bg-success-light',
    text: 'text-success'
  },
  'primary-dark': {
    border: 'border-primary-dark',
    bg: 'bg-primary-light',
    text: 'text-primary-dark'
  },
  'secondary-dark': {
    border: 'border-secondary-dark',
    bg: 'bg-secondary-light',
    text: 'text-secondary-dark'
  },
  'success-dark': {
    border: 'border-success-dark',
    bg: 'bg-success-light',
    text: 'text-success-dark'
  }
};

export function CampusFacilities() {
  const facilities = [
    {
      icon: <FaUniversity className="text-4xl" />,
      title: "Centrally Located Campuses",
      description: "Our specifically designed campuses provide an excellent setting for students to excel in both their academic and social pursuits.",
      color: "primary"
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Classrooms",
      description: "Spacious and well-equipped with smart boards, audio-visual aids, and ergonomic furniture to enhance the learning experience.",
      color: "secondary"
    },
    {
      icon: <FaFlask className="text-4xl" />,
      title: "Labs",
      description: "Fully equipped science, computer, and language labs to support hands-on learning and experimentation.",
      color: "success"
    },
    {
      icon: <FaBook className="text-4xl" />,
      title: "Library",
      description: "A well-stocked library with a vast collection of books, journals, and digital resources to support academic and recreational reading.",
      color: "primary-dark"
    },
    {
      icon: <FaBasketballBall className="text-4xl" />,
      title: "Sports Facilities",
      description: "A gymnasium, basketball court, swimming pool, and outdoor fields for various sports and physical activities.",
      color: "secondary-dark"
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: "Arts and Activity Rooms",
      description: "Dedicated spaces for creative expression, including art studios and music practice rooms.",
      color: "success-dark"
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Campus Facilities</h2>
          <p className="text-xl text-dark-light max-w-3xl mx-auto">
            Our campus is designed to provide students with a comfortable, stimulating, and safe environment for learning and personal growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const colors = colorMap[facility.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${colors.border} transition-all duration-300 hover:shadow-xl`}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center mb-4`}>
                    <span className={colors.text}>
                      {facility.icon}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-semibold ${colors.text} mb-3`}>{facility.title}</h3>
                  <p className="text-dark-light">{facility.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
}