'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RiskDisclaimer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-t border-red-800/30">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start space-x-4 mb-6">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-3">
                ⚠️ Aviso de Risco
              </h3>
              <div className="text-gray-300 space-y-3 text-sm leading-relaxed">
                <p>
                  O trading envolve riscos significativos e pode não ser adequado para todos os investidores. 
                  <strong className="text-red-300"> Você pode perder todo o capital investido.</strong> 
                  As informações fornecidas não constituem aconselhamento financeiro.
                </p>
                <p>
                  Leia atentamente os Termos e Condições e o Aviso de Risco da Deriv antes de utilizar nossos serviços. 
                  <strong className="text-red-300">Não garantimos lucros.</strong> 
                  O desempenho passado não é indicativo de resultados futuros.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-lg p-4 border border-red-800/30">
            <h4 className="text-sm font-medium text-red-300 mb-3">🔗 Links Importantes:</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://deriv.com/terms-and-conditions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Termos e Condições da Deriv
              </a>
              <a 
                href="https://docs.deriv.com/tnc/risk-disclosure.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Aviso de Risco da Deriv (PDF)
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default RiskDisclaimer;