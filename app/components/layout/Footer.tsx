'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-light tracking-tighter">CV<span className="text-emerald-400">Traders</span></span>
            </Link>
            <p className="text-gray-400 mb-6">
              Elevando o trading em Cabo Verde com ferramentas de classe mundial, educação e uma comunidade vibrante.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@JamesRTRTrading" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://t.me/+uWc9q5fvxHQwZmFk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/jamesrtr_trading" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43a5.105 5.105 0 00-1.852 1.207 5.105 5.105 0 00-1.207 1.852C1.734 4.989 1.612 5.563 1.578 6.51.013 7.458 0 7.865 0 11.486s.013 4.028.048 4.976c.034.947.156 1.521.382 2.021a5.105 5.105 0 001.207 1.852 5.105 5.105 0 001.852 1.207c.5.226 1.074.348 2.021.382.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.021-.382a5.105 5.105 0 001.852-1.207 5.105 5.105 0 001.207-1.852c.226-.5.348-1.074.382-2.021.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.382-2.021a5.105 5.105 0 00-1.207-1.852A5.105 5.105 0 0019.462.43C18.962.204 18.388.082 17.441.048 16.493.013 16.086 0 12.465 0h-.448zm-.465 2.168c3.58 0 4.006.014 5.42.048.908.034 1.4.156 1.728.26.434.168.744.37 1.07.696.326.326.528.636.696 1.07.104.328.226.82.26 1.728.034 1.414.048 1.84.048 5.42s-.014 4.006-.048 5.42c-.034.908-.156 1.4-.26 1.728-.168.434-.37.744-.696 1.07-.326.326-.636.528-1.07.696-.328.104-.82.226-1.728.26-1.414.034-1.84.048-5.42.048s-4.006-.014-5.42-.048c-.908-.034-1.4-.156-1.728-.26-.434-.168-.744-.37-1.07-.696-.326-.326-.528-.636-.696-1.07-.104-.328-.226-.82-.26-1.728-.034-1.414-.048-1.84-.048-5.42s.014-4.006.048-5.42c.034-.908.156-1.4.26-1.728.168-.434.37-.744.696-1.07.326-.326.636-.528 1.07-.696.328-.104.82-.226 1.728-.26 1.414-.034 1.84-.048 5.42-.048zm0 3.68a5.32 5.32 0 100 10.64 5.32 5.32 0 000-10.64zm0 8.772a3.452 3.452 0 110-6.904 3.452 3.452 0 010 6.904zm6.776-8.99a1.243 1.243 0 11-2.486 0 1.243 1.243 0 012.486 0z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Início</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contato</Link>
              </li>
              <li>
                <Link href="/#mission" className="text-gray-400 hover:text-emerald-400 transition-colors">Missão</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-emerald-400 transition-colors">Recursos</Link>
              </li>
              <li>
                <Link href="/#calculator" className="text-gray-400 hover:text-emerald-400 transition-colors">Calculadora</Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-400 hover:text-emerald-400 transition-colors">Depoimentos</Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-emerald-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-400 hover:text-emerald-400 transition-colors">Como Funciona</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-light mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Praia, Cabo Verde</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-emerald-400 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43a5.105 5.105 0 00-1.852 1.207 5.105 5.105 0 00-1.207 1.852C1.734 4.989 1.612 5.563 1.578 6.51.013 7.458 0 7.865 0 11.486s.013 4.028.048 4.976c.034.947.156 1.521.382 2.021a5.105 5.105 0 001.207 1.852 5.105 5.105 0 001.852 1.207c.5.226 1.074.348 2.021.382.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.021-.382a5.105 5.105 0 001.852-1.207 5.105 5.105 0 001.207-1.852c.226-.5.348-1.074.382-2.021.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.382-2.021a5.105 5.105 0 00-1.207-1.852A5.105 5.105 0 0019.462.43C18.962.204 18.388.082 17.441.048 16.493.013 16.086 0 12.465 0h-.448zm-.465 2.168c3.58 0 4.006.014 5.42.048.908.034 1.4.156 1.728.26.434.168.744.37 1.07.696.326.326.528.636.696 1.07.104.328.226.82.26 1.728.034 1.414.048 1.84.048 5.42s-.014 4.006-.048 5.42c-.034.908-.156 1.4-.26 1.728-.168.434-.37.744-.696 1.07-.326.326-.636.528-1.07.696-.328.104-.82.226-1.728.26-1.414.034-1.84.048-5.42.048s-4.006-.014-5.42-.048c-.908-.034-1.4-.156-1.728-.26-.434-.168-.744-.37-1.07-.696-.326-.326-.528-.636-.696-1.07-.104-.328-.226-.82-.26-1.728-.034-1.414-.048-1.84-.048-5.42s.014-4.006.048-5.42c.034-.908.156-1.4.26-1.728.168-.434.37-.744.696-1.07.326-.326.636-.528 1.07-.696.328-.104.82-.226 1.728-.26 1.414-.034 1.84-.048 5.42-.048zm0 3.68a5.32 5.32 0 100 10.64 5.32 5.32 0 000-10.64zm0 8.772a3.452 3.452 0 110-6.904 3.452 3.452 0 010 6.904zm6.776-8.99a1.243 1.243 0 11-2.486 0 1.243 1.243 0 012.486 0z"/>
                </svg>
                <a href="https://www.instagram.com/jamesrtr_trading" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">@jamesrtr_trading</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CV Traders. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Termos de Serviço
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;