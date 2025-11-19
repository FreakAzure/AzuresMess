import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CVPage from './pages/CVPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Este Portfolio',
      description: 'Mi espacio personal en internet, construido con React y Tailwind CSS. Diseño mobile first con dark mode.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Azure%27s+Mess',
      link: '#',
      github: '#'
    }
  ])

  const addProject = (project) => {
    const newProject = {
      ...project,
      id: projects.length + 1
    }
    setProjects([...projects, newProject])
  }

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
              element={<ProjectsPage projects={projects} onAddProject={addProject} />} 
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

