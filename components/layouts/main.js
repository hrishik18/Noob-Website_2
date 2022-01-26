import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Nav from '../Nav';
import Footer from '../Footer';


const Layout = ({children,router}) => {
    return (
        <Box as="Layout">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
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
