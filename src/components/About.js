import React from 'react'
import { User, MapPin, Phone, Mail, Calendar, Award } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: Phone, label: 'Phone', value: '+91 8341183948' },
    { icon: Mail, label: 'Email', value: 'gudurunaveenchowdary@gmail.com' },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Personal Info */}
          <div className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl">
                <User className="w-32 h-32 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">NC</span>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <p className="text-gray-900 font-semibold">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Full Stack Developer with hands-on experience in designing and deploying scalable web applications. 
                Proficient in frontend and backend technologies with a focus on clean architecture, performance 
                optimization, RESTful APIs, and database integration.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Adept at agile methodologies, cross-functional collaboration, and delivering innovative digital 
                solutions under tight deadlines. Passionate about creating user-centric applications that solve 
                real-world problems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently pursuing B.Tech in Information Technology at MVGR College of Engineering with a strong 
                foundation in both theoretical concepts and practical implementation.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl p-6 text-center">
                <h4 className="text-2xl font-bold mb-2">60%</h4>
                <p className="text-primary-100">Reduced maintenance effort through clean code</p>
              </div>
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 text-white rounded-xl p-6 text-center">
                <h4 className="text-2xl font-bold mb-2">40%</h4>
                <p className="text-secondary-100">Improved rendering efficiency</p>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['English', 'Telugu', 'Hindi'].map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 