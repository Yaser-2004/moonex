import {motion, useTransform} from 'framer-motion'

const Card = (props) => {
  const opacity = useTransform(props.progress, props.range, [0, 1]);

  return (
    <motion.div style={{opacity: opacity}} className="Card backdrop-blur-md bg-gray-800 bg-opacity-30 p-10 w-72 rounded-xl mb-10 max-sm:w-full max-sm:text-center">
      <div className="circle rounded-full bg-gray-600 h-14 w-14 flex justify-center items-center mb-8 max-sm:mr-auto max-sm:ml-auto"><img className='w-8' src={props.emoji} alt="" /></div>
      <div>
        <p className="text-white mb-2">{props.heading}</p>
        <p className="text-gray-400">{props.text}</p>
      </div>
    </motion.div>
  )
}

export default Card
