import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

function Home() {
    const list = { hidden: { opacity: 0 } }
    const item = { hidden: { x: -10, opacity: 0 } }
    return (
        <MotionBox
            variants={list}
            height='100px'
            bg='green.300'
            drag='x'
            dragConstraints={{ left: -500, right: 150 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
            <motion.li variants={item}   />
            <motion.li variants={item} />
            <motion.li variants={item} />
            </MotionBox>
            
        
    )
}
export default Home;