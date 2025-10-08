import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { ArrowLeft, Send, CheckCircle, Building2, Mail, Phone, MapPin, Users, Brain, Zap, TrendingUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImage from '../assets/logo.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    businessName: '',
    phoneNumber: '',
    email: '',
    foundUs: '',
    industry: '',
    aiKnowledge: '',
    helpNeeded: '',
    additionalInfo: '',
    marketingConsent: false
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const industries = [
    'Restaurant & Food Service',
    'Banking & Financial Services',
    'Real Estate & Property',
    'Healthcare & Medical Tourism',
    'Retail & E-commerce',
    'Manufacturing & Industrial',
    'Technology & Software',
    'Transportation & Logistics',
    'Education & Training',
    'Energy & Utilities',
    'Other'
  ]

  const foundUsOptions = [
    'Google Search',
    'Social Media (LinkedIn, Facebook, etc.)',
    'Industry Conference/Event',
    'Referral from Partner/Client',
    'Online Advertisement',
    'Industry Publication/Blog',
    'Word of Mouth',
    'Other'
  ]

  const aiKnowledgeOptions = [
    'Complete Beginner - New to AI',
    'Basic Understanding - Heard about AI applications',
    'Intermediate - Some experience with AI tools',
    'Advanced - Actively using AI in business',
    'Expert - Deep technical knowledge of AI'
  ]

  const helpOptions = [
    'Operational Efficiency & Automation',
    'Customer Experience Enhancement',
    'Data Analytics & Insights',
    'Investment & Growth Strategy',
    'Competitive Advantage',
    'Cost Reduction',
    'Revenue Generation',
    'Risk Management',
    'Regulatory Compliance',
    'Digital Transformation'
  ]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Submit to Google Sheets via Apps Script
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbwbhsJT6OqVGYiIxBfy3oKv5ipGzwLO4-OyPmQh_7fteOyDWtuSMqoKutW_5LYaG1-L/exec'  // Paste your Web App URL here
      
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      console.log('Form submitted:', formData)
          
      // Submit to Google Sheets (no-cors mode to avoid CORS issues)
      await fetch(googleFormUrl, {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors'
      })
      
      console.log('Form submitted:', formData)
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Redirect to Calendly after 2 seconds
      setTimeout(() => {
        window.open('https://calendly.com/evevo-tech-support/30min', '_blank')
      }, 2000)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      // Still show success to user even if Google Sheets fails
      setIsSubmitted(true)
      
      // Still redirect to Calendly
      setTimeout(() => {
        window.open('https://calendly.com/evevo-tech-support/30min', '_blank')
      }, 2000)
    }
  }

  const resetForm = () => {
    setFormData({
      companyName: '',
      businessName: '',
      phoneNumber: '',
      email: '',
      foundUs: '',
      industry: '',
      aiKnowledge: '',
      helpNeeded: '',
      additionalInfo: '',
      marketingConsent: false
    })
    setIsSubmitted(false)
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
              <img src={logoImage} alt="EvolveX Logo" className="w-16 h-16 object-contain"/>
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
                Get Started Today
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-yellow-400">
                <span className="block">Ready to Transform</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Your Enterprise?
                </span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                Connect with our AI experts to discover how EvolveX can drive your business evolution, 
                attract investment, and establish sustainable competitive advantage in your industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-8 lg:px-12">
          <div className="container mx-auto max-w-4xl">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-yellow-400 text-center">
                        Tell Us About Your Business
                      </CardTitle>
                      <p className="text-gray-300 text-center">
                        Help us understand your needs so we can provide the most relevant AI solutions for your enterprise.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Company Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="companyName" className="text-yellow-400 font-semibold">
                              Company Name *
                            </Label>
                            <Input
                              id="companyName"
                              value={formData.companyName}
                              onChange={(e) => handleInputChange('companyName', e.target.value)}
                              placeholder="Enter your company name"
                              required
                              className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-yellow-500"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="businessName" className="text-yellow-400 font-semibold">
                              Business/Brand Name
                            </Label>
                            <Input
                              id="businessName"
                              value={formData.businessName}
                              onChange={(e) => handleInputChange('businessName', e.target.value)}
                              placeholder="If different from company name"
                              className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-yellow-500"
                            />
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-yellow-400 font-semibold">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="your.email@company.com"
                              required
                              className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-yellow-500"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phoneNumber" className="text-yellow-400 font-semibold">
                              Phone Number *
                            </Label>
                            <Input
                              id="phoneNumber"
                              type="tel"
                              value={formData.phoneNumber}
                              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                              placeholder="+1 (555) 123-4567"
                              required
                              className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-yellow-500"
                            />
                          </div>
                        </div>

                        {/* Discovery and Industry */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label className="text-yellow-400 font-semibold">
                              How did you find us? *
                            </Label>
                            <Select value={formData.foundUs} onValueChange={(value) => handleInputChange('foundUs', value)}>
                              <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-100">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-600">
                                {foundUsOptions.map((option) => (
                                  <SelectItem key={option} value={option} className="text-gray-100 focus:bg-gray-700">
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label className="text-yellow-400 font-semibold">
                              Industry *
                            </Label>
                            <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                              <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-100">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-800 border-gray-600">
                                {industries.map((industry) => (
                                  <SelectItem key={industry} value={industry} className="text-gray-100 focus:bg-gray-700">
                                    {industry}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {/* AI Knowledge Assessment */}
                        <div className="space-y-2">
                          <Label className="text-yellow-400 font-semibold">
                            What's your current knowledge of AI? *
                          </Label>
                          <Select value={formData.aiKnowledge} onValueChange={(value) => handleInputChange('aiKnowledge', value)}>
                            <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-100">
                              <SelectValue placeholder="Select your AI knowledge level" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              {aiKnowledgeOptions.map((option) => (
                                <SelectItem key={option} value={option} className="text-gray-100 focus:bg-gray-700">
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Help Needed */}
                        <div className="space-y-2">
                          <Label className="text-yellow-400 font-semibold">
                            How can we help your enterprise? *
                          </Label>
                          <Select value={formData.helpNeeded} onValueChange={(value) => handleInputChange('helpNeeded', value)}>
                            <SelectTrigger className="bg-gray-700/50 border-gray-600 text-gray-100">
                              <SelectValue placeholder="Select primary area of interest" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-800 border-gray-600">
                              {helpOptions.map((option) => (
                                <SelectItem key={option} value={option} className="text-gray-100 focus:bg-gray-700">
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Additional Information */}
                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo" className="text-yellow-400 font-semibold">
                            Additional Information
                          </Label>
                          <Textarea
                            id="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                            placeholder="Tell us more about your specific challenges, goals, or questions..."
                            rows={4}
                            className="bg-gray-700/50 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-yellow-500"
                          />
                        </div>

                        {/* Marketing Consent */}
                        <div className="flex items-start space-x-3 bg-gray-700/30 p-4 rounded-lg">
                          <Checkbox
                            id="marketingConsent"
                            checked={formData.marketingConsent}
                            onCheckedChange={(checked) => handleInputChange('marketingConsent', checked)}
                            className="mt-1 border-yellow-600 data-[state=checked]:bg-yellow-600"
                          />
                          <div className="flex-1">
                            <Label
                              htmlFor="marketingConsent"
                              className="text-sm text-gray-300 cursor-pointer leading-relaxed"
                            >
                              I consent to receive marketing communications, product updates, industry insights, and promotional materials from Evevo Technologies Sdn Bhd. I understand that I can unsubscribe at any time by contacting support@evevo-tech.com or using the unsubscribe link in emails.
                            </Label>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                          <Button
                            type="submit"
                            disabled={isSubmitting || !formData.companyName || !formData.email || !formData.phoneNumber || !formData.foundUs || !formData.industry || !formData.aiKnowledge || !formData.helpNeeded}
                            className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Submitting...
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send className="ml-2 w-4 h-4" />
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700">
                    <CardContent className="p-12">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      >
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                      </motion.div>
                      
                      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                        Thank You for Your Interest!
                      </h2>
                      
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        We've received your information and our AI experts will review your requirements. 
                        A Calendly scheduling window will open shortly to book your consultation call.
                      </p>
                      
                      <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">📅 Schedule Your Consultation</h3>
                        <p className="text-gray-300 mb-4">
                          Book a 30-minute consultation with our AI experts to discuss your business needs and explore tailored solutions.
                        </p>
                        <Button
                          onClick={() => window.open('https://calendly.com/evevo-tech-support/30min', '_blank')}
                          className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-white w-full sm:w-auto"
                        >
                          Book Appointment Now
                        </Button>
                      </div>
                      
                      <div className="bg-gray-700/30 rounded-lg p-6 mb-8">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-4">What happens next?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold">1</div>
                            <span>Schedule consultation call</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold">2</div>
                            <span>Custom solution proposal</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold">3</div>
                            <span>Implementation roadmap</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                        <Button
                          onClick={resetForm}
                          variant="outline"
                          className="border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:bg-opacity-10"
                        >
                          Submit Another Request
                        </Button>
                        <Button
                          onClick={() => window.location.href = '/'}
                          className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-700 hover:to-yellow-900 text-white"
                        >
                          Return to Home
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-8 lg:px-12 border-t border-gray-800">
          <div className="container mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-16 text-center text-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get in Touch
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
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-yellow-200" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Email Support</h3>
                  <p className="text-gray-300 mb-4">Get expert guidance and support</p>
                  <a 
                    href="mailto:support@evevo-tech.com" 
                    className="text-yellow-400 hover:text-yellow-300 font-semibold"
                  >
                    support@evevo-tech.com
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-yellow-200" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Expert Consultation</h3>
                  <p className="text-gray-300 mb-4">Schedule a personalized demo</p>
                  <p className="text-yellow-400 font-semibold">Available 24/7</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 backdrop-blur-lg border-gray-700 hover:border-yellow-500 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-yellow-200" />
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Investment Opportunities</h3>
                  <p className="text-gray-300 mb-4">Explore partnership potential</p>
                  <p className="text-yellow-400 font-semibold">Strategic Partnerships</p>
                </CardContent>
              </Card>
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

export default Contact
