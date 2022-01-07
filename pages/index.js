import { Box, Text, Stack,Switch,FormControl,FormLabel } from '@chakra-ui/react'
import { motion } from "framer-motion"
import Image from 'next/image'
import sample from '../components/assets/sample.jpg'
import Shadu from '../components/Props/shadu'

const MotionBox = motion(Box)

function Home() {
    return (
        <Box bg='tomato' height='1000' border='10px' borderColor='green.200'>

            <Box
                bgImage="url('../components/assets/sample.jpg')"
                bgPosition="center"
                // bgRepeat="no-repeat"
                width="100"
                height="100"
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
            <Box p={5} border='5px' boxShadow='dark-lg' width={300} height={300} borderColor='black'>
                Card
            </Box>
            <Stack direction='row'>
                <Switch colorScheme='blue' size='md'/>
                <Switch colorScheme='teal' size='lg' />
            </Stack>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='email-alerts' mb='0'>
                    Enable email alerts?
                </FormLabel>
                <Switch id='email-alerts' />
            </FormControl>
         <Shadu/>
            <Text textShadow='1px 1px #ff0000' m='6'>
                Text with shadows
            </Text>
           
        </Box>
    )
}
export default Home;