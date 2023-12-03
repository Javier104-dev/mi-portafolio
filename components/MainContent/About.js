import '@/styles/main-content/about.css'

const About = () => {
  return (
    <>
    <section className='about-section' id='about'>
      <h1 className='about-title'>Sobre Mí</h1>
      <p className='about-paragraph'>
        Comencé a estudiar programación a finales del 2021, encontré el curso <span className='about-paragraph__span'>r/Argentina Programa</span> de casualidad y me  animé a cursarlo, pero tuve que dejarlo por varios meses porque no me sentía preparado, pude retomarlo gracias al programa <span className='about-paragraph__span'>ONE de Oracle</span> donde aprendí mucho sobre lo básico de programación especialmente en el consumo de APIs y el Front, fue una gran ayuda para seguir avanzando.
      </p>
      <p className='about-paragraph'>
        Con <span className='about-paragraph__span'>Argentina Programa 4.0</span> pude capacitarme en el área que más me llama la atención: el <span className='about-paragraph__span'>Back-end</span>. Con todo lo aprendido puede seguir y terminar el curso de r/Argentina Programa, que para mi opinión es el más completo y se enfoca más en el Back-end y las buenas prácticas de programación que allí se usan.
      </p>
      <p className='about-paragraph'>
        Con todo lo que aprendí, siento que estoy preparado y tengo un nivel aceptable para poder trabajar, siempre trato de aprender y buscar las buenas prácticas que se usan actualmente. Mi siguiente paso es aprender TypeScript y seguir avanzando en la parte de seguridad de los servidores.
      </p>
    </section>
    </>
  )
}

export default About;