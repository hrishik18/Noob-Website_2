import { useColorMode, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }
    return (
        <IconButton
            color={iconColor[colorMode]}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
        />
    )
}
export default DarkModeSwitch