'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CalculatorSection = () => {
  // Estados para os inputs da calculadora
  const [capital, setCapital] = useState<number>(1000);
  const [perfilRisco, setPerfilRisco] = useState<string>('moderado');
  const [usarMartingale, setUsarMartingale] = useState<boolean>(false);

  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Definições de risco baseadas no perfil conforme especificação
  const perfisRisco = {
    conservador: {
      stakePorOperacao: 1, // 1% da banca
      metaDiaria: 2, // 2% da banca
      stopDiario: 3, // 3% da banca
      fatorMartingale: 2.0,
      maxOperacoesDiarias: 10,
      taxaAcerto: 0.87 // 87% de acerto - Robô de alta performance
    },
    moderado: {
      stakePorOperacao: 2, // 2% da banca
      metaDiaria: 4, // 4% da banca
      stopDiario: 6, // 6% da banca
      fatorMartingale: 2.2,
      maxOperacoesDiarias: 8,
      taxaAcerto: 0.80 // 80% de acerto - Robô de alta performance
    },
    agressivo: {
      stakePorOperacao: 3, // 3% da banca
      metaDiaria: 6, // 6% da banca
      stopDiario: 9, // 9% da banca
      fatorMartingale: 2.3,
      maxOperacoesDiarias: 6,
      taxaAcerto: 0.83 // 83% de acerto - Robô de alta performance
    },
  };

  // Obter configurações baseadas no perfil selecionado
  const perfilAtual = perfisRisco[perfilRisco as keyof typeof perfisRisco];
  
  // Cálculos da calculadora conforme especificação
  const stakeRecomendada = capital * (perfilAtual.stakePorOperacao / 100);
  const metaDiariaUSD = capital * (perfilAtual.metaDiaria / 100);
  const stopDiarioUSD = capital * (perfilAtual.stopDiario / 100);
  
  // Novos cálculos
  const numeroMaxOperacoes = Math.min(
    Math.floor(stopDiarioUSD / stakeRecomendada),
    perfilAtual.maxOperacoesDiarias
  );
  const riscoAcumulado = (numeroMaxOperacoes * stakeRecomendada / capital) * 100;
  const lucroEsperado = (metaDiariaUSD / capital) * 100;
  const payoutMedio = 0.85; // 85% de payout médio
  const lucroEsperadoDiario = (numeroMaxOperacoes * stakeRecomendada * payoutMedio * perfilAtual.taxaAcerto) - 
                             (numeroMaxOperacoes * stakeRecomendada * (1 - perfilAtual.taxaAcerto));
  
  // Cálculo de martingale para até 5 perdas consecutivas (se ativado)
  const stakesMartingale = [];
  if (usarMartingale) {
    let stakeAtual = stakeRecomendada;
    for (let i = 0; i < 5; i++) {
      stakesMartingale.push(Math.round(stakeAtual * 100) / 100);
      stakeAtual = stakeAtual * perfilAtual.fatorMartingale;
    }
  }
  
  // Simulação de evolução da banca com reinvestimento composto (30 dias úteis)
  interface EvolucaoBancaItem {
    dia: number;
    banca: number;
    lucroPerda: number;
    metaAtingida: boolean;
    stopAtingido: boolean;
    bancaInicial: number;
    stakeUsada: number;
    crescimentoPercentual: number;
  }

  const evolucaoBanca: EvolucaoBancaItem[] = [];
  let bancaAtual = capital;
  const taxaAcerto = perfilAtual.taxaAcerto; // Usando taxa de acerto do perfil selecionado
  
  for (let dia = 1; dia <= 30; dia++) {
    const bancaInicial = bancaAtual;
    let metaAtingida = false;
    let stopAtingido = false;
    
    // Calcular stake baseado na banca atual (reinvestimento composto)
    const stakeUsada = bancaAtual * (perfilAtual.stakePorOperacao / 100);
    const metaDiaria = bancaAtual * (perfilAtual.metaDiaria / 100);
    const stopDiario = bancaAtual * (perfilAtual.stopDiario / 100);
    
    // Simular resultado do dia baseado na taxa de acerto do robô (determinístico)
    // Usando uma função hash simples baseada no índice do dia para consistência
    const seed = (dia * 9301 + 49297) % 233280;
    const randomValue = seed / 233280;
    const sucesso = randomValue < taxaAcerto;
    let lucroPerda = 0;
    
    if (sucesso) {
      // Dia lucrativo - atingiu a meta
      lucroPerda = metaDiaria;
      metaAtingida = true;
    } else {
      // Dia de perda - atingiu o stop
      lucroPerda = -stopDiario;
      stopAtingido = true;
    }
    
    // Atualizar banca com reinvestimento composto
    const bancaAnterior = bancaAtual;
    bancaAtual = Math.max(0, bancaAtual + lucroPerda);
    const crescimentoPercentual = ((bancaAtual - bancaAnterior) / bancaAnterior) * 100;
    
    evolucaoBanca.push({
      dia,
      banca: Math.round(bancaAtual * 100) / 100,
      lucroPerda: Math.round(lucroPerda * 100) / 100,
      metaAtingida,
      stopAtingido,
      bancaInicial: Math.round(bancaInicial * 100) / 100,
      stakeUsada: Math.round(stakeUsada * 100) / 100,
      crescimentoPercentual: Math.round(crescimentoPercentual * 100) / 100
    });
  }

  const handleCapitalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setCapital(value);
    }
  };

  const handlePerfilChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerfilRisco(e.target.value);
  };
  
  const handleMartingaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsarMartingale(e.target.checked);
  };
  


  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-medium tracking-wider uppercase mb-4">
            Ferramenta Essencial
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">Calculadora de <span className="text-blue-400">Trading</span></h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Otimize sua gestão de risco e defina metas realistas com nossa calculadora simplificada.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-800">
                <h3 className="text-2xl font-light mb-6">Defina seus Parâmetros</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Capital Inicial ($)</label>
                    <input
                      type="number"
                      value={capital}
                      onChange={handleCapitalChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2">Perfil de Risco</label>
                    <select
                      value={perfilRisco}
                      onChange={handlePerfilChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="conservador">Conservador</option>
                      <option value="moderado">Moderado</option>
                      <option value="agressivo">Agressivo</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="martingale"
                      checked={usarMartingale}
                      onChange={handleMartingaleChange}
                      className="w-4 h-4 text-blue-500 border-gray-700 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="martingale" className="ml-2 text-gray-400">Usar Martingale</label>
                  </div>
                  

                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-light mb-6">Resultados</h3>
                
                <div className="space-y-6">
                  {/* KPIs Principais */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 rounded-lg p-4 border border-blue-700/30">
                      <div className="text-blue-300 text-sm mb-1">Stake Recomendada</div>
                      <div className="text-blue-400 text-2xl font-light">${stakeRecomendada.toFixed(2)}</div>
                      <div className="text-blue-300/70 text-xs mt-1">{(stakeRecomendada/capital*100).toFixed(2)}% da banca</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-lg p-4 border border-green-700/30">
                      <div className="text-green-300 text-sm mb-1">Meta Diária</div>
                      <div className="text-green-400 text-2xl font-light">${metaDiariaUSD.toFixed(2)}</div>
                      <div className="text-green-300/70 text-xs mt-1">{lucroEsperado.toFixed(1)}% da banca</div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 rounded-lg p-4 border border-red-700/30">
                      <div className="text-red-300 text-sm mb-1">Stop Diário</div>
                      <div className="text-red-400 text-2xl font-light">${stopDiarioUSD.toFixed(2)}</div>
                      <div className="text-red-300/70 text-xs mt-1">{(stopDiarioUSD/capital*100).toFixed(1)}% da banca</div>
                    </div>
                  </div>
                  
                  {/* KPIs Secundários */}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-gray-400 text-sm mb-1">Máx. Operações</div>
                      <div className="text-purple-400 text-xl font-light">{numeroMaxOperacoes}</div>
                      <div className="text-gray-500 text-xs mt-1">por dia</div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-gray-400 text-sm mb-1">Risco Acumulado</div>
                      <div className="text-orange-400 text-xl font-light">{riscoAcumulado.toFixed(1)}%</div>
                      <div className="text-gray-500 text-xs mt-1">da banca</div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-gray-400 text-sm mb-1">Lucro Esperado</div>
                      <div className={`text-xl font-light ${lucroEsperadoDiario >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        ${lucroEsperadoDiario.toFixed(2)}
                      </div>
                      <div className="text-gray-500 text-xs mt-1">por dia</div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="text-gray-400 text-sm mb-1">Taxa de Acerto</div>
                      <div className="text-cyan-400 text-xl font-light">{(perfilAtual.taxaAcerto * 100).toFixed(0)}%</div>
                      <div className="text-gray-500 text-xs mt-1">necessária</div>
                    </div>
                  </div>
                  
                  {/* Comparativo entre Perfis */}
                  <div>
                    <h4 className="text-lg font-light mb-3 text-gray-300">Comparativo entre Perfis de Risco</h4>
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(perfisRisco).map(([perfil, config]) => {
                          const stakeComparativo = Math.max(capital * config.stakePorOperacao, 0.35);
                          const metaComparativa = capital * config.metaDiaria;
                          const stopComparativo = capital * config.stopDiario;
                          const maxOpsComparativo = Math.min(
                            Math.floor(stopComparativo / stakeComparativo),
                            config.maxOperacoesDiarias
                          );
                          
                          return (
                            <div 
                              key={perfil} 
                              className={`p-3 rounded-lg border-2 transition-all ${
                                perfil === perfilRisco 
                                  ? 'border-blue-500 bg-blue-900/20' 
                                  : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
                              }`}
                            >
                              <div className="text-center">
                                <div className={`font-medium mb-2 capitalize ${
                                  perfil === perfilRisco ? 'text-blue-400' : 'text-gray-300'
                                }`}>
                                  {perfil}
                                </div>
                                <div className="space-y-1 text-xs">
                                  <div className="text-gray-400">Stake: <span className="text-white">${stakeComparativo.toFixed(2)}</span></div>
                                  <div className="text-gray-400">Meta: <span className="text-green-400">${metaComparativa.toFixed(2)}</span></div>
                                  <div className="text-gray-400">Stop: <span className="text-red-400">${stopComparativo.toFixed(2)}</span></div>
                                  <div className="text-gray-400">Máx Ops: <span className="text-purple-400">{maxOpsComparativo}</span></div>
                                  <div className="text-gray-400">Acerto: <span className="text-cyan-400">{(config.taxaAcerto * 100).toFixed(0)}%</span></div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {usarMartingale && stakesMartingale.length > 0 && (
                    <div>
                      <h4 className="text-lg font-light mb-3 text-gray-300">Estratégia Martingale</h4>
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="mb-4">
                          <div className="text-sm text-gray-400 mb-2">Progressão de Stakes (5 perdas consecutivas)</div>
                          <div className="grid grid-cols-5 gap-2">
                            {stakesMartingale.map((stake, index) => (
                              <div key={index} className="text-center bg-gray-700 rounded p-2">
                                <div className="text-xs text-gray-500 mb-1">Perda {index + 1}</div>
                                <div className={`text-sm font-medium ${
                                  index === 0 ? 'text-blue-400' : 
                                  index <= 2 ? 'text-yellow-400' : 'text-red-400'
                                }`}>
                                  ${stake.toFixed(2)}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-center text-xs">
                          <div>
                            <div className="text-gray-500">Total Investido</div>
                            <div className="text-red-400 font-medium">
                              ${stakesMartingale.reduce((acc, stake) => acc + stake, 0).toFixed(2)}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-500">Fator Martingale</div>
                            <div className="text-yellow-400 font-medium">{perfilAtual.fatorMartingale}x</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Recuperação</div>
                            <div className="text-green-400 font-medium">
                              ${(stakesMartingale[stakesMartingale.length - 1] * 0.85).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-lg font-light mb-3 text-gray-300">Simulação de Evolução da Banca (30 dias)</h4>
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      {/* Gráfico de linha melhorado */}
                      <div className="relative h-64 mb-6">
                        <svg className="w-full h-full" viewBox="0 0 900 250">
                          {/* Grid lines */}
                          <defs>
                            <pattern id="grid" width="30" height="25" patternUnits="userSpaceOnUse">
                              <path d="M 30 0 L 0 0 0 25" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.2"/>
                            </pattern>
                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05"/>
                            </linearGradient>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                          
                          {/* Área sob a curva */}
                          <path
                            fill="url(#areaGradient)"
                            d={`M 20,230 ${evolucaoBanca.map((ponto, index) => {
                              const x = (index / (evolucaoBanca.length - 1)) * 860 + 20;
                              const minBanca = Math.min(...evolucaoBanca.map(p => p.banca));
                              const maxBanca = Math.max(...evolucaoBanca.map(p => p.banca));
                              const range = maxBanca - minBanca || 1;
                              const y = 230 - ((ponto.banca - minBanca) / range) * 200;
                              return `L ${x},${y}`;
                            }).join(' ')} L 880,230 Z`}
                          />
                          
                          {/* Linha da evolução */}
                          <polyline
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points={evolucaoBanca.map((ponto, index) => {
                              const x = (index / (evolucaoBanca.length - 1)) * 860 + 20;
                              const minBanca = Math.min(...evolucaoBanca.map(p => p.banca));
                              const maxBanca = Math.max(...evolucaoBanca.map(p => p.banca));
                              const range = maxBanca - minBanca || 1;
                              const y = 230 - ((ponto.banca - minBanca) / range) * 200;
                              return `${x},${y}`;
                            }).join(' ')}
                          />
                          
                          {/* Pontos especiais */}
                          {evolucaoBanca.map((ponto, index) => {
                            const x = (index / (evolucaoBanca.length - 1)) * 860 + 20;
                            const minBanca = Math.min(...evolucaoBanca.map(p => p.banca));
                            const maxBanca = Math.max(...evolucaoBanca.map(p => p.banca));
                            const range = maxBanca - minBanca || 1;
                            const y = 230 - ((ponto.banca - minBanca) / range) * 200;
                            
                            if (ponto.metaAtingida || ponto.stopAtingido) {
                              return (
                                <g key={index}>
                                  <circle
                                    cx={x}
                                    cy={y}
                                    r="6"
                                    fill={ponto.metaAtingida ? '#10B981' : '#EF4444'}
                                    stroke="white"
                                    strokeWidth="2"
                                  />
                                  <circle
                                    cx={x}
                                    cy={y}
                                    r="10"
                                    fill="none"
                                    stroke={ponto.metaAtingida ? '#10B981' : '#EF4444'}
                                    strokeWidth="1"
                                    opacity="0.5"
                                  />
                                </g>
                              );
                            }
                            return null;
                          })}
                          
                          {/* Eixos */}
                          <line x1="20" y1="230" x2="880" y2="230" stroke="#6B7280" strokeWidth="1"/>
                          <line x1="20" y1="30" x2="20" y2="230" stroke="#6B7280" strokeWidth="1"/>
                          
                          {/* Labels dos eixos */}
                          <text x="450" y="245" textAnchor="middle" fill="#9CA3AF" fontSize="12">Dias</text>
                          <text x="10" y="130" textAnchor="middle" fill="#9CA3AF" fontSize="12" transform="rotate(-90 10 130)">Banca ($)</text>
                        </svg>
                        
                        {/* Legenda */}
                        <div className="absolute top-2 right-2 bg-gray-900/80 rounded-lg p-2 text-xs text-gray-400">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span>Meta atingida</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <span>Stop atingido</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-1 bg-blue-500 rounded"></div>
                              <span>Evolução</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Estatísticas detalhadas */}
                      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-xs text-gray-400 mb-1">Banca Final</div>
                          <div className="text-blue-400 font-bold text-lg">
                            ${evolucaoBanca[evolucaoBanca.length - 1]?.banca.toFixed(2) || '0.00'}
                          </div>
                          <div className="text-xs text-gray-500">
                            {(((evolucaoBanca[evolucaoBanca.length - 1]?.banca || 0) / capital - 1) * 100).toFixed(1)}% crescimento
                          </div>
                        </div>
                        
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-xs text-gray-400 mb-1">Crescimento Composto</div>
                          <div className="text-green-400 font-bold text-lg">
                            {(() => {
                              const crescimentoTotal = ((evolucaoBanca[evolucaoBanca.length - 1]?.banca || 0) / capital - 1) * 100;
                              const crescimentoMedio = Math.pow(1 + crescimentoTotal/100, 1/30) - 1;
                              return (crescimentoMedio * 100).toFixed(2);
                            })()}%
                          </div>
                          <div className="text-xs text-gray-500">
                            média diária
                          </div>
                        </div>
                        
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-xs text-gray-400 mb-1">Dias Lucrativos</div>
                          <div className="text-green-400 font-bold text-lg">
                            {evolucaoBanca.filter(p => p.metaAtingida).length}/30
                          </div>
                          <div className="text-xs text-gray-500">
                            {((evolucaoBanca.filter(p => p.metaAtingida).length / 30) * 100).toFixed(0)}% de sucesso
                          </div>
                        </div>
                        
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-xs text-gray-400 mb-1">Dias de Stop</div>
                          <div className="text-red-400 font-bold text-lg">
                            {evolucaoBanca.filter(p => p.stopAtingido).length}/30
                          </div>
                          <div className="text-xs text-gray-500">
                            {((evolucaoBanca.filter(p => p.stopAtingido).length / 30) * 100).toFixed(0)}% de perdas
                          </div>
                        </div>
                        
                        <div className="bg-gray-700 rounded-lg p-3 text-center">
                          <div className="text-xs text-gray-400 mb-1">Stake Média</div>
                          <div className="text-purple-400 font-bold text-lg">
                            ${(() => {
                              const stakeMedia = evolucaoBanca.reduce((acc, dia) => acc + (dia.stakeUsada || 0), 0) / evolucaoBanca.length;
                              return stakeMedia.toFixed(2);
                            })()}
                          </div>
                          <div className="text-xs text-gray-500">
                            por operação
                          </div>
                        </div>
                      </div>
                      
                      {/* Análise de risco e reinvestimento */}
                      <div className="mt-4 space-y-3">
                        <div className="p-3 bg-gray-700/50 rounded-lg">
                          <div className="text-sm text-gray-300 mb-2">💡 Análise de Risco e Reinvestimento</div>
                          <div className="text-xs text-gray-400 space-y-1">
                            <div>• Perfil <span className="capitalize text-white">{perfilRisco}</span> com {(perfilAtual.taxaAcerto * 100).toFixed(0)}% de taxa de acerto do robô</div>
                            <div>• Risco máximo por dia: <span className="text-red-400">{(stopDiarioUSD/capital*100).toFixed(1)}%</span> da banca inicial</div>
                            <div>• Potencial de lucro diário: <span className="text-green-400">{(metaDiariaUSD/capital*100).toFixed(1)}%</span> da banca inicial</div>
                            <div>• Sistema de <span className="text-blue-400">reinvestimento composto</span>: stake calculada diariamente sobre a banca atual</div>
                            <div>• Máximo de <span className="text-purple-400">{numeroMaxOperacoes}</span> operações por dia recomendadas</div>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-blue-900/20 border border-blue-700/30 rounded-lg">
                          <div className="text-sm text-blue-300 mb-2">📈 Simulação de Crescimento Composto</div>
                          <div className="text-xs text-blue-200/80 space-y-1">
                            <div>• Cada dia a stake é recalculada como {(perfilAtual.stakePorOperacao * 100).toFixed(1)}% da banca atual</div>
                            <div>• Com {(perfilAtual.taxaAcerto * 100).toFixed(0)}% de acerto, o crescimento é exponencial devido ao reinvestimento</div>
                            <div>• Exemplo: Dia 1 = ${capital.toFixed(0)} → Stake ${(capital * perfilAtual.stakePorOperacao).toFixed(2)} | Dia 2 = Banca atualizada → Nova stake</div>
                            <div>• Esta simulação considera 30 dias úteis de trading contínuo</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 max-w-3xl mx-auto">
              Esta calculadora é apenas uma ferramenta de referência. Os resultados reais podem variar dependendo das condições de mercado e da sua estratégia de trading.
            </p>
            <div className="mt-6">
              <a 
                href="https://tinyurl.com/JamesRTR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Comece a Operar na Deriv
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;