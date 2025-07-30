'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Estratégias Avançadas de Trading para Mercados Voláteis',
    excerpt: 'Descubra como adaptar suas estratégias de trading para prosperar em mercados com alta volatilidade e maximizar seus lucros.',
    date: '15 de Julho, 2023',
    author: 'João Silva',
    category: 'Estratégias',
    readTime: '8 min',
    slug: 'estrategias-avancadas-trading-mercados-volateis',
    image: '/images/blog-1.jpg'
  },
  {
    id: 2,
    title: 'Análise Técnica vs. Análise Fundamental: Qual é a Melhor Abordagem?',
    excerpt: 'Uma comparação detalhada entre análise técnica e fundamental, ajudando você a decidir qual método se adapta melhor ao seu estilo de trading.',
    date: '28 de Junho, 2023',
    author: 'Maria Santos',
    category: 'Análise',
    readTime: '10 min',
    slug: 'analise-tecnica-vs-analise-fundamental',
    image: '/images/blog-2.jpg'
  },
  {
    id: 3,
    title: 'Gestão de Risco: O Pilar Fundamental para o Sucesso no Trading',
    excerpt: 'Aprenda como implementar uma gestão de risco eficaz em suas operações e proteger seu capital contra perdas significativas.',
    date: '10 de Junho, 2023',
    author: 'Carlos Mendes',
    category: 'Gestão de Risco',
    readTime: '7 min',
    slug: 'gestao-risco-pilar-fundamental-sucesso-trading',
    image: '/images/blog-3.jpg'
  },
  {
    id: 4,
    title: 'Psicologia do Trading: Dominando suas Emoções nos Mercados',
    excerpt: 'Explore como a psicologia afeta suas decisões de trading e descubra técnicas para manter o controle emocional durante as operações.',
    date: '2 de Junho, 2023',
    author: 'Ana Ferreira',
    category: 'Psicologia',
    readTime: '9 min',
    slug: 'psicologia-trading-dominando-emocoes-mercados',
    image: '/images/blog-4.jpg'
  }
];

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <motion.section
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl font-light tracking-tight mb-4">Blog</h1>
          <p className="text-xl text-gray-400 mb-12">Insights, estratégias e conhecimento para elevar seu trading ao próximo nível</p>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                variants={fadeIn}
                className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-xs text-white px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} de leitura</span>
                  </div>
                  
                  <h2 className="text-2xl font-light tracking-tight mb-3">
                    <Link href={`/blog/${post.slug}`} className="hover:text-emerald-400 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                      <span className="text-sm">{post.author.charAt(0)}</span>
                    </div>
                    <span className="text-sm text-gray-300">{post.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}