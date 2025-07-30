'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
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

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'O que é o CV Traders Hub?',
      answer: 'O CV Traders Hub é um ponto de encontro para traders de Cabo Verde, onde você encontra guias, conteúdos educacionais, estratégias e tudo o que precisa para começar no trading, mesmo sendo um completo iniciante. Não somos uma plataforma central de trading, mas sim um hub educativo e de recursos para a comunidade de traders cabo-verdianos.'
    },
    {
      question: 'Preciso ter experiência prévia para usar a plataforma?',
      answer: 'Não, a plataforma foi projetada para atender traders de todos os níveis de experiência. Para iniciantes, oferecemos recursos abrangentes e ferramentas intuitivas. Traders mais experientes encontrarão ferramentas avançadas de análise e gestão de risco para otimizar suas estratégias.'
    },
    {
      question: 'Como funciona a calculadora de trading?',
      answer: 'Nossa calculadora de trading permite que você insira o valor do seu capital (banca) e defina parâmetros como porcentagem de risco e ratio de risco/recompensa. Com base nesses dados, a calculadora gera automaticamente sua meta diária, valores de stop loss e take profit, ajudando você a manter uma gestão de risco disciplinada.'
    },
    {
      question: 'Posso acessar a plataforma em dispositivos móveis?',
      answer: 'Sim, o CV Traders Hub é totalmente responsivo e pode ser acessado em qualquer dispositivo.'
    },
    {
      question: 'Vocês oferecem suporte em português?',
      answer: 'Sim, oferecemos suporte completo em português e inglês. Nossa equipe de suporte está disponível para ajudar com quaisquer dúvidas ou problemas que você possa encontrar ao usar nossa plataforma.'
    },
  ];

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Perguntas <span className="text-emerald-400">Frequentes</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre o CV Traders Hub.
          </p>
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`mb-4 border-b border-gray-800 pb-4 ${index === faqs.length - 1 ? 'border-b-0' : ''}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <h3 className="text-xl font-light">{faq.question}</h3>
                <div className={`ml-4 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div 
                className={`mt-2 text-gray-400 overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="pb-4">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Ainda tem dúvidas?{' '}
            <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">Entre em contato com nossa equipe</Link>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;