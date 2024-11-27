import './App.css'
import FAQ from './Section/FAQ/FAQ'
import Footer from './Section/Footer/Footer'
import HeroS from './Section/HeroS/HeroS'
import Section2 from './Section/Section2/Section2'
import Section3 from './Section/Section3/Section3'

function App() {

  return (
    <div className='box-border m-0 p-0'>
      <HeroS />
      <Section2 />
      <Section3 />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
