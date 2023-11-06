import '@/styles/header/header.css'
import Image from 'next/image';

const Header = () => {
  return (
    <header className='header'>
      <section className='hero-container'>
        <div>
          <h1 className='hero-presentation__title'>Javier Anibal Villca</h1>
          <p className='hero-presentation__subtitle'>Programación Web Full Stack</p>
          <p className='hero-presentation__paragraph'>
            Estoy formándote en Programación Full Stack y actualmente estoy participando en el proyecto ONE en Alura Latam y estoy realizando el curso r/Argentina Programa
          </p>
          <nav className='hero-nav'>
            <ul className='asd'>
              <li>
                <a href='#' className='hero-nav__link'>Sobre Mi</a>
              </li>
              <li>
                <a href='#' className='hero-nav__link'>Skills</a>
              </li>
              <li>
                <a href='#' className='hero-nav__link'>Formación</a>
              </li>
              <li>
                <a href='#' className='hero-nav__link'>Proyectos</a>
              </li>
              <li>
                <a href='#' className='hero-nav__link'>Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className='hero-networks'>
          <li>
            <a
              href='https://www.linkedin.com/in/javier-villca-1ab624214/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                alt='Linkedin icon'
                src='/social-networks/linkedin.png'
                height={30}
                width={30}
              />
            </a>
          </li>
          <li>
            <a href='https://github.com/Javier104-dev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                alt='Github icon'
                src='/social-networks/github.png'
                height={30}
                width={30}
              />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/javiervillca11/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                alt='Instagram icon'
                src='/social-networks/instagram.png'
                height={30}
                width={30}
              />
            </a>
          </li>
        </ul>
      </section>
    </header>
  )
}

export default Header;