import { ChakraProvider } from '@chakra-ui/react'
import ctheme from '../lib/theme'


function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={ctheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
