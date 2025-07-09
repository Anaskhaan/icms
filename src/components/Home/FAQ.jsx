export function FAQ() {
  const faqs = [
    {
      question: "Academic Excellence",
      answer: "Our rigorous curriculum is designed to challenge students and prepare them for success in higher education and beyond.",
      icon: "📚"
    },
    {
      question: "Experienced Faculty",
      answer: "Our teachers are not only highly qualified but also deeply committed to nurturing the potential of every student.",
      icon: "👩‍🏫"
    },
    {
      question: "Modern Facilities",
      answer: "From smart classrooms to advanced labs, our campus is equipped with the latest technology to enhance the learning experience.",
      icon: "🏫"
    },
    {
      question: "Extracurricular Activities",
      answer: "We offer a wide range of activities, including sports, arts, debate, and community service, to help students develop their talents and interests.",
      icon: "⚽"
    },
    {
      question: "Values Education",
      answer: "Our programs emphasize integrity, respect, and responsibility, preparing students to become ethical and compassionate individuals.",
      icon: "❤️"
    },
    {
      question: "Leadership Development",
      answer: "Through workshops, mentoring, and hands-on experiences, we empower students to become confident and capable leaders.",
      icon: "🌟"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-light to-primary-light/5 py-20 px-4 sm:px-6 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-light/20 animate-float"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-light/20 text-primary-dark px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wider mb-4">
            Why ICMS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            <span className="bg-gradient-to-r from-primary-dark to-secondary-dark bg-clip-text text-transparent">
              Excellence in Education
            </span>
          </h2>
          <p className="text-dark-light max-w-2xl mx-auto">
            Answers to your most common questions about our world-class institution
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary-light/10 rotate-45"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 h-full flex flex-col">
                <div className="text-4xl mb-4">{faq.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{faq.question}</h3>
                <p className="text-dark-light flex-grow">{faq.answer}</p>
                
                {/* Animated underline */}
                <div className="mt-4 pt-4 border-t border-dark-light/10 relative">
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-dark group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}