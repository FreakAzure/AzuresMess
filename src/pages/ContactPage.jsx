import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { strings } from '../constants/strings'

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 px-4 bg-dark-surface">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? ¡Estoy abierta a nuevas oportunidades!
          </p>
        </div>

        <div className="bg-dark-card p-8 rounded-lg border-[0.5px] border-gray-900/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={strings.links.email}
              className="flex flex-col items-center p-6 bg-dark-surface rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-blue/50 transition-all duration-300 hover:glow-blue group"
            >
              <FaEnvelope className="text-3xl text-accent-blue mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm text-center">
                {strings.links.email.replace('mailto:', '')}
              </p>
            </a>

            <a
              href={strings.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-dark-surface rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-purple/50 transition-all duration-300 hover:glow-purple group"
            >
              <FaLinkedin className="text-3xl text-accent-purple mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm text-center">
                Conectemos profesionalmente
              </p>
            </a>

            <a
              href={strings.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-dark-surface rounded-lg border-[0.5px] border-gray-900/50 hover:border-accent-pink/50 transition-all duration-300 hover:glow-pink group"
            >
              <FaGithub className="text-3xl text-accent-pink mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm text-center">
                Revisa mi código
              </p>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 p-8 rounded-lg border-[0.5px] border-accent-blue/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Listo para trabajar juntos?
          </h3>
          <p className="text-gray-300 mb-6">
            Estoy siempre interesada en proyectos desafiantes y oportunidades de colaboración. 
            No dudes en contactarme a través de cualquiera de los canales anteriores.
          </p>
          <a
            href={strings.links.email}
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-blue/50 transition-all duration-300 transform hover:scale-105 glow-blue"
          >
            Enviar Email
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

