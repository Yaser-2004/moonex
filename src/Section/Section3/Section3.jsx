import Card from "../../Components/Card/Card"
import dollar from '../../assets/Dollar.png'
import shield from '../../assets/Shield_Check.png'
import phone from '../../assets/Phone_Off.png'
import options from '../../assets/Options_3.png'
import {useScroll} from 'framer-motion'
import { useRef } from "react"

const Section3 = () => {

  const element = useRef(null);
  const {scrollYProgress} = useScroll({
      target: element,
      offset: ['start 0.9', 'start 0.25']
  })

  const emojis = [dollar, shield, phone, options];
  const heading = ["Cheapest TXs", "CerTIK", "No Contract Sells", "CrossDesk Support"];
  const text = ["Exchange popular digital currencies at the cheapest possible transaction price", "We are Audited by Certik. CertiK is the leading security-focused ranking platform to ", "No contract sells to fund the marketing wallets", "Exchange popular digital currencies at the cheapest possible transaction price"];

  return (
    <div className="Section3 pl-20 pr-20 pb-20 max-sm:pb-10 max-sm:pr-5 max-sm:pl-5">
      <p className="font-custom font-extrabold text-3xl text-white text-center mb-10">Our <span className="text-yellow-400">Features</span></p>
      <div className="flex justify-between flex-wrap" ref={element}>
        {emojis.map((emoji, i) => {
          const start = i/4;
          const end = start+(1/4);
          return <Card key={i} range={[start, end]} progress={scrollYProgress} emoji={emoji} heading={heading[i]} text={text[i]}/>
        })}
      </div>
    </div>
  )
}

export default Section3
