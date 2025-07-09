import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaChalkboardTeacher, FaBookOpen, FaFlask, FaRunning } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { MdScience, MdSportsHandball } from 'react-icons/md';

export function DevelopmentPlans() {
  const initiatives = [
    {
      category: "Academic Excellence",
      icon: <FaGraduationCap className="text-4xl" />,
      color: "bg-primary-light",
      border: "border-primary",
      items: [
        { icon: <FaLaptopCode />, text: "Introducing new and advanced curriculum modules" },
        { icon: <GiTeacher />, text: "Expanding STEM and digital literacy programs" },
        { icon: <FaChalkboardTeacher />, text: "Teacher training programs" }
      ]
    },
    {
      category: "Infrastructure Enhancement",
      icon: <FaBookOpen className="text-4xl" />,
      color: "bg-secondary-light",
      border: "border-secondary",
      items: [
        { icon: <FaFlask />, text: "State-of-the-art science and computer labs" },
        { icon: <MdScience />, text: "Modern classrooms with smart boards" },
        { icon: <MdSportsHandball />, text: "Expanded sports facilities" },
        { icon: <FaRunning />, text: "Digital/physical library resources" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-light to-primary-light">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark font-merriweather mb-4">
            ICMS School Development Plans
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-dark max-w-3xl mx-auto font-nunito">
            We are committed to continuous improvement and innovation in education to ensure a world-class learning environment.
          </p>
        </motion.div>

        {/* Development Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl shadow-xl ${initiative.color} border-t-8 ${initiative.border} relative overflow-hidden`}
            >
              {/* Floating decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white bg-opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-white mr-4 shadow-md">
                    {initiative.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary-dark font-merriweather">
                    {initiative.category}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {initiative.items.map((item, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start font-nunito"
                    >
                      <span className="text-secondary mr-3 mt-1">{item.icon}</span>
                      <span className="text-dark">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary"
        >
          <h3 className="text-2xl font-bold text-primary-dark font-merriweather mb-6 text-center">
            Our Development Timeline
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-secondary-light transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {[
                { year: "2024", event: "Curriculum Modernization" },
                { year: "2025", event: "Smart Classroom Rollout" },
                { year: "2026", event: "Campus Expansion" }
              ].map((item, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 p-4 rounded-lg ${index % 2 === 0 ? 'bg-primary-light' : 'bg-secondary-light'}`}>
                    <div className={`absolute top-4 w-4 h-4 rounded-full ${index % 2 === 0 ? 'right-0 transform translate-x-1/2 bg-primary' : 'left-0 transform -translate-x-1/2 bg-secondary'}`}></div>
                    <h4 className="font-bold text-primary-dark">{item.year}</h4>
                    <p className="text-dark">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
