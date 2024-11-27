import TableRow from "../../Components/tableRow/TableRow"
import Logo1 from '../../assets/Group 10.png'
import Logo2 from '../../assets/2560px-Uniswap_Logo_and_Wordmark 1.png'
import bg from '../../assets/bg.png'
import { useRef } from "react"
import { useScroll } from "framer-motion"


const Section2 = () => {

  const element = useRef(null);
  const {scrollYProgress} = useScroll({
      target: element,
      offset: ['start 0.9', 'start 0.25']
  })

  const texts = ["1 . Point no one", "2 . Point no two this", "2 . Point no two this", "2 . Point no two this", "2 . Point no two this"];

  return (
    <div className="pr-20 pl-20 pb-20 max-sm:pl-5 max-sm:pr-5">
      <div className="Section2">
        <p className="text-white font-custom text-3xl font-extrabold pb-16 max-sm:text-center">Why <span className="text-yellow-400">MoonEX</span>?</p>
      </div>

      <div className="p-10 max-sm:p-2 backdrop-blur-md bg-opacity-30 bg-gray-800 rounded-xl">
      <div className="overflow-auto">
        <table className="w-full border-spacing-14 font-custom ml-auto mr-auto pl-20 pr-20">
          <thead className="border-b-1 border-gray-500">
              <tr>
                  <th className="text-yellow-400 text-sm max-sm:w-2/4 text-2xl max-sm:text-xl font-normal pl-8 text-left border-r-1 border-gray-500 max-sm:pt-4 max-sm:pb-4">Comparision</th>
                  <th className="sm:border-r-1 max-sm:w-2/4 border-gray-500 max-sm:pt-4 max-sm:pb-4"><img className="w-48 max-sm:h-8 max-sm:w-26 object-cover ml-auto mr-auto" src={Logo1} alt="" /></th>
                  <th className="hidden sm:table-cell"><img className="w-36 h-8 text-sm ml-auto mr-auto object-cover" src={Logo2} alt="" /></th>
              </tr>
          </thead>

          <tbody className="divide-y divide-gray-500" ref={element}>
              {texts.map((text, i) => {
                const start = i/5;
                const end = start+(1/5);
                return <TableRow text={text} key={i} range={[start, end]} progress={scrollYProgress}/>
              })}
          </tbody>
        </table>
      </div>

      <img className="top-0 absolute" src={bg} alt="" />
      </div>
    </div>
  )
}

export default Section2
