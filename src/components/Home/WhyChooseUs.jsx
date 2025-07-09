export function WhyChooseUs() {
  return (
    <section className="relative bg-light py-16 px-4 sm:px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 w-48 h-48 bg-primary-light/10 rounded-full filter blur-xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-4 w-40 h-40 bg-secondary-light/10 rounded-full filter blur-xl animate-float-reverse"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-light/20 text-primary-dark px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            Our Legacy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
            <span className="text-primary-dark">Why Choose</span> ICMS
          </h2>
          <p className="text-dark-light">
            Providing <span className="font-medium">Quality Education</span> for Over <span className="font-medium">30 Years</span>
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-dark-light/10 hover:shadow-md transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-primary-light/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-2">Experienced & Dedicated Teachers</h3>
                <p className="text-dark-light text-sm">
                  Our highly qualified faculty members are passionate about student success.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-dark-light/10 hover:shadow-md transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-secondary-light/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-secondary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-2">Comprehensive Curriculum</h3>
                <p className="text-dark-light text-sm">
                  Structured syllabus fostering critical thinking and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-dark-light/10 hover:shadow-md transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-success-light/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-success-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-2">Modern Learning Environment</h3>
                <p className="text-dark-light text-sm">
                  Smart classrooms and well-equipped labs for holistic learning.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-dark-light/10 hover:shadow-md transition-all">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-primary-light/10 p-3 rounded-lg">
                <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-2">Certification & Recognition</h3>
                <p className="text-dark-light text-sm">
                  Globally recognized certifications for international opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary paragraph */}
        <div className="mt-10 text-center text-dark-light">
          <p>
            At ICMS, we are committed to shaping young minds with excellence in education, 
            character-building, and skill development.
          </p>
        </div>
      </div>
    </section>
  );
}