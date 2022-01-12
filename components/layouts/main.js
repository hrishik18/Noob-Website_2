import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'


const Layout = ({children,router}) => {
    return (
        <Box as="Layout">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                Home Page
            </Head>
            <Container maxW="container.md">
              {children}
            </Container>
        </Box>
    )
}

export default Layout;