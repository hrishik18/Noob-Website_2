import { Box, Flex, Container, Image, useColorModeValue,Heading,
     Spacer,Text } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

function Home() {
    return (
       <Layout>
            <Container>             
              <Flex align="center" justify="space-evenly">
                  <Box>
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            borderRadius="full"
                            src="me.png"
                            alt="Profile image"
                        />
                  </Box>
                    
                    <Spacer/>
                    <Box>
                        <Heading as="h1" variant="page-title">
                           Hrishik Sancheti 
                        </Heading>
                    </Box>
                    </Flex>  
            </Container>
       </Layout>
    )
}

export default Home
