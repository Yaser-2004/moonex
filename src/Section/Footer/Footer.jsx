import flogo from '../../assets/flogo.png'
import telegram from '../../assets/telegram.png'
import vector from '../../assets/Vector.png'
import twitter from '../../assets/Twitter.png'

const Footer = () => {
  return (
    <div className="Footer bg-gray-950 pt-20 pb-20 text-white font-raleway font-extrabold flex max-sm:flex-col max-sm:justify-center justify-between items-center max-sm:pl-0 max-sm:pr-0 pl-10 pr-20">
        <div className="f-logo max-sm:mb-10"><img className='w-40 max-sm:w-20' src={flogo} alt="" /></div>
        <div className="optionss max-sm:flex-col max-sm:w-full flex justify-between items-center w-2/5">
            <p className='max-sm:mb-2'>About Us</p>
            <p className='max-sm:mb-2'>Roadmap</p>
            <p className='max-sm:mb-2'>FAQs</p>
            <p className='max-sm:mb-10'>Contact Us</p>
        </div>
        <div className="contacts flex flex-col w-40 text-center">
            <p className='text-2xl mb-8'>Contact <span className='text-yellow-400'>Us</span></p>
            <div className='flex justify-between'>
                <img className='w-8 h-8' src={telegram} alt="" />
                <img className='w-8 h-8' src={vector} alt="" />
                <img className='w-8 h-8' src={twitter} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
