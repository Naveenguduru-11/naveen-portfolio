import React from 'react'
import { Download, Mail, ArrowDown, Github, Linkedin } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <div className="animate-slide-up mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4">
              Guduru Naveen
              <span className="block gradient-text">Chowdary</span>
            </h1>
          </div>

          {/* Title */}
          <div className="animate-slide-up mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-medium mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Crafting innovative digital solutions with modern technologies. 
              Passionate about clean code, performance optimization, and user experience.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </button>
            
            <button
              onClick={() => scrollToSection('#projects')}
              className="group flex items-center gap-2 px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in flex justify-center items-center space-x-6 mb-8">
            <a
              href="https://github.com/Naveenguduru-11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/guduru-naveen"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            
            <a
              href="mailto:gudurunaveenchowdary@gmail.com"
              className="p-3 bg-gray-100 text-gray-700 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Location */}
          <div className="animate-fade-in text-gray-500">
            <p className="text-sm">
              📍 Based in Vizianagaram, India
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="p-2 text-gray-400 hover:text-primary-600 transition-colors duration-300"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}

export default Hero 