import React from 'react'
import { RiReactjsLine, RiJavaLine,RiJavascriptLine,RiDatabase2Line,RiLeafFill,RiCss3Line,RiHtml5Line} from 'react-icons/ri'
import { motion } from "framer-motion"


const iconVariants = (duration)=>({
    initial:{y:-10},
    animate:{
        y: [10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})
function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>

        <div className='flex items-center flex-wrap justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"

            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavaLine className='text-7xl text-red-700'/>
            </motion.div>
            <motion.div
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiHtml5Line className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiCss3Line className='text-7xl text-blue-400'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiJavascriptLine className='text-7xl text-yellow-300'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiDatabase2Line className='text-7xl text-cyan-400'/>
            </motion.div>
        
           
            <motion.div 
             variants={iconVariants(2.7)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiLeafFill className='text-7xl text-green-500'/>
            </motion.div>
             
        </div>
      
    </div>
  )
}

export default Technologies
