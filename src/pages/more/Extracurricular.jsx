import { motion } from 'framer-motion';
import { FaPalette, FaMusic, FaRunning, FaTheaterMasks, FaRobot, FaChess, FaCamera } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function Extracurricular() {
  const activities = [
    {
      icon: <FaPalette className="text-4xl" />,
      title: "Art & Craft",
      description: "Explore painting, pottery, and creative expression."
    },
    {
      icon: <FaMusic className="text-4xl" />,
      title: "Music & Dance",
      description: "Vocal, instrumental, and various dance forms."
    },
    {
      icon: <FaRunning className="text-4xl" />,
      title: "Sports",
      description: "Cricket, basketball, athletics, and more."
    },
    {
      icon: <FaTheaterMasks className="text-4xl" />,
      title: "Drama",
      description: "Theatrical performances and public speaking."
    },
    {
      icon: <FaRobot className="text-4xl" />,
      title: "STEM Club",
      description: "Robotics, coding, and science projects."
    },
    {
      icon: <FaChess className="text-4xl" />,
      title: "Chess",
      description: "Strategic thinking and tournaments."
    }
  ];

  const galleryImages = [
    { id: 1, alt: "Art Exhibition" },
    { id: 2, alt: "Music Performance" },
    { id: 3, alt: "Sports Day" },
    { id: 4, alt: "Drama Club" },
    { id: 5, alt: "Science Fair" },
    { id: 6, alt: "Chess Tournament" },
    { id: 7, alt: "Dance Recital" },
    { id: 8, alt: "Debate Competition" }
  ];

  return (
    <section className="py-16 bg-primary-light">
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
            Extra-Curricular Activities
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-lg text-dark max-w-3xl mx-auto font-nunito">
            At ICMS School & College, we believe in the holistic development of students. Along with academics, we offer a variety of extra-curricular activities to enhance creativity, leadership, and teamwork.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="text-secondary mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-primary-dark font-merriweather mb-3">
                {activity.title}
              </h3>
              <p className="text-dark-light font-nunito">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-primary-dark font-merriweather text-center mb-8">
            Activity Gallery
          </h3>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative group overflow-hidden rounded-lg shadow-md h-64">
                  {/* Replace with actual image paths */}
                  <div className="bg-secondary-light w-full h-full flex items-center justify-center">
                    <FaCamera className="text-5xl text-secondary" />
                  </div>
                  <div className="absolute inset-0 bg-primary-dark bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-nunito font-bold text-lg">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
