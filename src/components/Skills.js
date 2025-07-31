import React from 'react'
import { Code, Database, Brain, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'primary',
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend',
      icon: Code,
      color: 'secondary',
      skills: ['Node.js', 'Express.js', 'Python', 'PHP']
    },
    {
      title: 'Database',
      icon: Database,
      color: 'accent',
      skills: ['MySQL', 'MongoDB', 'Firebase']
    },
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'secondary',
      skills: ['TensorFlow', 'TextBlob', 'NLTK', 'Generative AI']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'primary',
      skills: ['Git', 'Postman', 'Figma', 'Android Studio']
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-500',
      secondary: 'bg-secondary-500',
      accent: 'bg-accent-500'
    }
    return colors[color] || colors.primary
  }

  const getBgColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-100',
      secondary: 'bg-secondary-100',
      accent: 'bg-accent-100'
    }
    return colors[color] || colors.primary
  }

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical skills acquired through hands-on experience and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${getBgColorClasses(category.color)} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className={`w-6 h-6 ${getColorClasses(category.color).replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${getBgColorClasses(category.color)} ${getColorClasses(category.color).replace('bg-', 'text-')}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Soft Skills</h3>
            <p className="text-gray-600">Essential skills that complement technical expertise</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Problem Solving',
              'Agile Development',
              'Team Leadership',
              'Communication'
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <h4 className="font-semibold text-lg">{skill}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
            <p className="text-gray-600">Professional certifications and achievements</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Junior Developer Internship – Namoona 3D Labs',
              'Software Testing – NPTEL',
              'GenAI Fundamentals – TheSkillShop',
              'GDG Workshop – Google Developers Club',
              'CCNAv7: Introduction to Networks – Cisco'
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-accent-600 font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 font-medium">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 