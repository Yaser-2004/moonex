import { useEffect, useState } from 'react'
import './App.css'
import FAQ from './Section/FAQ/FAQ'
import Footer from './Section/Footer/Footer'
import HeroS from './Section/HeroS/HeroS'
import Section2 from './Section/Section2/Section2'
import Section3 from './Section/Section3/Section3'
import Loader from './Components/Loader/Loader'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Listen for when the entire page has loaded
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className='box-border m-0 p-0'>
      {isLoading ? <Loader /> : 
        <>
          <HeroS />
          <Section2 />
          <Section3 />
          <FAQ />
          <Footer />
        </>
      }
    </div>
  )
}

export default App
