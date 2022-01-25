import { Box, Image, useColorModeValue,Text } from "@chakra-ui/react"

export const Card = ({ children,title,CrdImg }) => {
    return (
        <Box maxW='sm' borderRadius='lg' overflow='hidden' w='100' p={2} boxShadow={'2xl'} rounded={'md'} textAlign="center" 
            bg={useColorModeValue('#F56565', '#4A5568')}>
                <Image
                    borderRadius='lg'
                    src={CrdImg}
                    alt={title}
                />
            <Text m={[2, 2, 3]} fontSize={20}>
                {title}
            </Text>
            <Text fontSize={14}>{children}</Text>
        </Box>
    )
}