'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: 'Miguel Oliveira',
    role: 'Day Trader',
    image: '/images/testimonial-1.svg',
    content: 'A CV Traders transformou completamente minha abordagem ao trading. As ferramentas de análise e a comunidade são excepcionais.',
    result: '+45% de retorno em 3 meses'
  },
  {
    id: 2,
    name: 'Sofia Mendes',
    role: 'Trader Iniciante',
    image: '/images/testimonial-2.svg',
    content: 'Como iniciante, eu estava perdida no mundo do trading. A educação e o suporte que recebi da CV Traders foram fundamentais para meu sucesso inicial.',
    result: 'Consistentemente lucrativa após 2 meses'
  },
  {
    id: 3,
    name: 'António Ferreira',
    role: 'Swing Trader',
    image: '/images/testimonial-3.svg',
    content: 'A calculadora de gestão de risco e as análises de mercado da CV Traders me ajudaram a otimizar meu portfólio e aumentar significativamente meus lucros.',
    result: '+28% de crescimento no portfólio'
  },
  {
    id: 4,
    name: 'Carla Santos',
    role: 'Investidora',
    image: '/images/testimonial-4.svg',
    content: 'Estou impressionada com a qualidade das análises e a precisão das previsões. A CV Traders oferece um valor incrível pelo investimento.',
    result: 'Dobrou o capital em 6 meses'
  },
  {
    id: 5,
    name: 'Paulo Rodrigues',
    role: 'Trader Profissional',
    image: '/images/testimonial-5.svg',
    content: 'Depois de anos no mercado, finalmente encontrei uma comunidade que realmente entende trading. As estratégias e ferramentas são de nível institucional.',
    result: 'Aumento de 65% na taxa de acerto'
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      transition: { duration: 0.3 }
    }),
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">O Que Nossos <span className="text-emerald-400">Traders</span> Dizem</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubra como a CV Traders está ajudando traders em Cabo Verde a alcançar resultados extraordinários.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={1}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-light mb-6">
                    {testimonials[currentIndex].content}
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                      <h3 className="text-xl font-light">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                    </div>
                    
                    <div className="mt-4 md:mt-0 bg-emerald-500 bg-opacity-20 px-4 py-2 rounded-full">
                      <p className="text-emerald-400 font-medium">{testimonials[currentIndex].result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handlePrev}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-emerald-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;