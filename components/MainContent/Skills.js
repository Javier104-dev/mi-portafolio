import Image from 'next/image';
import '@/styles/main-content/skills.css'
import skills from '@/app/data/skills';

const Skills = () => {
  return (
    <section className='skills-section' id="skills">
      <h1 className='skills-title'>Skills</h1>
      <div className='skills-list'>
        {skills.map((e, i) => (
          <div key={i} className='skills-list__item'>
          <Image
            alt={e.name}
            src={'/skills/' + e.img}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>{e.name}</p>
        </div>
        ))}
      </div>
      <a className='layer-link'>
        <div className='layer'/>
      </a>
    </section>
  )
}

export default Skills;