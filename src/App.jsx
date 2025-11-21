import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CVPage from './pages/CVPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import { generateThumbioUrl } from './utils/thumbio'

function App() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Hedera Alert System',
      description: 'Sistema de monitoreo y alertas en tiempo real para wallets y transacciones de Hedera. Configura alertas personalizadas para balances, transacciones y tokens. Recibe notificaciones por email, webhooks o push cuando ocurren eventos específicos en tus wallets.',
      technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Hedera Mirror Node API'],
      image: generateThumbioUrl('https://halert.freakazure.com'),
      link: 'https://halert.freakazure.com'
    },
    {
      id: 2,
      title: 'Hedera Wallet Analyzer',
      description: 'Aplicación web moderna para analizar wallets de Hedera. Visualiza balances HBAR, tokens fungibles con valores estimados, NFTs con metadata completa, historial de transacciones, y genera reportes PDF. Incluye gráficos interactivos, sistema de favoritos, filtros avanzados, y análisis de colecciones NFT.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Hedera SDK', 'CoinGecko API', 'Sentx API'],
      image: generateThumbioUrl('https://wanalyzer.freakazure.com'),
      link: 'https://wanalyzer.freakazure.com'
    },
    {
      id: 3,
      title: 'Hedera Watcher',
      description: 'Visualizador de transacciones de la red Hedera en tiempo real. Dashboard interactivo con estadísticas, búsqueda avanzada y soporte multi-red (Mainnet/Testnet).',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Hedera API'],
      image: generateThumbioUrl('https://hwatch.freakazure.com'),
      link: 'https://hwatch.freakazure.com'
    }
  ])

  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route 
              path="/projects" 
              element={<ProjectsPage projects={projects} />} 
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

