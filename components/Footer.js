import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" fontSize="md" p={1}>
            &copy; {new Date().getFullYear()} Hrishik All Rights Reserved.
        </Box>
    )
}

export default Footer