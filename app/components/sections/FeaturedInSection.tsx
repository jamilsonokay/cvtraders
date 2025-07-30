'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedInSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const publications = [
    { name: 'Forbes', logo: '/images/forbes-logo.svg' },
    { name: 'Bloomberg', logo: '/images/bloomberg-logo.svg' },
    { name: 'TechCrunch', logo: '/images/techcrunch-logo.svg' },
    { name: 'Business Insider', logo: '/images/business-insider-logo.svg' },
    { name: 'CNBC', logo: '/images/cnbc-logo.svg' },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-xl font-light text-gray-400 tracking-tight">APRESENTADO EM</h2>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <div className="h-8 md:h-10 w-auto">
                <img src={pub.logo} alt={pub.name} className="h-full w-auto" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedInSection;