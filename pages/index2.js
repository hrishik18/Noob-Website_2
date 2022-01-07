import { Box, Button, Text, Stack, Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Image from 'next/image'
//import sample from '../components/assets/sample.jpg'
import sample from '../public/sample.jpg'
import Shadu from '../components/Props/shadu'
import Pos from '../components/Props/pos'
import Pseudo from '../components/Props/pseudo'

const MotionBox = motion(Box)

function Home1() {
    return (
        <Box height='1000' border='10px' borderColor='green.200'>

            <Box
                bgImage={sample}
                bgPosition="center"
                width="100"
                height="100"
                border='5px'
                borderColor='gray.200'
                p={100}
            >
                Image is being seen
            </Box>
            <Pseudo />
            <Box p={5} border='5px' boxShadow='dark-lg' width={300} height={300} borderColor='black'>
                Card
            </Box>
            <Button m="50px" borderRightRadius="1">Button 1</Button>
            <Shadu />
            <Text textShadow='1px 1px #ff0000' m='6'>
                Text with shadows
            </Text>
            <Pos />
        </Box>
    )
}
export default Home1;