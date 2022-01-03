import { Box, Text } from "@chakra-ui/react"

function Gradu() {
    return (
        <Box m={[2, 3]}>
            <Box w="100%" h="1000" bgGradient="linear(to-t, green.200, pink.500)" zIndex={-1} position='relative'></Box>
// adding radial gradient and color transitions
            <Box w="100%" h="300px" bgGradient="radial(gray.300, yellow.400, pink.200)" />

// adding the text gradient
            <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
            >
                Welcome to Chakra UI
            </Text>
        </Box>
    )
}
export default Gradu;