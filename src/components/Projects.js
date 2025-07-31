import React from 'react'
import { ExternalLink, Github, Code, Database, Brain, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Education Assignment Tracker',
      description: 'A comprehensive full-stack system designed to streamline assignment management between faculty and students. Features secure authentication, role-based access control, and real-time updates.',
      image: '🎓',
      category: 'Full Stack',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Express.js', 'Tailwind CSS'],
      features: [
        'Secure login system and role-based access control',
        'Real-time assignment tracking and notifications',
        'Reduced assignment processing time by 60% for educators',
        'Responsive design for all devices'
      ],
      github: 'https://github.com/Naveenguduru-11',
      live: '#',
      icon: Database
    },
    {
      title: 'Sentiment Analysis Web App',
      description: 'An intelligent NLP-powered web application that analyzes user reviews and classifies them as Positive, Neutral, or Negative using advanced text processing techniques.',
      image: '🧠',
      category: 'AI/ML',
      technologies: ['Python', 'TextBlob', 'NLTK', 'MySQL', 'Flask'],
      features: [
        'NLP-powered sentiment classification',
        'User authentication and history tracking',
        'Real-time text analysis with confidence scores',
        'Comprehensive review management system'
      ],
      github: 'https://github.com/Naveenguduru-11',
      live: '#',
      icon: Brain
    },
    {
      title: 'Indigenous Nutrition Website',
      description: 'A culturally-focused platform promoting native food knowledge and traditional nutrition practices. Features comprehensive food database and community reviews.',
      image: '🌱',
      category: 'Web Development',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'PHP'],
      features: [
        'Responsive design promoting native food knowledge',
        'MySQL CRUD operations for food culture database',
        'Community review and rating system',
        'Cultural food categorization and search'
      ],
      github: 'https://github.com/Naveenguduru-11',
      live: '#',
      icon: Globe
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Full Stack': 'bg-primary-100 text-primary-700',
      'AI/ML': 'bg-secondary-100 text-secondary-700',
      'Web Development': 'bg-accent-100 text-accent-700'
    }
    return colors[category] || colors['Web Development']
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{project.image}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Features */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Code className="w-4 h-4 mr-2 text-primary-600" />
                  Key Features
                </h4>
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-all duration-300 font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Let's Connect
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 