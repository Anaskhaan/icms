import { FaClipboardList, FaUserTie, FaShieldAlt, FaBalanceScale, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function RulesAndRegulations() {
  const rules = [
    {
      icon: <FaClipboardList className="text-3xl" />,
      title: "Code of Conduct",
      items: [
        "Respect for all members of the school community",
        "Punctuality for all school activities",
        "Proper school uniform at all times",
        "No use of mobile phones during class hours"
      ],
      color: "primary"
    },
    {
      icon: <FaUserTie className="text-3xl" />,
      title: "Academic Integrity",
      items: [
        "Original work expected at all times",
        "Strict prohibition of plagiarism",
        "Timely submission of assignments",
        "Active participation in class activities"
      ],
      color: "secondary"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Safety Protocols",
      items: [
        "No bullying or harassment tolerated",
        "Emergency drills conducted monthly",
        "Visitors must check in at reception",
        "Reporting of unsafe conditions required"
      ],
      color: "success"
    },
    {
      icon: <FaBalanceScale className="text-3xl" />,
      title: "Disciplinary Policy",
      items: [
        "Progressive discipline approach",
        "Clear consequences for violations",
        "Parent/guardian involvement",
        "Opportunities for improvement"
      ],
      color: "primary-dark"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Community Expectations",
      items: [
        "Participation in school events",
        "Respect for school property",
        "Positive representation of school",
        "Collaboration with staff and peers"
      ],
      color: "secondary-dark"
    }
  ];

  return (
    <section className="py-16 bg-primary-light/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Rules and Regulations</h2>
          <p className="text-xl text-dark-light max-w-3xl mx-auto">
            At ICMS School System and Girls College, we believe that a structured and disciplined environment is essential for the holistic development of our students.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-primary transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-${rule.color}-light flex items-center justify-center mr-4`}>
                    <span className={`text-${rule.color}`}>
                      {rule.icon}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-semibold text-${rule.color}`}>{rule.title}</h3>
                </div>
                <ul className="space-y-2 pl-2">
                  {rule.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="flex items-start text-dark-light"
                    >
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-${rule.color} mt-2.5 mr-2`}></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-primary-light/20 p-4 rounded-lg inline-block">
                <FaBalanceScale className="text-5xl text-primary" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-primary mb-3">Our Philosophy</h3>
              <p className="text-dark-light">
                These rules are not meant to restrict but to empower. By maintaining clear expectations, we create an environment where every student can thrive academically, socially, and personally. Our disciplinary approach focuses on education and growth rather than punishment.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}