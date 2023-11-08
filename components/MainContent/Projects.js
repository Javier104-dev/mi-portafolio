import '@/styles/main-content/projects.css'
import projects from '@/app/data/projects';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className='projects-section' id='projects'>
      <h1 className='projects-title'>Proyectos</h1>
      <div>
        {projects.map((project, i) => (
          <div key={i} className='projects-list__card'>
            <a
              href={project.repository}
              target='_blank'
              rel='noopener noreferrer'
              className='projects-list__card__link'
            >
              <Image
                src={'/projects/ahorcado.png'}
                alt='Icon Github'
                height={100}
                width={120}
                className='projects-list__card__photo'
              />
            </a>
            <div>
              <h1 className='projects-list__card__name'>{project.name}</h1>
              <p className='projects-list__card__description'>{project.introduction}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;