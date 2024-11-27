import {Accordion, AccordionItem} from "@nextui-org/react";
import './FAQ.css'
import bg1 from '../../assets/bg1.png'

const FAQ = () => {
    const defaultContent = "You receive your rewards in ETH instantly once someone you refer makes a transaction!";
  return (
    <div className="FAQ pl-20 pr-20 mt-20 max-sm:pl-5 max-sm:pr-5 pb-40 font-raleway relative">
      {/* <img className="relative -left-40 opacity-80" src={bg1} alt="" /> */}
      <div className="FAQdiv rounded-xl backdrop-blur-md bg-gray-800 bg-opacity-30 p-8 max-sm:p-2 max-sm:w-full pb-4 text-2xl text-center w-9/12 mr-auto ml-auto max-sm:m-0">
        <p className="text-yellow-400 font-custom font-extrabold border-b-1 border-gray-700 pb-8 max-sm:pt-4">FAQs</p>

        <Accordion className="text-white text-left max-sm:text-xl">
            <AccordionItem key="1" aria-label="Accordion 1" title="How do I get a Referral Code?">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" title="Do I get rewarded in tokens or ETH when I refer buyers?">
                {defaultContent}
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" title="How do I get a Referral Code?">
                {defaultContent}
            </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ
