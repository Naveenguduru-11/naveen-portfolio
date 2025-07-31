import React from 'react'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'MVGR College of Engineering',
      duration: '2022 – 2026',
      score: 'CGPA: 7.14',
      description: 'Currently pursuing Bachelor of Technology in Information Technology with focus on software development, database management, and web technologies.',
      achievements: [
        'Active participation in technical workshops and hackathons',
        'Member of coding clubs and technical societies',
        'Completed core courses in Data Structures, Algorithms, and Web Development'
      ]
    },
    {
      degree: 'Intermediate',
      institution: 'G.J College',
      duration: '2020 – 2022',
      score: '84.6%',
      description: 'Completed intermediate education with focus on Mathematics, Physics, and Computer Science.',
      achievements: [
        'Strong foundation in Mathematics and Science',
        'Participated in science exhibitions and competitions',
        'Developed problem-solving and analytical skills'
      ]
    },
    {
      degree: 'SSC',
      institution: 'Amar Kaumudi E.M School',
      duration: '2020',
      score: '94.3%',
      description: 'Completed secondary school education with excellent academic performance.',
      achievements: [
        'Outstanding academic performance',
        'Active participation in extracurricular activities',
        'Strong foundation in core subjects'
      ]
    }
  ]

  return (
    <section id="education" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic journey and educational achievements that shaped my technical foundation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-primary-600 font-semibold">{edu.institution}</p>
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-sm font-semibold">{edu.score}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <BookOpen className="w-4 h-4 mr-2 text-primary-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Highlights */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Highlights</h3>
            <p className="text-gray-600">Key achievements and milestones in my educational journey</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '94.3%', label: 'SSC Score', color: 'primary' },
              { number: '84.6%', label: 'Intermediate Score', color: 'secondary' },
              { number: '7.14', label: 'Current CGPA', color: 'accent' },
              { number: '2026', label: 'Expected Graduation', color: 'primary' }
            ].map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`text-3xl font-bold mb-2 ${
                  highlight.color === 'primary' ? 'text-primary-600' :
                  highlight.color === 'secondary' ? 'text-secondary-600' :
                  'text-accent-600'
                }`}>
                  {highlight.number}
                </div>
                <div className="text-gray-600 font-medium">{highlight.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Learning */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                I believe in lifelong learning and continuously upgrade my skills through online courses, 
                workshops, and hands-on projects to stay current with the latest technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Online Courses',
                  'Technical Workshops',
                  'Hackathons',
                  'Open Source Projects'
                ].map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    {item}
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

export default Education 