import '@/styles/header/header.css'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='header'>
      <section className='header-container'>
        <div>
          <h1>
            <Link href='/' className='header-presentation__title'>Javier Villca</Link>
          </h1>
          <p className='header-presentation__subtitle'>Programación Web Full Stack</p>
          <p className='header-presentation__paragraph'>
            Estoy formándote en Programación Full Stack y actualmente estoy participando en el proyecto ONE en Alura Latam y estoy realizando el curso r/Argentina Programa
          </p>
          <nav className='header-nav'>
            <ul className='asd'>
              <li>
                <a href='#about' className='header-nav__link'>Sobre Mi</a>
              </li>
              <li>
                <a href='#skills' className='header-nav__link'>Skills</a>
              </li>
              <li>
                <a href='#training' className='header-nav__link'>Formación</a>
              </li>
              <li>
                <a href='#projects' className='header-nav__link'>Proyectos</a>
              </li>
            </ul>
          </nav>
        </div>
        <ul className='header-networks'>
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