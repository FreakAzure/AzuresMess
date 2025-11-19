import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { strings } from '../constants/strings'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="py-12 px-4 border-t border-dark-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">{strings.siteName}</h3>
            <p className="text-gray-400 text-sm">
              {strings.footer.tagline}
            </p>
          </div>
          
          <div className="flex gap-6">
            <a
              href={strings.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-200"
              aria-label={strings.hero.social.github}
            >
              <FaGithub size={24} />
            </a>
            <a
              href={strings.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors duration-200"
              aria-label={strings.hero.social.linkedin}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={strings.links.email}
              className="text-gray-400 hover:text-accent-blue transition-colors duration-200"
              aria-label={strings.hero.social.email}
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-dark-border text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            {strings.footer.madeWith} <FaHeart className="text-accent-purple" /> {strings.footer.in} {currentYear}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

