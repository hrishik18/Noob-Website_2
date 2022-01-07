import { Box,Button } from "@chakra-ui/react"

import React from 'react'

function Pseudo() {
    return (
        <Box>
            <Button
                colorScheme="teal"
                _hover={{
                    background: "white",
                    color: "teal.500",
                }}
            >
                Hover me
            </Button>

            <Box
                role="group"
            >
                <Box
                    _hover={{ fontWeight: 'semibold' }}
                    _groupHover={{ color: 'tomato' }}
                >
                </Box>
            </Box>
        </Box>
    )
}

export default Pseudo
