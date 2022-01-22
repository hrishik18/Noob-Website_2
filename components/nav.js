import React from 'react'
import { Box, Flex, Button, boxShadow, transform, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import DarkModeSwitch from '../components/Dmswitch'

const Nav = ({ children }) => {
    return (
        <>
            <Flex
                position="fixed"
                direction="row"
                justify="space-between"
                wrap="wrap"
                align="center"
                justify="space-between"
                w="100%"
                css={{ backdropFilter: 'blur(10px)' }}
                zIndex={3}
                bg={useColorModeValue('#ffffff40', '#20202380')}
                as="nav"
                mt={0}
                px={[2, 6, 6]}
                py={2}
                mb={[0, 0, 8]}
                top={0}
                mx="auto"
                transition="all 200ms ease"
                _hover={
                    {
                        boxShadow: "md",
                        transform: "scale(1.02)",
                    }
                }
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: useColorModeValue('#B2F5EA', 'gray.300') }}>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button as="a" variant="solid" p={[1, 2, 4]} _hover={{ backgroundColor: useColorModeValue('gray.600', 'gray.300') }}>
                            Blog
                        </Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch />
            </Flex >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={useColorModeValue('#153e75', 'black')}
                color={useColorModeValue('black', 'white')}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Nav