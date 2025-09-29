import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Building2, Utensils, CreditCard, Heart, Home, MapPin, Users, TrendingUp, Shield, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from '../assets/logo.png'
import mcdonaldsLogo from '../assets/mcdonalds-logo.png'
import chaseLogo from '../assets/chase-logo.png'
import airPropertiesLogo from '../assets/air-properties-logo.jpg'
import mayoClinicLogo from '../assets/mayo-clinic-logo.png'

const Industries = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0)

  const industries = [
    {
      id: 'mcdonalds',
      title: "McDonald's: Restaurant Automation",
      icon: <Utensils className="w-8 h-8" />,
      logo: mcdonaldsLogo,
      description: "Revolutionizing fast food with AI-driven operations",
      company: "McDonald's Corporation",
      location: "Global Implementation",
      technologies: ["Order Accuracy AI", "Equipment Monitoring", "Predictive Maintenance", "Digital Transformation"],
      achievements: [
        "Improved order accuracy by 95%",
        "Reduced equipment downtime by 40%",
        "Enhanced customer satisfaction scores",
        "Streamlined operations across 40,000+ locations"
      ],
      details: "McDonald's has implemented comprehensive AI solutions across their global restaurant network. Their partnership with Google introduced AI systems that improve order accuracy, detect equipment issues before they cause disruptions, and optimize staff efficiency. The company's automated restaurant in Texas showcases the future of fast food with AI-driven operational management.",
      roi: "300% efficiency improvement",
      timeline: "2-year implementation",
      color: "from-red-500 to-yellow-500"
    },
    {
      id: 'banking',
      title: "JPMorgan Chase: Banking AI Excellence",
      icon: <CreditCard className="w-8 h-8" />,
      logo: chaseLogo,
      description: "Leading financial services with autonomous AI agents",
      company: "JPMorgan Chase",
      location: "United States",
      technologies: ["Fraud Detection AI", "Risk Management", "Customer Service Automation", "Data Analytics"],
      achievements: [
        "Real-time fraud detection with 99.9% accuracy",
        "Reduced operational costs by 30%",
        "Enhanced customer experience through AI assistants",
        "Improved regulatory compliance automation"
      ],
      details: "JPMorgan Chase exemplifies AI excellence in financial services with dedicated AI research initiatives and comprehensive implementation. Their AI systems continuously monitor financial behavior patterns, identify anomalies, and provide personalized financial recommendations while ensuring regulatory compliance.",
      roi: "1.7x average ROI",
      timeline: "Ongoing transformation",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 'realestate',
      title: "Dubai Real Estate: Smart Property Solutions",
      icon: <Building2 className="w-8 h-8" />,
      logo: airPropertiesLogo,
      description: "Transforming property markets with AI innovation",
      company: "Unique Properties & AIR",
      location: "Dubai, UAE",
      technologies: ["Predictive Pricing", "Virtual Tours", "Smart Property Management", "Investment Analytics"],
      achievements: [
        "Accurate property valuation predictions",
        "Immersive VR/AR property experiences",
        "Optimized building operations and energy consumption",
        "Enhanced investment decision support"
      ],
      details: "Dubai's real estate sector demonstrates cutting-edge AI implementation through partnerships like Unique Properties and AI Realtor (AIR). These platforms revolutionize property transactions with AI-powered pricing predictions, virtual reality tours, and smart building management systems.",
      roi: "Increased property values",
      timeline: "Market-leading innovation",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 'healthcare',
      title: "Healthcare Tourism: AI-Enhanced Medical Services",
      icon: <Heart className="w-8 h-8" />,
      logo: mayoClinicLogo,
      description: "Optimizing medical tourism with intelligent systems",
      company: "Mayo Clinic & Partners",
      location: "Global Medical Tourism",
      technologies: ["Patient Journey Optimization", "Appointment Scheduling", "Medical Coding", "Multilingual Support"],
      achievements: [
        "Streamlined patient experiences from consultation to recovery",
        "Reduced no-show rates through intelligent scheduling",
        "Automated medical coding with 95% accuracy",
        "Enhanced international patient communication"
      ],
      details: "Healthcare tourism benefits from AI integration through institutions like Mayo Clinic, which uses AI-powered virtual assistants to enhance patient interactions and expedite administrative duties. AI systems optimize the entire medical tourism journey while ensuring quality care for international patients.",
      roi: "Improved patient satisfaction",
      timeline: "Continuous enhancement",
      color: "from-emerald-500 to-teal-600"
    }
  ]

  const nextIndustry = () => {
    setCurrentIndustry((prev) => (prev + 1) % industries.length)
  }

  const prevIndustry = () => {
    setCurrentIndustry((prev) => (prev - 1 + industries.length) % industries.length)
  }

  const goToIndustry = (index) => {
    setCurrentIndustry(index)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-600 opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-yellow-400 opacity-5 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
            
            <Button 
              variant="outline"
              className="border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-10"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-8 lg:px-12">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-yellow-600/20 text-yellow-400 border-yellow-600/30">
                Industry Pioneers
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
                <span className="block">Pioneer Your Industry</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  with AI Innovation
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover how leading companies across industries are leveraging our AI solutions to drive 
                unprecedented growth, attract investment, and maintain competitive advantage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industry Carousel */}
        <section className="py-20 px-4 sm:px-8 lg:px-12">
          <div className="container mx-auto">
            <div className="relative max-w-6xl mx-auto">
              {/* Navigation Buttons */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
                <Button
                  onClick={prevIndustry}
                  className="w-12 h-12 rounded-full bg-gray-800/80 hover:bg-gray-700 border border-yellow-600/30 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-yellow-400" />
                </Button>
              </div>
              
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
                <Button
                  onClick={nextIndustry}
                  className="w-12 h-12 rounded-full bg-gray-800/80 hover:bg-gray-700 border border-yellow-600/30 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-yellow-400" />
                </Button>
              </div>

              {/* Carousel Content */}
              <div className="relative overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndustry}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <Card className={`bg-gradient-to-br ${industries[currentIndustry].color} border-0 overflow-hidden`}>
                      <CardContent className="p-0">
                        <div className="relative">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white animate-pulse"></div>
                            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-2 border-white animate-pulse" style={{animationDelay: '1s'}}></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white animate-pulse" style={{animationDelay: '2s'}}></div>
                          </div>

                          <div className="relative z-10 p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              {/* Content */}
                              <div className="text-white">
                                <div className="flex items-center mb-6">
                                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4">
                                    <img 
                                      src={industries[currentIndustry].logo} 
                                      alt={`${industries[currentIndustry].company} Logo`}
                                      className="w-12 h-12 object-contain"
                                    />
                                  </div>
                                  <div>
                                    <h2 className="text-3xl font-bold">{industries[currentIndustry].title}</h2>
                                    <p className="text-white/80">{industries[currentIndustry].description}</p>
                                  </div>
                                </div>

                                <div className="mb-6">
                                  <div className="flex items-center mb-2">
                                    <Building2 className="w-5 h-5 mr-2" />
                                    <span className="font-semibold">{industries[currentIndustry].company}</span>
                                  </div>
                                  <div className="flex items-center mb-4">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    <span>{industries[currentIndustry].location}</span>
                                  </div>
                                </div>

                                <p className="text-white/90 mb-6 leading-relaxed">
                                  {industries[currentIndustry].details}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <TrendingUp className="w-6 h-6 mb-2" />
                                    <p className="text-sm font-semibold">ROI Impact</p>
                                    <p className="text-lg font-bold">{industries[currentIndustry].roi}</p>
                                  </div>
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <Zap className="w-6 h-6 mb-2" />
                                    <p className="text-sm font-semibold">Timeline</p>
                                    <p className="text-lg font-bold">{industries[currentIndustry].timeline}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Details Panel */}
                              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                                <h3 className="text-xl font-bold text-white mb-6">Key Technologies</h3>
                                <div className="grid grid-cols-2 gap-3 mb-8">
                                  {industries[currentIndustry].technologies.map((tech, index) => (
                                    <Badge key={index} className="bg-white/20 text-white border-white/30 justify-center py-2">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
                                <ul className="space-y-3">
                                  {industries[currentIndustry].achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start text-white/90">
                                      <Shield className="w-5 h-5 mr-3 mt-0.5 text-white" />
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {industries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToIndustry(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndustry 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              {/* Industry Navigation */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {industries.map((industry, index) => (
                  <motion.button
                    key={industry.id}
                    onClick={() => goToIndustry(index)}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      index === currentIndustry
                        ? 'border-yellow-500 bg-yellow-500/10'
                        : 'border-gray-700 bg-gray-800/50 hover:border-yellow-600 hover:bg-yellow-600/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index === currentIndustry ? 'bg-yellow-500/20' : 'bg-gray-700'
                      }`}>
                        <img 
                          src={industry.logo} 
                          alt={`${industry.company} Logo`}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <p className={`font-semibold text-sm ${
                          index === currentIndustry ? 'text-yellow-400' : 'text-gray-300'
                        }`}>
                          {industry.company}
                        </p>
                        <p className="text-xs text-gray-500">{industry.location}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-8 lg:px-12">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
                Ready to Pioneer Your Industry?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join these industry leaders and transform your enterprise with cutting-edge AI solutions 
                that drive investment attraction and sustainable competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Your Transformation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-10 font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/'}
                >
                  Learn More About Our Solutions
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-8 lg:px-12 border-t border-gray-800">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center">
                <img src={logoImage} alt="EvolveX Logo" className="w-6 h-6 object-contain"/>
              </div>
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

export default Industries
