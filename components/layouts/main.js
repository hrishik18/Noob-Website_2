import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Nav from '../Nav';
import Footer from '../Footer';


const Layout = ({children,router}) => {
    return (
        <Box as="Layout">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                Home Page
            </Head>
            <Nav/>
            <Container maxW="container.md">
              {children}
            </Container>
            <Footer/>
        </Box>
    )
}

export default Layout;