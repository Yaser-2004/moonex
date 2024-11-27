import Nav from "../../Components/Navbar/Navbar"
import "../../App.css"
import { Button } from "@nextui-org/react"
import bgtop from '../../assets/bgtop.png'




const Hero = () => {
  return (
    <div className="Hero pr-20 pl-20 max-sm:pl-5 max-sm:pr-5 pb-96 max-sm:pb-28 relative">
      <Nav />
      <img className="absolute -top-40 -left-40" src={bgtop} alt="" />
      <div>
        <p className="text-white mt-36 max-sm:mt-24 text-7xl max-sm:text-3xl font-custom font-extrabold sm:-mb-10">Trusted Multi-Chain</p>
        <p className="text-white text-7xl font-custom font-extrabold max-sm:text-3xl"><span className="text-yellow-400">DEX</span> Platform</p>
        <p className="text-gray-400 font-custom text-2xl max-sm:text-xl">Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
        <Button className="max-sm:w-32 max-sm:h-12 max-sm:text-lg bg-gradient-to-r from-yellow-500 to-yellow-300 max-sm:mt-10 max-sm:mb-4 mt-14 mr-10 max-sm:mr-3 rounded-3xl text-black font-raleway font-bold w-44 h-11" href="#" variant="flat">
            Connect Wallet
        </Button>
        <Button className="max-sm:w-32 max-sm:h-12 max-sm:text-lg rounded-3xl text-yellow-400 bg-transparent border-2 border-yellow-400 font-bold font-raleway w-44 h-11" href="#" variant="flat">
            Trade Crypto
        </Button>
      </div>
    </div>
  )
}

export default Hero


