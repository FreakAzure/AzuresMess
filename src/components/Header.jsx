import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { strings } from '../constants/strings'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'CV', path: '/cv' },
    { name: 'Contacto', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/80 backdrop-blur-md border-b border-dark-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            {strings.siteName}
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-accent-blue transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={strings.header.menuToggle}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            {menuItems.map((item) => (
              <li key={item.name}>
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
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header

