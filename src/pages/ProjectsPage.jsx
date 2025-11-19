import Projects from '../components/Projects'

const ProjectsPage = ({ projects, onAddProject }) => {
  return (
    <div className="min-h-screen pt-20">
      <Projects projects={projects} onAddProject={onAddProject} />
    </div>
  )
}

export default ProjectsPage

