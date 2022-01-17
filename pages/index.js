import { Box, Flex, Container, Image, useColorModeValue,Heading,
     Spacer,Text } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Nav from '../components/Nav'

function Home() {
    return (
       <Layout>
           <Container>                 
              <Flex align="center" justify="center" p={[2,3,5]} direction="column">
                  <Box m={[2,3,5]} p={5}>
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxH={200}
                            display="block"
                            borderRadius="full"
                            src="me.png"
                            alt="Profile image"
                        />
                  </Box>  
                    <Spacer/>
                    <Box>
                        <Heading as="h1">
                            <Text
                            color={useColorModeValue('#1A365D','black')}>
                                Hrishik Sancheti </Text> 
                        </Heading>
                    </Box>
                    </Flex>  
                <Box
                    borderRadius="lg"
                    mb={6}
                    p={3}
                    textAlign="center"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                >
                   About me 
                </Box>
            </Container>
       </Layout>
    )
}

export default Home
