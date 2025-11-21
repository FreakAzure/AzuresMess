import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const ContactPage = () => {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen pt-20 px-4 bg-dark-surface">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="bg-dark-card p-8 rounded-lg border-[0.5px] border-gray-900/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:eli@freakazure.com"
              className="flex flex-col items-center p-6 bg-dark-surface rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-blue/50 transition-all duration-300 hover:glow-blue group"
            >
              <FaEnvelope className="text-3xl text-accent-blue mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">{t.contact.email}</h3>
              <p className="text-gray-400 text-sm text-center">
                eli@freakazure.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/azurescodeexperience/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-dark-surface rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-purple/50 transition-all duration-300 hover:glow-purple group"
            >
              <FaLinkedin className="text-3xl text-accent-purple mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">{t.contact.linkedin}</h3>
              <p className="text-gray-400 text-sm text-center">
                {t.contact.linkedinDescription}
              </p>
            </a>

            <a
              href="https://github.com/FreakAzure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-dark-surface rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-pink/50 transition-all duration-300 hover:glow-pink group"
            >
              <FaGithub className="text-3xl text-accent-pink mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">{t.contact.github}</h3>
              <p className="text-gray-400 text-sm text-center">
                {t.contact.githubDescription}
              </p>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 p-8 rounded-lg border-[0.5px] border-accent-blue/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.contact.cta.title}
          </h3>
          <p className="text-gray-300 mb-6">
            {t.contact.cta.description}
          </p>
          <a
            href="mailto:eli@freakazure.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 transform hover:scale-105 glow-blue"
          >
            {t.contact.cta.button}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

