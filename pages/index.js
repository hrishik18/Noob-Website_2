import { Box } from '@chakra-ui/react'
import { motion, useMotionValue, useTransform } from "framer-motion"
import Gradu from '../components/Props/gradu'

const MotionBox = motion(Box)

function Home() {
    return (
        <Box m={[2, 3]}>
            <MotionBox
            height='100px'
            bg='green.300'
            drag='x'
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
                <Box textStyle='h1' m={[2, 3]} p={25} pl={650}>Text</Box>
        </MotionBox>
                <Gradu/>
        </Box>
    )
}
export default Home;