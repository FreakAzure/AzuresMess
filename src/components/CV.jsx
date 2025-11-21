import { FaDownload, FaBriefcase, FaGraduationCap, FaCode, FaLanguage, FaGlobe } from 'react-icons/fa'
import { strings, experience, education, skills, languages } from '../constants/strings'
import { generateCVPDF } from '../utils/generatePDF'

const CV = () => {
  const handleDownload = () => {
    generateCVPDF()
  }

  return (
    <section id="cv" className="py-20 px-4 bg-dark-surface">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {strings.cv.title.split(' ')[0]} <span className="gradient-text">{strings.cv.title.split(' ')[1]}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            {strings.cv.subtitle}
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 glow-blue hover:glow-purple"
          >
            <FaDownload /> {strings.cv.downloadButton}
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experiencia */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase className="text-accent-blue text-2xl" />
              <h3 className="text-2xl font-bold text-white">{strings.cv.sections.experience}</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-dark-card p-6 rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-blue/70 transition-all duration-300 hover:glow-blue group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                      <p className="text-accent-blue font-medium mb-1">{exp.company}</p>
                      {exp.location && (
                        <p className="text-gray-500 text-sm mb-1">{exp.location}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-accent-purple text-sm font-medium whitespace-nowrap">{exp.period}</span>
                      {exp.type && (
                        <span className="text-gray-500 text-xs mt-1">{exp.type}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Educación */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FaGraduationCap className="text-accent-purple text-2xl" />
              <h3 className="text-2xl font-bold text-white">{strings.cv.sections.education}</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-dark-card p-6 rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-purple/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                  <p className="text-accent-blue mb-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                  {edu.description && <p className="text-gray-400 text-sm">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Habilidades */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="text-accent-blue text-2xl" />
              <h3 className="text-2xl font-bold text-white">{strings.cv.sections.skills}</h3>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border-[0.5px] border-gray-900/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-surface border-[0.5px] border-gray-900/50 hover:border-accent-blue/50 transition-all duration-300 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Idiomas */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FaLanguage className="text-accent-purple text-2xl" />
              <h3 className="text-2xl font-bold text-white">{strings.cv.sections.languages}</h3>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border-[0.5px] border-gray-900/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-4 py-3 rounded-lg bg-dark-surface border-[0.5px] border-gray-900/50 hover:border-accent-purple/50 transition-all duration-300 group"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">{language.name}</span>
                    <span className="text-accent-purple text-sm font-medium">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaGlobe className="text-accent-blue text-2xl" />
              <h3 className="text-2xl font-bold text-white">{strings.cv.sections.portfolio}</h3>
            </div>
            <div className="bg-dark-card p-6 rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-blue/70 transition-all duration-300 hover:glow-blue group">
              <a
                href={strings.links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-accent-blue hover:text-accent-purple transition-colors duration-300"
              >
                <FaGlobe className="text-xl" />
                <span className="text-lg font-medium">{strings.links.portfolio}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CV

