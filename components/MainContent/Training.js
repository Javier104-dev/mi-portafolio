import Image from 'next/image';
import '@/styles/main-content/training.css'
import training from '@/app/data/training';

const Training = () => {
  return (
    <section className='training-section' id='training'>
      <h1 className='training-title'>Formación</h1>
      {training.map((e, i) => (
        <div key={i} className='training-card'>
          <div>
            <Image
              alt={e.name}
              src={'/training/' + e.img}
              height={120}
              width={140}
              className='training-card__photo'
            />
          </div>
          <div>
            <h1 className='training-card__name'>
              {e.name}
            </h1>
            <div className='training-card__description'>
              <p>{'Desde: ' + e.start}</p>
              <p>{'Hasta: ' + e.end}</p>
            </div>
          </div>
          <a
            className='layer-link'
            href={e.page}
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='layer'/>
          </a>
        </div>
      ))}
    </section>
  )
}

export default Training;