import {
    Box, Flex, Container, Image, useColorModeValue, Heading,
    Spacer, Text, Stack, UnorderedList, List, ListItem
} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
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
                                    mt={1}>Anime </Text>          
                            </Box>
                            <Text
                            color='purple.400'
                                p={[2, 2, 4]} textStyle="h3">
                                One piece, Demon slayer,
                                Classroom of elite....
                            </Text>
                        </ListItem>
                        <ListItem ml={10} p={[2, 2, 4]}>
                            <Box display={{ md: 'flex' }} >
                                <Text textStyle="h3"   
                                    mt={1}>
                                    <span>Music: From Pop to Classical, Rock to Country ,Love it all</span></Text>
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
                            Blogs
                        </Box>
                        <Text as='h1' >Coming Soon!!!</Text>
                    </Box>
                    <Box>
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
