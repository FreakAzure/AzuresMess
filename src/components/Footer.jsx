import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-12 px-4 border-t border-dark-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">{t.siteName}</h3>
            <p className="text-gray-400 text-sm">
              {t.footer.tagline}
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href="https://github.com/FreakAzure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-200"
              aria-label={t.hero.social.github}
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/azurescodeexperience/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-200"
              aria-label={t.hero.social.linkedin}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:eli@freakazure.com"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-200"
              aria-label={t.hero.social.email}
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-border text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            {t.footer.madeWith} <FaHeart className="text-accent-purple" /> {t.footer.in} {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

