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
      title: 'Hedera Watcher',
      description: 'Visualizador de transacciones de la red Hedera en tiempo real. Dashboard interactivo con estadísticas, búsqueda avanzada y soporte multi-red (Mainnet/Testnet).',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Hedera API'],
      image: generateThumbioUrl('https://hwatch.freakazure.com'),
      link: 'https://hwatch.freakazure.com',
      github: 'https://github.com/FreakAzure/HederaWatcher'
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

