import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Cpu, Target, RefreshCw, Zap, Clock, Award, TrendingUp, MessageSquare, Users, ChevronRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from './assets/logo.png'
import svoReviewImage from './assets/svo-review.png'
import Industries from './components/Industries.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)
  const navigate = useNavigate()

  const reviews = [
    {
      text: "I always wanted to sell online but had zero clue where to start. No product, no experience, nothing. SVO.ai was perfect because it's a complete business-in-a-box. The Quick Onboarding AI made setup easy, and I made my first sale in under a week.",
      author: "Alex R.",
      role: "E-commerce Entrepreneur"
    },
    {
      text: "EvolveX transformed our entire operation. Their agentic AI solutions increased our efficiency by 300% and reduced operational costs by 40%. The ROI was immediate and continues to grow.",
      author: "Sarah Chen",
      role: "Operations Director"
    },
    {
      text: "The investment potential became clear within months. Our company valuation increased significantly after implementing EvolveX's AI solutions. Investors are now approaching us.",
      author: "Michael Torres",
      role: "CEO, TechCorp"
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const interval = setInterval(nextReview, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-600 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-yellow-400 opacity-5 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-yellow-500 opacity-8 blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="rgb(212, 175, 55)" opacity="0.3">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="80" cy="60" r="1.5" fill="rgb(212, 175, 55)" opacity="0.2">
                <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/>
              </circle>
              <line x1="20" y1="20" x2="80" y2="60" stroke="rgb(212, 175, 55)" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="py-6 px-4 sm:px-8 lg:px-12">
          <div className="container mx-auto flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={logoImage} alt="EvolveX Logo" className="w-12 h-12 object-contain"/>
              <div>
                <span className="text-yellow-400 font-bold text-xl">EvolveX</span>
                <p className="text-xs text-gray-400">Evevo Technologies Sdn Bhd</p>
              </div>
            </motion.div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#solutions" className="text-yellow-300 hover:text-yellow-100 transition duration-300">Solutions</a>
              <a href="#technology" className="text-gray-300 hover:text-yellow-100 transition duration-300">Technology</a>
              <button onClick={() => navigate('/industries')} className="text-gray-300 hover:text-yellow-100 transition duration-300">Industries</button>
              <a href="#investment" className="text-gray-300 hover:text-yellow-100 transition duration-300">Investment</a>
              <button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-yellow-100 transition duration-300">Contact</button>
            </nav>
            
            <button 
              className="md:hidden text-yellow-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 bg-gray-800 rounded-lg p-4"
              >
                <nav className="flex flex-col space-y-4">
                  <a href="#solutions" className="text-yellow-300 hover:text-yellow-100 transition duration-300">Solutions</a>
                  <a href="#technology" className="text-gray-300 hover:text-yellow-100 transition duration-300">Technology</a>
                  <button onClick={() => navigate('/industries')} className="text-gray-300 hover:text-yellow-100 transition duration-300 text-left">Industries</button>
                  <a href="#investment" className="text-gray-300 hover:text-yellow-100 transition duration-300">Investment</a>
                  <button onClick={() => navigate('/contact')} className="text-gray-300 hover:text-yellow-100 transition duration-300 text-left">Contact</button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex items-center py-16 px-4 sm:px-8 lg:px-12">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                Investment & Growth Potential
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
                <span className="block">Be Part of Your</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Evolution to the Next Level
                </span>
                <span className="block">in AI</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg opacity-85 leading-relaxed">
                Transform your enterprise with cutting-edge Agentic AI solutions that drive investment attraction, 
                operational excellence, and sustainable competitive advantage across industries.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                  onClick={() => navigate('/industries')}
                >
                  Pioneer Your Industry
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-10 font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                  onClick={() => navigate('/contact')}
                >
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-900 opacity-20 blur-xl"></div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center shadow-2xl shadow-yellow-500/20">
                  <div className="w-3/4 h-3/4 rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="relative">
                      <img src={logoImage} alt="EvolveX Key" className="w-24 h-24 object-contain"/>
                      <div className="absolute -inset-8 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-2 border-yellow-600 border-opacity-30 animate-spin" style={{animationDuration: '8s'}}></div>
                        <div className="w-40 h-40 rounded-full border-2 border-yellow-600 border-opacity-20 animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}}></div>
                        <div className="w-48 h-48 rounded-full border-2 border-yellow-600 border-opacity-10 animate-spin" style={{animationDuration: '16s'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Technology Section */}
        <section id="technology" className="py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="container mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-16 text-center text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              The Engine of Transformation
            </motion.h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Autonomous Intelligence for Your Business</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Agentic AI acts as an autonomous brain for your enterprise - capable of setting goals, processing complex data, 
                  and making strategic decisions in real-time to drive unprecedented growth and investment potential.
                </p>
                
                <div className="space-y-6">
                  <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mr-4 mt-1">
                          <Target className="text-yellow-200 w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-yellow-400 mb-2">Autonomous Goal Setting</h4>
                          <p className="text-gray-300">Agents receive high-level objectives and intelligently break them down into optimized task sequences that drive measurable ROI.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mr-4 mt-1">
                          <Cpu className="text-yellow-200 w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-yellow-400 mb-2">Multi-Modal Reasoning</h4>
                          <p className="text-gray-300">Process and correlate data across text, images, and numbers to make context-aware decisions that maximize investment potential.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mr-4 mt-1">
                          <RefreshCw className="text-yellow-200 w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-yellow-400 mb-2">Real-Time Adaptation</h4>
                          <p className="text-gray-300">Continuously learn from new data and feedback to optimize strategies and maintain competitive advantage.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 h-96 flex items-center justify-center">
                  <CardContent className="p-8">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 rounded-full border-2 border-yellow-600 border-opacity-30 animate-spin" style={{animationDuration: '10s'}}></div>
                      <div className="absolute inset-4 rounded-full border-2 border-yellow-500 border-opacity-20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                      <div className="absolute inset-8 rounded-full border-2 border-yellow-400 border-opacity-10 animate-spin" style={{animationDuration: '20s'}}></div>
                      <div className="absolute inset-12 flex items-center justify-center">
                        <Cpu className="text-yellow-400 w-16 h-16" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="absolute -z-10 -inset-4 bg-yellow-600 rounded-xl opacity-5 blur-xl"></div>
              </motion.div>
            </div>
            
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Transformative Enterprise Impact
            </motion.h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mx-auto">
                    <Zap className="text-yellow-200" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-yellow-400">Proactive Operations</h4>
                  <p className="text-gray-300">Agents anticipate needs and opportunities, acting before issues arise to maximize growth potential.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mx-auto">
                    <Clock className="text-yellow-200" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-yellow-400">Unprecedented Efficiency</h4>
                  <p className="text-gray-300">End-to-end automation of complex, multi-step business processes that drive immediate ROI.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mx-auto">
                    <Award className="text-yellow-200" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-yellow-400">Strategic Advantage</h4>
                  <p className="text-gray-300">Outpace competitors with real-time data processing and autonomous decision-making capabilities.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="container mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-16 text-center text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our Agentic AI Solutions
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center">
                    <TrendingUp className="text-yellow-200 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Trading Agentic AI</h3>
                  <p className="text-gray-300 mb-6">Autonomous financial agents that analyze markets, execute trades, and optimize portfolios with superhuman precision, delivering consistent returns and attracting investor confidence.</p>
                  <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                    High ROI Potential
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center">
                    <MessageSquare className="text-yellow-200 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Conversational Agentic AI</h3>
                  <p className="text-gray-300 mb-6">Intelligent dialogue agents that understand context, emotions, and intent to deliver human-like interactions at scale, reducing operational costs while improving customer satisfaction.</p>
                  <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                    Scalable Growth
                  </Badge>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center">
                    <Users className="text-yellow-200 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Avatar Agentic AI</h3>
                  <p className="text-gray-300 mb-6">Digital human agents that represent your brand with lifelike appearance, expressions, and natural interactions, creating memorable customer experiences that drive brand value.</p>
                  <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                    Brand Innovation
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Investment Section */}
        <section id="investment" className="py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="container mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-16 text-center text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Investment & Growth Potential
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Proven ROI & Competitive Edge</h3>
                  <p className="text-gray-300 mb-6">Our Agentic AI solutions deliver measurable returns through operational efficiency, innovation acceleration, and market leadership positioning with 1.7x average ROI.</p>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">1.7x</div>
                  <p className="text-sm text-gray-400">Average ROI</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Investor Magnet</h3>
                  <p className="text-gray-300 mb-6">Demonstrating advanced AI capabilities positions your company as a technology leader, attracting venture capital, strategic partners, and public market investors.</p>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">$100B+</div>
                  <p className="text-sm text-gray-400">VC Investment in AI (2024)</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Scalable Future Growth</h3>
                  <p className="text-gray-300 mb-6">Our solutions are architected for exponential scalability, making your company a compelling long-term investment with unlimited growth potential.</p>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">35-38%</div>
                  <p className="text-sm text-gray-400">Market CAGR (2025-2030)</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Become a Market Disruptor</h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Agentic AI transforms your enterprise from follower to pioneer, ensuring long-term market dominance and resilience against industry disruptions. 
                Join the companies that are already attracting significant investment through AI innovation.
              </p>
              <Button 
                className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Explore Investment Opportunities
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* SVO.ai Review Section */}
        <section className="py-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
          <div className="container mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-16 text-center text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Success Stories & Reviews
            </motion.h2>
            
            <motion.div 
              className="relative max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/80 to-orange-600/80"></div>
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-white mb-6">Client Success Platform</h3>
                    <p className="text-white/90 mb-6">
                      See how our AI solutions have transformed businesses across industries, 
                      delivering measurable results and attracting significant investment.
                    </p>
                  </div>
                  
                  <div className="relative">
                    <div className="w-80 h-96 relative">
                      {/* Phone Frame */}
                      <div className="absolute inset-0 bg-black rounded-3xl shadow-2xl">
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full"></div>
                        
                        {/* Screen Content */}
                        <div className="absolute top-12 left-4 right-4 bottom-8 bg-gray-100 rounded-2xl overflow-hidden">
                          <div className="p-6 h-full flex flex-col">
                            <div className="flex-1 bg-white rounded-xl p-4 shadow-sm">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={currentReview}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -20 }}
                                  transition={{ duration: 0.3 }}
                                  className="h-full flex flex-col justify-between"
                                >
                                  <p className="text-gray-800 text-sm leading-relaxed mb-4">
                                    "{reviews[currentReview].text}"
                                  </p>
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                      <span className="text-white text-xs font-bold">
                                        {reviews[currentReview].author.charAt(0)}
                                      </span>
                                    </div>
                                    <div>
                                      <p className="text-gray-800 font-semibold text-sm">{reviews[currentReview].author}</p>
                                      <p className="text-gray-600 text-xs">{reviews[currentReview].role}</p>
                                    </div>
                                  </div>
                                </motion.div>
                              </AnimatePresence>
                            </div>
                            
                            {/* Navigation Dots */}
                            <div className="flex justify-center space-x-2 mt-4">
                              {reviews.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentReview(index)}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentReview ? 'bg-blue-500' : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            
                            {/* Navigation Arrows */}
                            <div className="flex justify-between items-center mt-4">
                              <button
                                onClick={prevReview}
                                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                              >
                                <ChevronRight className="w-4 h-4 text-gray-600 rotate-180" />
                              </button>
                              <button
                                onClick={nextReview}
                                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                              >
                                <ChevronRight className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-800">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img src={logoImage} alt="EvolveX Logo" className="w-10 h-10 object-contain"/>
              <div>
                <span className="text-yellow-400 font-bold text-lg">EvolveX</span>
                <p className="text-xs text-gray-400">Evevo Technologies Sdn Bhd</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering enterprises to evolve to the next level with cutting-edge AI solutions
            </p>
            <p className="text-gray-500 text-sm">
              Contact us: <a href="mailto:support@evevo-tech.com" className="text-yellow-400 hover:text-yellow-300">support@evevo-tech.com</a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router basename="/evevo-tech">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
