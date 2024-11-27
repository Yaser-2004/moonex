import { useTransform } from 'framer-motion';
import Tick from '../../assets/check_bold.png'
import Cross from '../../assets/close_small.png'
import {motion} from 'framer-motion'

const TableRow = (props) => {
  const opacity = useTransform(props.progress, props.range, [0, 1]);

  return (
    <motion.tr className="text-gray-400" style={{opacity: opacity}}>
        <td className='p-4 text-sm text-left max-sm:text-lg border-r-1 border-gray-500 whitespace-nowrap max-sm:pt-6 max-sm:pb-6'>{props.text}</td>
        <td className='p-4 text-sm text-left sm:border-r-1 border-gray-500 max-sm:pt-6 max-sm:pb-6'><img className='w-6 h-6 object-cover ml-auto mr-auto' src={Tick} alt="" /></td>
        <td className='p-4 text-sm text-left hidden sm:table-cell'><img className='w-10 h-10 object-cover ml-auto mr-auto' src={Cross} alt="" /></td>
    </motion.tr>
  )
}

export default TableRow
