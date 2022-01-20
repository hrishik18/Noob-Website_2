import { Box, Flex, Container, Image, useColorModeValue,Heading,
     Spacer,Text,Stack } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Paragraph from '../components/para'      

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
                            src="me2.png"
                            alt="Profile image"
                        />
                  </Box>  
                    <Spacer/>
                    <Box>
                        <Heading as="h1">
                            <Text p={5} mb={[1,2,4]}
                            color={useColorModeValue('#1A365D','black')}>
                                Hrishik Sancheti </Text> 
                        </Heading>
                    </Box>
                    </Flex>  
                    <Stack>
                      <Box
                    variant='abc'
                        textAlign='center' 
                        borderRadius='lg'  
                >
                   About me 
                </Box>
                <Paragraph>
                    I am a Second year Computer Science Engg. I am ready to accept challenges
                        and my improve myself in everyway possible would love to work with a highly
                        esteemed company.
                        Applying for interships as this will give me the platform to utilize and enhance
                        my technical skills for mutual growth and benefit of the company.
                </Paragraph>
                    <Box
                        variant='abc'
                        textAlign='center'
                        borderRadius='lg'
                    >
                        I love
                    </Box>
                    <Text as='h1' >To be filled!!</Text>
                    <Box>
                        <Box
                            variant='abc'
                            textAlign='center'
                            borderRadius='lg'
                        >
                            Blogs
                        </Box>
                        <Text as='h1' >Coming Soon!!!</Text>
                    </Box>
                    <Box>
                        <Box
                            variant='abc'
                            textAlign='center'
                            borderRadius='lg'
                        >
                            Projects
                        </Box>
                        <Text as='h1' >Needs to be added</Text>
                    </Box>
                    </Stack>
                

            </Container>
       </Layout>
    )
}

export default Home
