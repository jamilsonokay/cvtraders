'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '0px 0px -100px 0px',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animação para os elementos flutuantes
  const floatingAnimation = {
    y: ['-10px', '10px'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  // Animação para o brilho
  const glowAnimation = {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 relative overflow-hidden">
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-[30%] -left-[30%] w-[100%] h-[100%] rounded-full border border-emerald-500/10"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 70,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-[50%] -right-[30%] w-[120%] h-[120%] rounded-full border border-teal-500/10"
        />
      </div>

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { x: 15, y: 20, w: 2, h: 3, color: 400, duration: 25 },
          { x: 85, y: 10, w: 3, h: 2, color: 300, duration: 30 },
          { x: 60, y: 80, w: 2, h: 4, color: 500, duration: 22 },
          { x: 25, y: 60, w: 4, h: 3, color: 300, duration: 28 },
          { x: 75, y: 40, w: 2, h: 2, color: 400, duration: 26 },
          { x: 40, y: 90, w: 3, h: 3, color: 500, duration: 24 }
        ].map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3, x: `${particle.x}%`, y: `${particle.y}%` }}
            animate={{
              x: [`${particle.x}%`, `${(particle.x + 20) % 100}%`, `${particle.x}%`],
              y: [`${particle.y}%`, `${(particle.y + 15) % 100}%`, `${particle.y}%`],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              x: { duration: particle.duration, repeat: Infinity, repeatType: 'reverse' },
              y: { duration: particle.duration + 2, repeat: Infinity, repeatType: 'reverse' },
              opacity: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
            }}
            className={`absolute w-${particle.w} h-${particle.h} rounded-full bg-emerald-${particle.color}/20`}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-block bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
              HUB #1 de Trading em Cabo Verde
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
            Eleve seu <motion.span 
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
                transition: {
                  opacity: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
              }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 inline-block"
            >
              Trading
            </motion.span> ao Próximo Nível
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            A primeira comunidade de traders em Cabo Verde, com ferramentas avançadas, educação de qualidade e suporte personalizado.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="https://tinyurl.com/JamesRTR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-8 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Começar Agora
            </Link>
            <Link
              href="/#features"
              className="inline-block bg-gray-800/80 backdrop-blur-sm text-white py-4 px-8 rounded-lg border border-gray-700 hover:bg-gray-700/80 transition-all duration-300 transform hover:-translate-y-1 text-lg"
            >
              Explorar Recursos
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative">
            <motion.div 
              animate={{
                y: ['-10px', '10px'],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse" as const,
                  ease: "easeInOut"
                }
              }}
              className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg opacity-30 blur-xl"
            />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg opacity-30 blur-xl"></div>
            <div className="relative z-0 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800">
              <img
                src="/images/mockup.svg"
                alt="CV Traders Platform"
                className="w-full h-auto"
              />
              
              {/* Overlay com efeito de brilho */}
              <motion.div 
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  opacity: { duration: 3, repeat: Infinity, repeatType: 'reverse' },
                  backgroundPosition: { duration: 10, repeat: Infinity, repeatType: 'reverse' },
                }}
                className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent"
              />
            </div>
            
            {/* Badges flutuantes */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-6 top-1/4 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-lg p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-white">Análise em Tempo Real</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -right-6 top-1/3 bg-gray-900/90 backdrop-blur-sm border border-gray-800 rounded-lg p-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-sm text-white">Segurança Avançada</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: '20+', label: 'Traders Ativos' },
            { value: '95%', label: 'Satisfação' },
            { value: '24/7', label: 'Suporte' },
            { value: '50+', label: 'Ferramentas' },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-light text-emerald-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;