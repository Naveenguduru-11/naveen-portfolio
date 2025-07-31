import React from 'react'
import { Download, Mail, Phone, MapPin, Github, Linkedin, Calendar, Award, Code, Database, Brain, Wrench } from 'lucide-react'

const Resume = () => {
  const handleDownload = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You'll need to add your actual PDF file to the public folder
    link.download = 'Guduru_Naveen_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const personalInfo = [
    { icon: Phone, label: 'Phone', value: '+91 8341183948' },
    { icon: Mail, label: 'Email', value: 'gudurunaveenchowdary@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/Naveenguduru-11' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/guduru-naveen' }
  ]

  const skills = {
    'Frontend': ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'PHP'],
    'Database': ['MySQL', 'MongoDB', 'Firebase'],
    'AI/ML': ['TensorFlow', 'TextBlob', 'NLTK', 'Generative AI'],
    'Tools & Platforms': ['Git', 'Postman', 'Figma', 'Android Studio']
  }

  const experience = [
    {
      title: 'Junior Developer Intern',
      company: 'Namoona 3D Labs',
      duration: 'Jan 2024 - Present',
      description: 'Working on web development projects using modern technologies.',
      achievements: [
        'Developed responsive web applications using React.js',
        'Collaborated with team members on various projects',
        'Implemented modern UI/UX designs'
      ]
    },
    {
      title: 'Software Testing Intern',
      company: 'Apex Planet',
      duration: 'Jun 2023 - Dec 2023',
      description: 'Focused on software testing and quality assurance.',
      achievements: [
        'Performed comprehensive testing of web applications',
        'Identified and reported bugs and issues',
        'Worked on test case development and execution'
      ]
    }
  ]

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'GITAM University',
      duration: '2022 - 2026',
      score: '7.14 CGPA'
    },
    {
      degree: 'Intermediate',
      institution: 'G.J College',
      duration: '2020 - 2022',
      score: '84.6%'
    },
    {
      degree: 'SSC',
      institution: 'Amar Kaumudi E.M School',
      duration: '2020',
      score: '94.3%'
    }
  ]

  const certifications = [
    'Junior Developer Internship – Namoona 3D Labs',
    'Software Testing – NPTEL',
    'GenAI Fundamentals – TheSkillShop',
    'GDG Workshop – Google Developers Club',
    'CCNAv7: Introduction to Networks – Cisco'
  ]

  return (
    <section id="resume" className="section-padding bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Download my complete resume to learn more about my experience and skills
          </p>
          
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="h-5 w-5" />
            Download PDF Resume
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary-600" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-6">
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                    </div>
                    <p className="text-primary-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-primary-600" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="flex justify-between items-start p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-primary-600 text-sm">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{edu.duration}</p>
                      <p className="font-semibold text-gray-900">{edu.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Personal Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-4 h-4 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-gray-900 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-gray-900 mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-sm text-gray-600">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume 