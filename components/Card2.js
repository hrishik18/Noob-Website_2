import { Box, Image, useColorModeValue, Text, Flex, Badge, Spacer, HStack } from "@chakra-ui/react"
import NextLink from 'next/link'

export const Card2 = ({ children, title,link, CrdImg }) => {
    return (
        // <Box maxW='sm' borderRadius='lg' overflow='hidden' w='100' p={3} boxShadow={'2xl'} rounded={'md'} textAlign="center"
        //     bg={useColorModeValue('#F6E05E', '#4A5568')}
        // >
        <Box>
            <Image
                borderRadius='12px'
                src={CrdImg}
                alt={title}
                placeholder="blur"
            />
            <NextLink href={`${link}`} passHref>
                <Text m={1} fontSize={20} fontWeight='bold' as='em'
                    _hover={{
                        textDecoration: 'underline',
                    }}
                    cursor="pointer"
                >
                    {title}
                </Text>
            </NextLink>

            <Text fontSize={15} fontWeight="">{children}</Text>
        </Box>

        /* </Box> */
    )
}