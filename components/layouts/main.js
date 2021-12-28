import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'


const main = ({children,router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Title>Home Page</Title>
            </Head>
            <Container maxW="container.md" pt={14}>
              {children}
            </Container>
        </Box>
    )
}

export default main;