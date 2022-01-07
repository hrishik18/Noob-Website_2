import { Box,SimpleGrid } from "@chakra-ui/react"

export default function Shadu() {       
    return (
        <SimpleGrid
            bg='pink'
            columns={{ sm: 2, md: 4 }}
            spacing='8'
            p='10'
            textAlign='center'
            rounded='lg'
            color='black'
        >
            <Box boxShadow='2xl' p='10' rounded='md' bg='pink.400'>
               box1
            </Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>                      
            <Box  p='6' rounded='md'>
                
            </Box>
            <Box boxShadow='2xl' p='10' rounded='md' bg='white'>
                box2
            </Box>
            <Box  p='6' rounded='md'>
                
            </Box>
            <Box boxShadow='outline' p='6' rounded='md' bg='white'>
                Outline
            </Box>
            <Box boxShadow='inner' p='6' rounded='md' bg='white'>
                Inner
            </Box>
        </SimpleGrid>
        
    )
}
