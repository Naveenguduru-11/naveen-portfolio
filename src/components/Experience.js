import React from 'react'
import { Calendar, MapPin, Building, Award } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Front End Developer Intern',
      company: 'Apex Planet',
      location: 'Remote',
      duration: '2024 - Present',
      type: 'Internship',
      achievements: [
        'Spearheaded development of responsive interfaces using HTML, CSS, JavaScript, and React.js',
        'Delivered clean and modular code, reducing future maintenance effort by 60%',
        'Implemented Tailwind CSS designs that improved user interaction on mobile devices',
        'Collaborated with UI/UX teams to enhance user experience'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Junior Developer Intern',
      company: 'Namoona 3D Labs',
      location: 'Visakhapatnam',
      duration: 'Jan 2025 – Feb 2025',
      type: 'Internship',
      achievements: [
        'Developed CADGPT functions (Revolve, Sweep, Loft) using Python and Open3D',
        'Improved CAD rendering efficiency by 40% through multithreading',
        'Integrated scalable backend APIs with real-time 3D features'
      ],
      technologies: ['Python', 'Open3D', 'Multithreading', '3D Rendering']
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey in software development through various roles and responsibilities
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 break-words">{exp.title}</h3>
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium self-start sm:self-auto">
                          {exp.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-3">
                        <Building className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="font-medium break-words">{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-500 text-sm">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="break-words">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-primary-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm break-words leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium break-words"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Experience 