import { motion } from 'framer-motion';
import { 
  FaChild, FaSchool, FaUserGraduate, 
  FaBookOpen, FaFlask, FaChartLine,
  FaMale, FaFemale, FaUsers
} from 'react-icons/fa';

const CampusesComponent = () => {
  const campuses = [
    {
      title: "Montessori Campus",
      grades: "PG - Nursery - Prep",
      icon: <FaChild className="text-primary" size={28} />,
      description: "Our Montessori Campus focuses on early childhood education, fostering creativity, curiosity, and foundational skills in a fun and engaging environment.",
      color: "from-primary-light to-primary",
      features: ["Play-based learning", "Sensory development", "Social skills"],
      gender: "co-ed"
    },
    {
      title: "Junior Campus",
      grades: "1st - 3rd Grade",
      icon: <FaSchool className="text-secondary" size={28} />,
      description: "This campus nurtures young learners with interactive teaching methods and a solid academic foundation to prepare them for the next level.",
      color: "from-secondary-light to-secondary",
      features: ["Interactive learning", "Basic literacy", "Numeracy skills"],
      gender: "co-ed"
    },
    {
      title: "Boys Primary Campus",
      grades: "4th - 5th Grade",
      icon: <FaMale className="text-primary-dark" size={28} />,
      description: "A dedicated learning space for boys, ensuring academic excellence with a strong emphasis on character development and extracurricular activities.",
      color: "from-primary/90 to-primary-dark",
      features: ["Character building", "Sports programs", "STEM introduction"],
      gender: "male"
    },
    {
      title: "Girls Primary Campus",
      grades: "4th - 5th Grade",
      icon: <FaFemale className="text-secondary-dark" size={28} />,
      description: "Designed for young girls, this campus offers a supportive and empowering educational environment focusing on confidence and knowledge building.",
      color: "from-secondary/90 to-secondary-dark",
      features: ["Leadership skills", "Creative arts", "Science exploration"],
      gender: "female"
    },
    {
      title: "Boys Middle Campus",
      grades: "6th - 8th Grade",
      icon: <FaUserGraduate className="text-success" size={28} />,
      description: "This campus caters to middle school boys, offering a balanced approach between academics, extracurriculars, and skill development.",
      color: "from-success-light to-success",
      features: ["Advanced mathematics", "Science labs", "Debate clubs"],
      gender: "male"
    },
    {
      title: "Girls Middle Campus",
      grades: "6th - 8th Grade",
      icon: <FaBookOpen className="text-primary" size={28} />,
      description: "A structured and motivating learning space where girls receive quality education and character development to prepare them for higher classes.",
      color: "from-primary-light/90 to-primary",
      features: ["Research skills", "Literature focus", "Technology integration"],
      gender: "female"
    },
    {
      title: "Boys High Campus",
      grades: "9th - 10th Grade",
      icon: <FaFlask className="text-secondary" size={28} />,
      description: "Focused on preparing students for board examinations with rigorous academics and practical learning experiences in science, mathematics, and humanities.",
      color: "from-secondary-light/90 to-secondary",
      features: ["Exam preparation", "Lab experiments", "Career guidance"],
      gender: "male"
    },
    {
      title: "Girls High Campus",
      grades: "9th - 10th Grade",
      icon: <FaChartLine className="text-success-dark" size={28} />,
      description: "Providing a well-structured curriculum that ensures young girls excel in their academic and personal growth during these crucial years.",
      color: "from-success/90 to-success-dark",
      features: ["University prep", "Research projects", "Leadership programs"],
      gender: "female"
    },
    {
      title: "College Campus",
      grades: "11th - 12th Grade",
      icon: <FaUsers className="text-primary" size={28} />,
      description: "A co-educational college campus that offers pre-university education in Science, Commerce, and Humanities with highly qualified faculty and state-of-the-art facilities.",
      color: "from-primary-dark to-primary",
      features: ["Science streams", "Commerce programs", "Humanities courses"],
      gender: "co-ed"
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            <span className="text-dark bg-clip-text bg-gradient-to-r from-primary to-primary-dark">ICMS Campuses</span>
          </h2>
          <p className="text-xl text-dark-light max-w-3xl mx-auto">
            A complete educational journey tailored to each developmental stage, with specialized environments for optimal learning and growth.
          </p>
        </motion.div>

        {/* Campus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campuses.map((campus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${campus.color} p-6 text-dark`}>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                    {campus.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{campus.title}</h3>
                    <p className="font-medium">{campus.grades}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-6">
                <p className="text-dark-light mb-6">{campus.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {campus.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`inline-block mt-1 w-2 h-2 rounded-full ${
                          campus.gender === 'male' ? 'bg-primary-dark' : 
                          campus.gender === 'female' ? 'bg-secondary-dark' : 'bg-primary'
                        }`}></span>
                        <span className="text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Gender Badge */}
                <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  campus.gender === 'male' ? 'bg-primary-light text-primary-dark' :
                  campus.gender === 'female' ? 'bg-secondary-light text-secondary-dark' :
                  'bg-success-light text-success-dark'
                }`}>
                  {campus.gender === 'co-ed' ? 'Co-Educational' : campus.gender === 'male' ? 'Boys Only' : 'Girls Only'}
                </div>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute top-0 right-0 w-16 h-16 ${
                campus.gender === 'male' ? 'bg-primary-dark' :
                campus.gender === 'female' ? 'bg-secondary-dark' : 'bg-primary'
              } rounded-bl-2xl opacity-20`}></div>
            </motion.div>
          ))}
        </div>

        {/* Unified System Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 md:p-12 text-dark overflow-hidden relative"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-light rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-light rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">A Seamless Educational Journey</h3>
            <p className="text-lg mb-6">
              From early childhood through college preparation, ICMS provides a continuous learning pathway with consistent values, 
              gradually increasing academic rigor, and age-appropriate support at every stage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm min-w-[150px]">
                <div className="text-2xl font-bold mb-1">9</div>
                <div className="text-sm">Specialized Campuses</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm min-w-[150px]">
                <div className="text-2xl font-bold mb-1">20+</div>
                <div className="text-sm">Years of Education</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm min-w-[150px]">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm">Curriculum Alignment</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusesComponent;