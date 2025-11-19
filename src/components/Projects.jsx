import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaPlus, FaTimes } from 'react-icons/fa'
import { strings } from '../constants/strings'

const Projects = ({ projects, onAddProject }) => {
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    image: '',
    link: '',
    github: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const project = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim())
    }
    onAddProject(project)
    setFormData({
      title: '',
      description: '',
      technologies: '',
      image: '',
      link: '',
      github: ''
    })
    setShowForm(false)
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {strings.projects.title.split(' ')[0]} <span className="gradient-text">{strings.projects.title.split(' ')[1]}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {strings.projects.subtitle}
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-6 py-3 bg-dark-card border-[0.5px] border-gray-900/50 rounded-lg hover:bg-accent-purple/10 hover:border-accent-pink transition-all duration-300 hover:glow-purple"
          >
            {showForm ? (
              <>
                <FaTimes /> {strings.projects.buttons.cancel}
              </>
            ) : (
              <>
                <FaPlus /> {strings.projects.buttons.addProject}
              </>
            )}
          </button>
        </div>

        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 p-6 bg-dark-card rounded-lg border-[0.5px] border-gray-900/50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">{strings.projects.form.title}</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-surface border-[0.5px] border-gray-900/50 rounded-lg focus:outline-none focus:border-accent-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{strings.projects.form.description}</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-surface border-[0.5px] border-gray-900/50 rounded-lg focus:outline-none focus:border-accent-blue"
                  rows="3"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{strings.projects.form.technologies}</label>
                <input
                  type="text"
                  value={formData.technologies}
                  onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-surface border-[0.5px] border-gray-900/50 rounded-lg focus:outline-none focus:border-accent-blue"
                  placeholder={strings.projects.form.technologiesPlaceholder}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{strings.projects.form.imageUrl}</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-2 bg-dark-surface border-[0.5px] border-gray-900/50 rounded-lg focus:outline-none focus:border-accent-blue"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{strings.projects.form.projectLink}</label>
                  <input
                    type="url"
                    value={formData.link}
                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-surface border-[0.5px] border-gray-900/50 rounded-lg focus:outline-none focus:border-accent-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{strings.projects.form.github}</label>
                  <input
                    type="url"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    className="w-full px-4 py-2 bg-dark-surface border-[0.5px] border-gray-900/50 rounded-lg focus:outline-none focus:border-accent-blue"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 glow-blue hover:glow-purple"
              >
                {strings.projects.buttons.submit}
              </button>
            </form>
          </div>
        )}

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
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent-blue hover:text-accent-blue-light transition-colors"
                    >
                      <FaExternalLinkAlt /> {strings.projects.links.viewProject}
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-accent-blue transition-colors"
                    >
                      <FaGithub /> {strings.projects.links.code}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

