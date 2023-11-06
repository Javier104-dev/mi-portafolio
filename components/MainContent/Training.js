import Image from 'next/image';
import '@/styles/main-content/training.css'

const Training = () => {
  return (
    <section className='training-section'>
      <h1 className='training-title'>Formación</h1>
      <div className='training-courses'>
        <div className='training-courses__card'>
          <Image
            alt='Html'
            src={'/training/argentina_programa.jpg'}
            height={200}
            width={240}
            className='training-courses__card__photo'
          />
          <a
            href='https://argentinaprograma.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='training-courses__card__link'
          >
            r/Argentina Programa
          </a>
          <p>Inicio: 5 Mayo 2022</p>
          <p>Finalización: 19 Octubre 2023</p>
        </div>
        <div  className='training-courses__card'>
          <Image
            alt='Html'
            src={'/training/oracle.jpg'}
            height={200}
            width={240}
            className='training-courses__card__photo'
          />
          <a
            href='https://www.oracle.com/ar/education/oracle-next-education/'
            target='_blank'
            rel='noopener noreferrer'
            className='training-courses__card__link'
          >
            Programa ONE Oracle
          </a>
          <p>Inicio: 9 Agosto 2022</p>
          <p>Finalización: 16 Diciembre 2022</p>
        </div>
        <div  className='training-courses__card'>
          <Image
            alt='Html'
            src={'/training/argentina_programa4.0.jpg'}
            height={200}
            width={240}
            className='training-courses__card__photo'
          />
          <a
            href='https://www.argentina.gob.ar/economia/conocimiento/argentina-programa'
            target='_blank'
            rel='noopener noreferrer'
            className='training-courses__card__link'
          >
            Argentina Programa 4.0
          </a>
          <p>Inicio: 28 Febrero 2023</p>
          <p>Finalización: 4 Octubre 2023</p>
        </div>
      </div>
    </section>
  )
}

export default Training;