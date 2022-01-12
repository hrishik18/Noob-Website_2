import { Box, Flex, Container, Image, useColorModeValue } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import Layout from '../components/layouts/main'

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
})
function Home() {
    return (
       <Layout>
            <Container>             
              <Flex>
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="me.png"
                        alt="Profile image"
                    />
                    </Flex>  
            </Container>
       </Layout>
    )
}

export default Home
