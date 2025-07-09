import React from 'react';
import student from "../../assets/images/student.svg";

export function StartLearningJourney() {
  return (
    <section className="relative overflow-hidden bg-light py-20 px-6 md:px-16">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-light/10 rounded-full mix-blend-multiply animate-float"></div>
        <div className="absolute bottom-1/3 right-20 w-64 h-64 bg-secondary-light/10 transform rotate-45 animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content - Interactive Timeline */}
          <div>
            {/* Vibrant Badge */}
            <div className="inline-flex items-center bg-primary-light/20 px-4 py-2 rounded-full border border-primary mb-8">
              <div className="w-2 h-2 bg-primary-dark rounded-full mr-2 animate-pulse"></div>
              <span className="text-primary-dark font-bold text-sm uppercase tracking-wider">
                Transformative Learning
              </span>
            </div>

            {/* Headline with Depth */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-8 leading-tight">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-primary-light/20 rounded-lg -rotate-1 -z-10"></span>
                <span className="relative">Unlock Your Child's</span>
              </span>
              <br />
              <span className="text-primary-dark">Brilliant Future</span>
            </h2>

            <p className="text-dark-light mb-8 text-lg">
              At our institution, we don't just educate - we inspire lifelong learners. Our unique approach combines cutting-edge pedagogy with time-tested teaching methods to create an environment where every child thrives.
            </p>

            {/* Stepped Progress Indicator */}
            <div className="space-y-8 pl-6 border-l-2 border-dark-light/20">
              <div className="relative group">
                <div className="absolute -left-7 top-0 w-4 h-4 bg-primary-dark rounded-full transform group-hover:scale-125 transition-all"></div>
                <h3 className="text-lg font-bold text-dark group-hover:text-primary-dark transition-colors">
                  Play-Based Foundation (Ages 3-5)
                </h3>
                <p className="text-dark-light mt-2">
                  Our early years program focuses on sensory-rich activities that stimulate cognitive development through:
                </p>
                <ul className="text-dark-light mt-2 ml-4 list-disc space-y-1">
                  <li>Interactive storytelling sessions</li>
                  <li>STEAM-based exploration centers</li>
                  <li>Social-emotional learning through play</li>
                </ul>
              </div>
              
              <div className="relative group">
                <div className="absolute -left-7 top-0 w-4 h-4 bg-secondary-dark rounded-full transform group-hover:scale-125 transition-all"></div>
                <h3 className="text-lg font-bold text-dark group-hover:text-secondary-dark transition-colors">
                  Holistic Growth (Grades 1-8)
                </h3>
                <p className="text-dark-light mt-2">
                  We nurture well-rounded individuals through our comprehensive curriculum that emphasizes:
                </p>
                <ul className="text-dark-light mt-2 ml-4 list-disc space-y-1">
                  <li>Project-based collaborative learning</li>
                  <li>Mindfulness and character education</li>
                  <li>Arts integration across all subjects</li>
                </ul>
              </div>

              <div className="relative group">
                <div className="absolute -left-7 top-0 w-4 h-4 bg-success-dark rounded-full transform group-hover:scale-125 transition-all"></div>
                <h3 className="text-lg font-bold text-dark group-hover:text-success-dark transition-colors">
                  Excellence Pathway (Grades 9-12)
                </h3>
                <p className="text-dark-light mt-2">
                  Our senior program prepares students for global success with:
                </p>
                <ul className="text-dark-light mt-2 ml-4 list-disc space-y-1">
                  <li>Advanced Placement and honors courses</li>
                  <li>University and career counseling</li>
                  <li>Leadership development programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Layered Visuals */}
          <div className="relative h-[480px]">
            {/* Base Layer */}
            <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-white rounded-2xl shadow-md border border-dark-light/10 transform rotate-1"></div>
            
            {/* Main Card */}
            <div className="absolute z-10 w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden border border-dark-light/10 hover:shadow-xl transition-all">
              <img
                src={student}
                alt="Child engaged in learning"
                className="w-full h-full object-cover"
              />
              
              {/* Floating Labels */}
              <div className="absolute bottom-6 left-6 bg-primary-dark text-white px-4 py-2 rounded-full shadow-md flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Certified Program</span>
              </div>

              <div className="absolute top-6 right-6 bg-success-dark text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                98% Satisfaction
              </div>
            </div>
            
            {/* Accent Element */}
            <div className="absolute -top-5 -right-5 z-20 bg-secondary-dark text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg rotate-6">
              Innovative<br/>Methods
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-primary-light/10 p-8 rounded-2xl border border-primary-light/20">
          <blockquote className="text-dark italic">
            "The transformation we've seen in our daughter's confidence and love for learning has been remarkable. The teachers truly understand how to make education engaging and meaningful."
          </blockquote>
          <div className="flex items-center mt-4">
            <div className="w-10 h-10 bg-primary-dark/10 rounded-full mr-3"></div>
            <div>
              <p className="text-dark font-semibold">Sehrish Kareem</p>
              <p className="text-dark-light text-sm">Parent of Grade 3 Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};