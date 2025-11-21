import { FaExternalLinkAlt } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Projects = ({ projects }) => {
  const { t } = useLanguage()
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.projects.title.split(' ')[0]} <span className="gradient-text">{t.projects.title.split(' ')[1]}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-card rounded-lg border-[0.5px] border-gray-900/50 overflow-hidden hover:border-accent-blue/70 transition-all duration-300 transform hover:scale-105 hover:glow-blue group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-surface border-[0.5px] border-accent-purple/50 rounded-full text-xs text-accent-purple hover:border-accent-pink hover:text-accent-pink transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent-blue hover:text-accent-blue-light transition-colors"
                    >
                      <FaExternalLinkAlt /> {t.projects.links.viewProject}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

