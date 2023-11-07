import Image from "next/image";
import '@/styles/main-content/skills.css'

const Skills = () => {
  return (
    <section className='skills-section'>
      <h1 className='skills-title'>Skills</h1>
      <div className='skills-list'>
        <div className='skills-list__item'>
          <Image
            alt='Html'
            src={'/skills/html.png'}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>HTML</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='JavaScript'
            src={'/skills/javascript.png'}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>JavaScript</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='Css'
            src={'/skills/css.png'}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>CSS</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='Node-js'
            src={'/skills/node-js.png'}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>Node.js</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='React'
            src={'/skills/react.png'}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>React</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='Nextjs'
            src={'/skills/nextjs.png'}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>Next.js</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='MongoDb'
            src={'/skills/mysql.png'}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>MySQL</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='MongoDb'
            src={'/skills/mongodb.png'}
            height={80}
            width={80}
            className='skills-list__item__icon'
          />
          <p>MongoDb</p>
        </div>
      </div>
    </section>
  )
}

export default Skills;