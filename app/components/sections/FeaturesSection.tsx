'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const FeaturesSection = () => {
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

  // Animação para o brilho
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const features = [
    {
      title: 'Análise Técnica Avançada',
      description: 'Ferramentas de análise técnica de última geração com indicadores personalizáveis, alertas em tempo real e algoritmos preditivos baseados em IA.',
      icon: 'chart-line',
      image: '/images/analysis-icon.svg',
      badge: 'Premium',
      color: 'emerald'
    },
    {
      title: 'Gestão de Risco Inteligente',
      description: 'Calculadoras avançadas de gestão de risco que otimizam seu tamanho de posição, protegem seu capital e sugerem estratégias baseadas em seu histórico de trades.',
      icon: 'shield-check',
      image: '/images/risk-icon.svg',
      badge: 'Exclusivo',
      color: 'teal'
    },
    {
      title: 'Comunidade Local',
      description: 'Conecte-se com traders de Cabo Verde em uma comunidade exclusiva, compartilhando experiências, estratégias e conhecimentos locais do mercado.',
      icon: 'users',
      image: '/images/community-icon.svg',
      badge: 'CV',
      color: 'cyan'
    },
    {
      title: 'Mindset',
      description: 'Desenvolva a mentalidade correta para o trading com técnicas de psicologia aplicada, controle emocional e disciplina para decisões consistentes.',
      icon: 'graduation-cap',
      image: '/images/education-icon.svg',
      badge: 'Mental',
      color: 'blue'
    },
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'chart-line':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        );
      case 'shield-check':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'graduation-cap':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        );
      case 'signal':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        );
      case 'clock-rewind':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 4v4h-4" />
          </svg>
        );
      case 'link':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
      case 'document':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getBadgeColor = (color: string) => {
    const colors: {[key: string]: string} = {
      emerald: 'bg-emerald-500/20 text-emerald-400',
      teal: 'bg-teal-500/20 text-teal-400',
      cyan: 'bg-cyan-500/20 text-cyan-400',
      blue: 'bg-blue-500/20 text-blue-400',
      indigo: 'bg-indigo-500/20 text-indigo-400',
      violet: 'bg-violet-500/20 text-violet-400',
      purple: 'bg-purple-500/20 text-purple-400',
      rose: 'bg-rose-500/20 text-rose-400',
    };
    return colors[color] || colors.emerald;
  };

  const getGradient = (color: string) => {
    const gradients: {[key: string]: string} = {
      emerald: 'from-emerald-500 to-teal-600',
      teal: 'from-teal-500 to-cyan-600',
      cyan: 'from-cyan-500 to-blue-600',
      blue: 'from-blue-500 to-indigo-600',
      indigo: 'from-indigo-500 to-violet-600',
      violet: 'from-violet-500 to-purple-600',
      purple: 'from-purple-500 to-fuchsia-600',
      rose: 'from-rose-500 to-pink-600',
    };
    return gradients[color] || gradients.emerald;
  };

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
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
          <span className="inline-block bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 px-4 py-1 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
            Recursos de Classe Mundial
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Recursos <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Exclusivos</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ferramentas e recursos de nível institucional projetados para elevar seu trading ao próximo nível.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${getGradient(feature.color)}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className={`bg-gradient-to-br ${getGradient(feature.color)} rounded-lg p-3 inline-flex`}>
                    <div className="text-white">
                      {feature.image ? (
                        <img src={feature.image} alt={feature.title} className="w-6 h-6" />
                      ) : (
                        renderIcon(feature.icon)
                      )}
                    </div>
                  </div>
                  
                  {feature.badge && (
                    <span className={`inline-block ${getBadgeColor(feature.color)} px-2 py-1 rounded-md text-xs font-medium`}>
                      {feature.badge}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                
                <Link href="/#get-started" className="inline-flex items-center text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 space-y-8"
        >
          {/* Seção de YouTube */}
          <motion.div 
            variants={fadeIn}
            className="bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-xl p-8 backdrop-blur-sm border border-red-500/20 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <h3 className="text-2xl font-light text-white">Canal do <span className="text-red-400">YouTube</span></h3>
                </div>
                <p className="text-gray-400 max-w-2xl">
                  Inscreva-se no nosso canal do YouTube para acessar tutoriais, análises de mercado, estratégias de trading e dicas exclusivas para maximizar seus resultados na Deriv.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="https://www.youtube.com/@JamesRTRTrading" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Acessar Canal</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Seção de Comunidade Telegram */}
          <motion.div 
            variants={fadeIn}
            className="bg-gradient-to-r from-blue-500/10 to-blue-700/10 rounded-xl p-8 backdrop-blur-sm border border-blue-500/20 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <h3 className="text-2xl font-light text-white">Comunidade de <span className="text-blue-400">Traders</span></h3>
                </div>
                <p className="text-gray-400 max-w-2xl">
                  Junte-se à nossa comunidade exclusiva no Telegram e conecte-se com traders experientes. Compartilhe estratégias, receba materiais exclusivos e aprenda com quem já lucra com o mercado.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="https://t.me/+uWc9q5fvxHQwZmFk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Entrar no Grupo</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Botão de Afiliado */}
          <motion.div 
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const
              }
            }}
            className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-8 backdrop-blur-sm border border-emerald-500/20 max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-light mb-4">Pronto para começar a <span className="text-emerald-400">lucrar</span>?</h3>
            <p className="text-gray-400 mb-6">Crie sua conta na Deriv agora e comece a aplicar estratégias e dicas lucrativas.</p>
            <a
              href="https://tinyurl.com/JamesRTR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-10 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 text-lg font-medium"
            >
              Criar Conta na Deriv
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;