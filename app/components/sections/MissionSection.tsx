'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const MissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="mission" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2 p-10 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">Nossa <span className="text-emerald-400">Missão</span></h2>
                
                <p className="text-xl text-gray-300 mb-6">
                  Capacitar traders em Cabo Verde com ferramentas de classe mundial, educação e uma comunidade de suporte.
                </p>
                
                <p className="text-gray-400 mb-8">
                  A CV Traders foi fundada com a visão de democratizar o acesso a recursos de trading de alta qualidade para todos os cabo-verdianos. Acreditamos que com as ferramentas certas, educação adequada e uma comunidade de suporte, qualquer pessoa pode desenvolver as habilidades necessárias para ter sucesso nos mercados financeiros.
                </p>
                
                <p className="text-gray-400">
                  Nossa plataforma foi construída por traders para traders, com foco em simplicidade, eficiência e resultados. Estamos comprometidos em continuar inovando e expandindo nossos serviços para atender às necessidades em evolução da comunidade de trading em Cabo Verde.
                </p>
              </div>
              
              <div className="flex items-center justify-center p-10 lg:p-16">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur opacity-30"></div>
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-500/30">
                    <Image
                      src="/images/trader-photo.jpg"
                      alt="Trader Profissional CV Traders"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-all duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 rounded-full p-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 bg-gradient-to-br from-emerald-900 to-gray-900 p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="text-2xl font-light mb-8">Por que construímos o CV Traders Hub?</h3>
                
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-emerald-500 rounded-full p-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-1">Acesso Limitado</h4>
                      <p className="text-gray-400">Identificamos uma lacuna significativa no acesso a ferramentas de trading de qualidade em Cabo Verde.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-emerald-500 rounded-full p-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-1">Educação Financeira</h4>
                      <p className="text-gray-400">Queremos promover a educação financeira e desenvolver uma nova geração de traders bem informados.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="mr-4 mt-1">
                      <div className="bg-emerald-500 rounded-full p-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-light text-white mb-1">Comunidade Local</h4>
                      <p className="text-gray-400">Acreditamos no poder de uma comunidade local forte que compartilha conhecimento e cresce junta.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;