import { extendTheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'
const styles = {
    global: props => ({
        body: {
            bg: mode('#F6AD55', '#2D3748')(props)
        }
    })
}

const textStyles = {
    h2: {
        fontSize: ['30px','32px', '52px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-1%',
    },
    h3: {
        fontSize: ['20px', '24px'],
        fontWeight: 'normal',
        lineHeight: '110%',
        letterSpacing: '-1%',
    },
    pepe: {
        fontSize: ['20px', '32px'],
        fontWeight: 'semibold',
        lineHeight: '110%',
        letterSpacing: '-1%',
        fontfamily: `'Neonderthaw', cursive`
    }
}

const fonts = {
    //body: "Roboto,Segoe UI,sans-serif",
    // heading: "Roboto, serif",
    body:" 'Open Sans','sans-serif'",
    mono: "Menlo, monospace",
}

const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    lg: "62em",
})
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}
const ctheme = extendTheme({ textStyles, fonts, styles, config })
export default ctheme