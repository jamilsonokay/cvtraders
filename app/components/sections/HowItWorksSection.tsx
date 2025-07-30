'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const HowItWorksSection = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  const steps = [
    {
      title: 'Registre-se como Trader',
      description: 'Crie sua conta na Deriv e complete seu perfil de trader para acessar todas as ferramentas e recursos exclusivos da plataforma.',
      icon: '/images/register-icon.svg',
      image: '/images/register-image.svg',
      iconComponent: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Conecte-se com a Comunidade',
      description: 'Junte-se a uma comunidade vibrante de traders em Cabo Verde, compartilhe ideias, estratégias e aprenda com traders experientes.',
      icon: '/images/community-icon.svg',
      image: '/images/community-image.svg',
      iconComponent: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Cresça seu Portfólio',
      description: 'Utilize ferramentas avançadas de análise, gestão de risco e educação para desenvolver estratégias lucrativas e expandir seu portfólio.',
      icon: '/images/growth-icon.svg',
      image: '/images/growth-image.svg',
      iconComponent: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
            Processo Simplificado
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Como <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Funciona</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Três passos simples para transformar sua jornada de trading e alcançar resultados consistentes.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <div className="w-full h-full bg-gray-800 relative">
                  {/* Imagem de fundo real */}
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Gradiente de sobreposição */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-blue-900/40 to-indigo-900/40' : index === 1 ? 'from-indigo-900/40 to-purple-900/40' : 'from-purple-900/40 to-blue-900/40'} mix-blend-overlay`}
                  ></div>
                  
                  {/* Padrão de grade para textura adicional */}
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-blue-500 rounded-full p-3 z-20">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {step.iconComponent}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-light mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <a 
              href="https://tinyurl.com/JamesRTR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Comece Agora
            </a>
          </div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Crie sua conta gratuita na Deriv com 10.000 USD na conta demo e comece sua jornada de trading hoje mesmo. Receba suporte exclusivo da nossa equipe em Cabo Verde.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;