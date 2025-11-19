import Projects from '../components/Projects'

const ProjectsPage = ({ projects }) => {
  return (
    <div className="min-h-screen pt-20">
      <Projects projects={projects} />
    </div>
  )
}

export default ProjectsPage

