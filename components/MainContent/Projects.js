import '@/styles/main-content/projects.css'
import projects from '@/app/data/projects';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className='projects-section' id='projects'>
      <h1 className='projects-title'>Proyectos</h1>
      <div className='projects-list'>
        {projects.map((project, i) => (
          <div key={i} className='projects-list__card'>
            <div className='projects-list__card__content'>
              <div>
                <Image
                  src={'/projects/' + project.img}
                  alt='Icon Github'
                  height={110}
                  width={130}
                  className='projects-list__card__photo'
                />
              </div>
              <div>
                <h1 className='projects-list__card__name'>{project.name}</h1>
                <p className='projects-list__card__description'>{project.introduction}</p>
              </div>
            </div>
            <a
              className='layer-link'
              href={project.repository}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='layer'/>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;