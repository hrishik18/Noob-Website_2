import { Box,Fade,Button } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


export function FadeEx() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
          Fade
        </Box>
      </Fade>
    </>
  )
}