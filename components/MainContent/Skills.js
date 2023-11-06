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
            height={100}
            width={100}
            className='skills-list__item__icon'
          />
          <p className="skills-list__item__name">HTML</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='JavaScript'
            src={'/skills/javascript.png'}
            height={100}
            width={100}
            className='skills-list__item__icon'
          />
          <p className="skills-list__item__name">JavaScript</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='Css'
            src={'/skills/css.png'}
            height={100}
            width={100}
            className='skills-list__item__icon'
          />
          <p className="skills-list__item__name">CSS</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='Node-js'
            src={'/skills/node-js.png'}
            height={100}
            width={100}
            className='skills-list__item__icon'
          />
          <p className="skills-list__item__name">Node.js</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='React'
            src={'/skills/react.png'}
            height={100}
            width={100}
            className='skills-list__item__icon'
          />
          <p className="skills-list__item__name">React</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='Nextjs'
            src={'/skills/nextjs.png'}
            height={100}
            width={100}
            className='skills-list__item__icon'
          />
          <p className="skills-list__item__name">Next.js</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='MongoDb'
            src={'/skills/mysql.png'}
            height={100}
            width={100}
            className='skills-list__item__icon'
          />
          <p className="skills-list__item__name">MySQL</p>
        </div>
        <div className='skills-list__item'>
          <Image
            alt='MongoDb'
            src={'/skills/mongodb.png'}
            height={100}
            width={100}
            className='skills-list__item__icon'
          />
          <p className="skills-list__item__name">MongoDb</p>
        </div>
      </div>
    </section>
  )
}

export default Skills;