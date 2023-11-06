import '@/styles/main/main.css'
import About from '../MainContent/About';
import Skills from '../MainContent/Skills';
import Training from '../MainContent/Training';
import Projects from '../MainContent/Projects';

const Main = () => {
  return (
    <main className='main'>
      <About/>
      <Skills/>
      <Training/>
      <Projects/>
    </main>
  )
}

export default Main;