import {
    Box, Flex, Container, Image, useColorModeValue, Heading,
    Spacer, Text, Stack, UnorderedList, ListItem, SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import { Skill } from '../components/TP_skills'
import Paragraph from '../components/para'
import { FadeEx } from '../components/fadex'
import { useDisclosure } from '@chakra-ui/react'



function Home() {
    return (
        <Layout>
            <Container>
                <Flex align="center" justify="center" p={[2, 3, 5]} direction="column">
                    <Box m={[2, 3, 5]} p={5}>
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
                    <Spacer />
                    <Box>
                        <Heading >
                            <Text
                                textStyle='h2'
                                p={5}
                                mb={[1, 2, 4]}
                                color={useColorModeValue('#1A365D', 'black')}>
                                Hrishik Sancheti </Text>
                        </Heading>
                    </Box>
                </Flex>
                <Stack>
                    <Box
                        mb={6}
                        borderRadius="lg"
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    >
                        About me
                    </Box>
                    <Paragraph>
                        I am a Second year Computer Science Engineering Student at K.J Somaiya. I want to be the best of myself.
                        I always have the want to dig at new things and master them. I believe in my own hardwork, the way and the results.
                        I am currently intrested in web, app dev and Cyber Security.
                    </Paragraph>
                    <Box
                        mb={6}
                        borderRadius="lg"
                        p={3}
                        textAlign="center"
                        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    >
                        I like
                    </Box>
                    <UnorderedList spacing={3}>
                        <ListItem ml={10} p={[2,2,4]}>
                            <Box display={{ md: 'flex' }}>
                                <Text
                                color='red.300'
                                    textStyle="h3"
                                    as='u'
                                    mt={1}>ANIME</Text>          
                            </Box>
                        </ListItem>
                        <ListItem ml={10} p={[2, 2, 4]}>
                            <Box display={{ md: 'flex' }} >
                                <Text
                                    color='blue.300'
                                    textStyle="h3"
                                    as='u'
                                    mt={1}>MUSIC </Text> 
                            </Box>
                        </ListItem>
                        <ListItem ml={10} p={[2, 2, 4]}>
                            <Box display={{ md: 'flex' }}>
                                <Text
                                    color='red.300'
                                    textStyle="h3"
                                    as='u'
                                    mt={1}>Guitar</Text>
                            </Box>
                        </ListItem>
                        <ListItem ml={10} p={[2, 2, 4]}>
                            <Box display={{ md: 'flex' }} >
                                <Text
                                    color='blue.300'
                                    textStyle="h3"
                                    as='u'
                                    mt={1}>Football </Text>
                            </Box>
                        </ListItem>
                    </UnorderedList>                   
                    <Box>
                        <Box
                            mb={6}
                            borderRadius="lg"
                            p={3}
                            textAlign="center"
                            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                        >
                           SKILLS
                        </Box>
                         <Skill/>
                        <Box
                            mb={6}
                            borderRadius="lg"
                            p={3}
                            textAlign="center"
                            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
