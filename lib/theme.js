import { extendTheme } from '@chakra-ui/react'
import { mode, createBreakpoints } from '@chakra-ui/theme-tools'
import {Boxy as Button} from '../components/Spbutton'
const styles = {
    global: props => ({
        body: {
            bg: mode('#2a69ac', '#2D3748')(props)
        }
    })
}
const components= {
    Button
  }

const colors = {
    paracolor:"green",
    textStyles: {
        h1: {
            fontSize: ['48px', '80px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        h2: {
            fontSize: ['36px', '48px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
        },
        h3: {
            fontSize: ['20px', '24px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
        },
    },
}
const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    lg: "62em",
})
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}
const theme = extendTheme({ colors,components, styles, config })
export default theme