'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const StrategiesSection = () => {
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

  // Animação para o brilho
  const pulseAnimation = {
    scale: [1, 1.02, 1],
    boxShadow: ['0 0 0 rgba(16, 185, 129, 0.1)', '0 0 20px rgba(16, 185, 129, 0.3)', '0 0 0 rgba(16, 185, 129, 0.1)'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const strategies = [
    {
      name: 'Blue Shark',
      type: 'Robô para Opções Binárias',
      description: 'Estratégia automatizada para operações de Over/Under em opções binárias, com alta taxa de acerto e gestão de risco otimizada.',
      features: [
        'Análise técnica avançada para identificar tendências',
        'Operações automatizadas em Over/Under',
        'Gestão de risco integrada',
        'Configuração personalizada de timeframes',
        'Compatível com a plataforma Deriv',
      ],
      results: [
        'Taxa média de acerto: 80%+',
        'Retorno mensal estimado: 50-65%',
        'Drawdown máximo controlado: 12%',
      ],
      icon: 'shark',
      color: 'blue'
    },
    {
      name: 'Golden Eagle',
      type: 'Estratégia Manual',
      description: 'Estratégia de análise gráfica para identificar pontos de entrada precisos em tendências de mercado, ideal para traders intermediários.',
      features: [
        'Identificação de padrões gráficos específicos',
        'Confirmação por indicadores técnicos',
        'Entradas em pontos de reversão',
        'Gestão de posição otimizada',
        'Aplicável em múltiplos timeframes',
      ],
      results: [
        'Taxa média de acerto: 62-70%',
        'Retorno mensal estimado: 25-35%',
        'Relação risco/retorno: 1:2',
      ],
      icon: 'eagle',
      color: 'amber'
    },
    {
      name: 'Diamond Hand',
      type: 'Sistema de Trading',
      description: 'Sistema completo de trading que combina análise técnica e fundamentalista para operações de médio prazo com alta probabilidade de sucesso.',
      features: [
        'Análise combinada técnica e fundamentalista',
        'Filtros de volatilidade de mercado',
        'Gestão de capital adaptativa',
        'Alertas de entrada e saída',
        'Suporte educacional completo',
      ],
      results: [
        'Taxa média de acerto: 58-65%',
        'Retorno mensal estimado: 20-30%',
        'Operações mensais: 15-20',
      ],
      icon: 'diamond',
      color: 'teal'
    },
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'shark':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'eagle':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'diamond':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getGradient = (color: string) => {
    const gradients: {[key: string]: string} = {
      blue: 'from-blue-500 to-indigo-600',
      amber: 'from-amber-500 to-orange-600',
      teal: 'from-teal-500 to-emerald-600',
    };
    return gradients[color] || gradients.blue;
  };

  const getBorderColor = (color: string) => {
    const colors: {[key: string]: string} = {
      blue: 'border-blue-500/30',
      amber: 'border-amber-500/30',
      teal: 'border-teal-500/30',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="strategies" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="strategies-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#strategies-grid)" />
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
          <span className="inline-block bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
            Estratégias Exclusivas
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Estratégias</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Estratégias testadas e aprovadas para maximizar seus resultados na plataforma <span className="text-blue-400 font-medium">Deriv</span>.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              animate={index === 0 ? {
                scale: [1, 1.02, 1],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              } : undefined}
              className={`relative bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border ${getBorderColor(strategy.color)} hover:shadow-xl hover:shadow-${strategy.color}-500/10 transition-all duration-300`}
            >
              {/* Barra superior colorida */}
              <div className={`h-2 bg-gradient-to-r ${getGradient(strategy.color)}`}></div>
              
              {index === 0 && (
                <div className="absolute top-0 right-0">
                  <div className={`bg-gradient-to-r ${getGradient(strategy.color)} text-xs uppercase py-1 px-4 rounded-bl-lg font-medium tracking-wider text-white`}>
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-medium mb-1">{strategy.name}</h3>
                    <div className="text-sm text-gray-400">{strategy.type}</div>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${getGradient(strategy.color)} rounded-lg p-3 inline-flex`}>
                    <div className="text-white">
                      {renderIcon(strategy.icon)}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 min-h-[60px]">{strategy.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm uppercase text-gray-500 tracking-wider mb-3">Características:</div>
                  <ul className="space-y-3 mb-6">
                    {strategy.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-sm uppercase text-gray-500 tracking-wider mb-3">Resultados Esperados:</div>
                  <ul className="space-y-3 mb-6">
                    {strategy.results.map((result, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href="https://tinyurl.com/JamesRTR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center bg-gradient-to-r ${getGradient(strategy.color)} text-white hover:shadow-lg hover:shadow-${strategy.color}-500/30`}
                >
                  Começar Agora
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 backdrop-blur-sm border border-gray-800 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-light mb-2">Junte-se à nossa <span className="text-blue-400">comunidade</span> de traders</h3>
                <p className="text-gray-400">Compartilhe experiências, aprenda com traders experientes e receba alertas de operações em tempo real.</p>
              </div>
              <Link
                href="https://t.me/+uWc9q5fvxHQwZmFk"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Entrar no Telegram
              </Link>
            </div>
          </div>
          
          <div className="mt-8 space-y-3">
            <p className="text-gray-400">
              Todas as estratégias são testadas e otimizadas para uso na plataforma Deriv.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategiesSection;