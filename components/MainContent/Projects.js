import '@/styles/main-content/projects.css'
import projects from '@/app/data/projects';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className='projects-section'>
      <h1 className='projects-title'>Proyectos</h1>
      <div className='projects-list'>
        {projects.map((project, i) => (
          <div key={i} className='card__background'>
            <div className='projects-list__card'>
              <div>
                <h1 className='projects-list__card__name'>{project.name}</h1>
                <p className='projects-list__card__description'>{project.introduction}</p>
              </div>
              <a
                href={project.repository}
                target='_blank'
                rel='noopener noreferrer'
                className='projects-list__card__link'
              >
                <Image
                  src={'/projects/icon-github.png'}
                  alt='Icon Github'
                  height={50}
                  width={50}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;