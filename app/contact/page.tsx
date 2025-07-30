'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.'
        });
        
        // Resetar o formulário
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        setFormStatus({
          submitted: true,
          success: false,
          message: errorData.error || 'Erro ao enviar mensagem. Tente novamente.'
        });
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Erro de conexão. Verifique sua internet e tente novamente.'
      });
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-light tracking-tight mb-8">Entre em Contato</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300">
                Estamos aqui para responder a todas as suas perguntas sobre a CV Traders. Preencha o formulário e nossa equipe entrará em contato o mais breve possível.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43a5.105 5.105 0 00-1.852 1.207 5.105 5.105 0 00-1.207 1.852C1.734 4.989 1.612 5.563 1.578 6.51.013 7.458 0 7.865 0 11.486s.013 4.028.048 4.976c.034.947.156 1.521.382 2.021a5.105 5.105 0 001.207 1.852 5.105 5.105 0 001.852 1.207c.5.226 1.074.348 2.021.382.948.035 1.355.048 4.976.048s4.028-.013 4.976-.048c.947-.034 1.521-.156 2.021-.382a5.105 5.105 0 001.852-1.207 5.105 5.105 0 001.207-1.852c.226-.5.348-1.074.382-2.021.035-.948.048-1.355.048-4.976s-.013-4.028-.048-4.976c-.034-.947-.156-1.521-.382-2.021a5.105 5.105 0 00-1.207-1.852A5.105 5.105 0 0019.462.43C18.962.204 18.388.082 17.441.048 16.493.013 16.086 0 12.465 0h-.448zm-.465 2.168c3.58 0 4.006.014 5.42.048.908.034 1.4.156 1.728.26.434.168.744.37 1.07.696.326.326.528.636.696 1.07.104.328.226.82.26 1.728.034 1.414.048 1.84.048 5.42s-.014 4.006-.048 5.42c-.034.908-.156 1.4-.26 1.728-.168.434-.37.744-.696 1.07-.326.326-.636.528-1.07.696-.328.104-.82.226-1.728.26-1.414.034-1.84.048-5.42.048s-4.006-.014-5.42-.048c-.908-.034-1.4-.156-1.728-.26-.434-.168-.744-.37-1.07-.696-.326-.326-.528-.636-.696-1.07-.104-.328-.226-.82-.26-1.728-.034-1.414-.048-1.84-.048-5.42s.014-4.006.048-5.42c.034-.908.156-1.4.26-1.728.168-.434.37-.744.696-1.07.326-.326.636-.528 1.07-.696.328-.104.82-.226 1.728-.26 1.414-.034 1.84-.048 5.42-.048zm0 3.68a5.32 5.32 0 100 10.64 5.32 5.32 0 000-10.64zm0 8.772a3.452 3.452 0 110-6.904 3.452 3.452 0 010 6.904zm6.776-8.99a1.243 1.243 0 11-2.486 0 1.243 1.243 0 012.486 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-light">Instagram</h3>
                    <a href="https://www.instagram.com/jamesrtr_trading" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">@jamesrtr_trading</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-light">Endereço</h3>
                    <p className="text-gray-400">Praia, Cabo Verde</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-lg">
              {formStatus.submitted && formStatus.success ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-emerald-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-light mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-300">{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-300 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-light text-gray-300 mb-1">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="support">Suporte Técnico</option>
                      <option value="partnership">Parcerias</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-light text-gray-300 mb-1">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}