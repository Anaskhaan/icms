import { motion } from 'framer-motion';
import { FaTrophy, FaGraduationCap, FaLightbulb, FaUserGraduate, FaChartLine } from 'react-icons/fa';
import { GiLaurelsTrophy } from 'react-icons/gi';

export function Achievements() {
  const achievementCategories = [
    {
      icon: <FaTrophy className="text-4xl" />,
      title: "Academic Excellence",
      stats: "150+ Board Exam Toppers",
      description: "Our students consistently rank among the top performers in national and international examinations."
    },
    {
      icon: <GiLaurelsTrophy className="text-4xl" />,
      title: "Competitions",
      stats: "300+ Awards Won",
      description: "Outstanding performances in olympiads, debates, and academic competitions."
    },
    {
      icon: <FaUserGraduate className="text-4xl" />,
      title: "Alumni Success",
      stats: "90% University Placement",
      description: "Our graduates excel at prestigious universities and in their professional careers."
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovations",
      stats: "50+ Research Projects",
      description: "Groundbreaking student research and innovative projects recognized nationally."
    }
  ];

  const milestoneYears = [
    { year: "2015", event: "National Education Excellence Award" },
    { year: "2018", event: "Ranked #1 in State Board Results" },
    { year: "2020", event: "International STEM Competition Winners" },
    { year: "2022", event: "Best School Infrastructure Award" },
    { year: "2023", event: "100% University Acceptance Rate" }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-light to-primary-light">
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
            <span className="bg-clip-text text-primary-dark bg-gradient-to-r from-primary to-secondary">
              Celebrating Excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl text-dark max-w-3xl mx-auto font-nunito">
            ICMS Schools & Colleges - A Legacy of Achievement
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {achievementCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-xl text-center border-t-4 border-primary relative overflow-hidden group"
            >
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
              <div className="text-primary mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark font-merriweather mb-2">
                {category.title}
              </h3>
              <p className="text-2xl font-bold text-secondary mb-3 font-nunito">
                {category.stats}
              </p>
              <p className="text-dark-light font-nunito">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Milestone Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-primary-dark font-merriweather text-center mb-10">
            Our Milestones
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 h-full w-1 bg-gradient-to-b from-primary to-secondary top-0 ml-6 md:left-1/2 md:-ml-1"></div>
            
            {/* Timeline items */}
            <div className="space-y-10 pl-10 md:pl-0">
              {milestoneYears.map((milestone, index) => (
                <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`w-full md:w-5/12 p-6 rounded-xl ${index % 2 === 0 ? 'bg-primary-light' : 'bg-secondary-light'} relative`}>
                    <div className={`absolute top-6 -left-2 w-4 h-4 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} md:left-auto md:-right-2`}></div>
                    <div className="flex items-center mb-2">
                      <div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} mr-3`}></div>
                      <h4 className="font-bold text-primary-dark">{milestone.year}</h4>
                    </div>
                    <p className="text-dark pl-6">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-10 text-center text-dark-light shadow-xl mb-16"
        >
          <FaGraduationCap className="text-5xl mx-auto mb-6 opacity-80" />
          <blockquote className="text-xl italic font-nunito mb-6 max-w-3xl mx-auto">
            "ICMS doesn't just teach students - it shapes future leaders. The achievements of our students reflect our commitment to excellence in education."
          </blockquote>
          <p className="font-bold font-merriweather text-primary-dark">Mr Qadir Ullah Khan Wazir
</p>
<p className=" font-merriweather">
Mphil Chemistry (UST Bannu) | M.Ed (SUIT Peshawar)</p>
        </motion.div>
      </div>
    </section>
  );
};
