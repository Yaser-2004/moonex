import { Suspense, lazy } from 'react'
import './App.css'

const FAQ = lazy(() => import('./Section/FAQ/FAQ'))
const Footer = lazy(() => import('./Section/Footer/Footer'))
const HeroS = lazy(() => import('./Section/HeroS/HeroS'))
const Section2 = lazy(() => import('./Section/Section2/Section2'))
const Section3 = lazy(() => import('./Section/Section3/Section3'))
const Loader = lazy(() => import('./Components/Loader/Loader'))

function App() {

  return (
    <div className='box-border m-0 p-0'>
      <Suspense fallback={<Loader />}>
        <HeroS />
        <Section2 />
        <Section3 />
        <FAQ />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
