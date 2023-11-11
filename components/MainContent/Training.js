import Image from 'next/image';
import '@/styles/main-content/training.css'

const Training = () => {
  return (
    <section className='training-section' id='training'>
      <h1 className='training-title'>Formación</h1>
      <div className='training-card'>
        <div>
          <Image
            alt='Argentina Programa'
            src={'/training/argentina_programa.jpg'}
            height={120}
            width={140}
            className='training-card__photo'
          />
        </div>
        <div>
          <h1 className='training-card__name'>
            r/Argentina Programa
          </h1>
          <div className='training-card__description'>
            <p>Inicio: 5 Mayo 2022</p>
            <p>Finalizado: 19 Octubre 2023</p>
          </div>
        </div>
        <a
          className='layer-link'
          href='https://argentinaprograma.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='layer'/>
        </a>
      </div>
      <div className='training-card'>
        <div>
          <Image
            alt='Oracle'
            src={'/training/oracle.jpg'}
            height={120}
            width={140}
            className='training-card__photo'
          />
        </div>
        <div>
          <h1 className='training-card__name'>
            Programa ONE oracle
          </h1>
          <div className='training-card__description'>
            <p>Inicio: 9 Agosto 2022</p>
            <p>Finalizado: 16 Diciembre 2022</p>
          </div>
        </div>
        <a
          className='layer-link'
          href='https://www.oracle.com/ar/education/oracle-next-education/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='layer'/>
        </a>
      </div>
      <div className='training-card'>
        <div>
          <Image
            alt='Argentina Programa 4.0'
            src={'/training/argentina_programa4.0.jpg'}
            height={120}
            width={140}
            className='training-card__photo'
          />
        </div>
        <div>
          <h1 className='training-card__name'>
            Argentina Programa 4.0
          </h1>
          <div className='training-card__description'>
            <p>Inicio: 28 Febrero 2023</p>
            <p>Finalizado: 4 Octubre 2023</p>
          </div>
        </div>
        <a
          className='layer-link'
          href='https://www.argentina.gob.ar/economia/conocimiento/argentina-programa'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='layer'/>
        </a>
      </div>
    </section>
  )
}

export default Training;