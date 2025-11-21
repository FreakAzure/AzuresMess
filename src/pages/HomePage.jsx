import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaCloud, FaServer, FaLink } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const HomePage = () => {
  const { t } = useLanguage()
  
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'cloud':
        return <FaCloud className="text-3xl text-accent-blue" />
      case 'backend':
        return <FaServer className="text-3xl text-accent-purple" />
      case 'blockchain':
        return <FaLink className="text-3xl text-accent-pink" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center text-center py-20 mb-16">
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-dark-card border-[0.5px] border-gray-900/50 glow-blue">
              <span className="text-sm text-accent-blue font-medium">{t.hero.welcome}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="gradient-text">{t.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            {t.hero.title}
          </p>
          
          <p className="text-lg text-gray-400 mb-8">
            {t.hero.subtitle}
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/cv"
              className="px-8 py-3 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 transform hover:scale-105 glow-blue"
            >
              {t.hero.buttons.viewCV}
            </Link>
            <Link
              to="/projects"
              className="px-8 py-3 border-2 border-accent-purple rounded-lg font-semibold hover:bg-accent-purple/10 hover:border-accent-pink transition-all duration-300 hover:glow-purple"
            >
              {t.hero.buttons.viewProjects}
            </Link>
            <a
              href="mailto:eli@freakazure.com"
              className="px-8 py-3 border-2 border-accent-blue rounded-lg font-semibold hover:bg-accent-blue/10 transition-all duration-300 hover:glow-blue"
            >
              {t.hero.buttons.contact}
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/FreakAzure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-all duration-200 hover:scale-110"
              aria-label={t.hero.social.github}
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/azurescodeexperience/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-all duration-200 hover:scale-110"
              aria-label={t.hero.social.linkedin}
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="mailto:eli@freakazure.com"
              className="text-gray-400 hover:text-accent-blue transition-all duration-200 hover:scale-110"
              aria-label={t.hero.social.email}
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t.hero.about.title}
          </h2>
          <div className="bg-dark-card p-8 rounded-lg border-[0.5px] border-gray-900/50 space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.hero.about.paragraph1}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.hero.about.paragraph2}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.hero.about.paragraph3}
            </p>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t.hero.highlights.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.hero.highlights.items.map((item, index) => (
              <div
                key={index}
                className="bg-dark-card p-6 rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-blue/50 transition-all duration-300 hover:glow-blue group"
              >
                <div className="flex justify-center mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 p-8 rounded-lg border-[0.5px] border-accent-blue/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.hero.cta.title}
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              {t.hero.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cv"
                className="px-6 py-3 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 transform hover:scale-105 glow-blue"
              >
                {t.hero.buttons.viewCV}
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 border-2 border-accent-purple rounded-lg font-semibold hover:bg-accent-purple/10 transition-all duration-300 hover:glow-purple"
              >
                {t.hero.buttons.viewProjects}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage

