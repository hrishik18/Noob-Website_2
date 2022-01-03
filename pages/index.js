import { Box, Text } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Image from 'next/image'
import Gradu from '../components/Props/gradu'
import Gridu from '../components/Props/gridu'
import sample from '../components/assets/sample.jpg'

const MotionBox = motion(Box)

function Home() {
    return (
        <Box bg='' height='100'>
            <MotionBox
            zIndex={1}
            height='100px'
            bg='tomato'
            drag='x'
            dragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
                <Text p={8} align="center" m={[2, 3]}>Motion Box</Text>
        </MotionBox>

            <Box
                bgImage="url('../components/assets/sample.jpg')"
                bgPosition="center"
                bgRepeat="no-repeat"
                width={100}
                height={100}
            >
     <Text>Image is being seen </Text>
                </Box>
            <Image
                src={sample}
                alt="Picture of sample"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
        </Box>
    )
}
export default Home;