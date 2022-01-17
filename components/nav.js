import React from 'react'
import {Box, Flex, Button,  useColorMode, useColorModeValue} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import DarkModeSwitch from '../components/Dmswitch'

const Nav = ({ children }) => {
    const { colorMode } = useColorMode()

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(50px);
        transition: height .5s, line-height .5s;
        `

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={useColorModeValue('blue.150','black')}
                as="nav"
                px={[2, 6, 6]}
                py={2}
                mb={[0, 0, 8]}
                mx="auto"
            >
                <Box>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: useColorModeValue('gray.600','gray.300') }}>
                            Home
                        </Button>
                    </NextLink>
                    <NextLink href="/blog" passHref>
                        <Button as="a" variant="ghost" p={[1, 2, 4]} _hover={{ backgroundColor: useColorModeValue('gray.600','gray.300') }}>
                            Blog
                        </Button>
                    </NextLink>
                </Box>
                <DarkModeSwitch />
            </StickyNav >
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={useColorModeValue('#153e75', 'black')}
                color={useColorModeValue('black','white')}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Nav