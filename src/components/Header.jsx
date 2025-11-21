import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { t, language, toggleLanguage } = useLanguage()

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/80 backdrop-blur-md border-b border-dark-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            {t.siteName}
          </Link>
          
          <div className="flex items-center gap-6">
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
              {t.header.menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-gray-300 hover:text-accent-blue transition-colors duration-200 ${
                      isActive(item.path) ? 'text-accent-blue' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-700 hover:border-accent-blue transition-colors duration-200 text-gray-300 hover:text-accent-blue"
              aria-label="Toggle language"
            >
              <span className="text-sm font-medium">{language === 'es' ? 'ES' : 'EN'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-accent-blue transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={t.header.menuToggle}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            {t.header.menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block text-gray-300 hover:text-accent-blue transition-colors duration-200 ${
                    isActive(item.path) ? 'text-accent-blue' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  toggleLanguage()
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left text-gray-300 hover:text-accent-blue transition-colors duration-200 px-4 py-2 rounded-lg border border-gray-700 hover:border-accent-blue"
              >
                {language === 'es' ? 'English' : 'Español'}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header

