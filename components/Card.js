import { Box, Image, useColorModeValue, Text,Flex, Badge, Spacer, HStack} from "@chakra-ui/react"

export const Card = ({ children, title,time,des, CrdImg }) => {
    return (
        <Box maxW='sm' borderRadius='lg' overflow='hidden' w='100' p={3} boxShadow={'2xl'} rounded={'md'} textAlign="center"
            bg={useColorModeValue('#F6E05E', '#4A5568')}
            >
            <Image
                borderRadius='lg'
                src={CrdImg}
                alt={title}
            />
            <HStack>
                <Badge borderRadius='full' px='2' colorScheme='teal'>
                    {time}
                </Badge>
                <Spacer/>
            <Text m={1} fontSize={20} fontWeight='bold' as='em'
                
                _hover={{
                    textDecoration: 'underline',
                }}
                >
                {title}
            </Text>
            </HStack>
                <Text fontSize={15} fontWeight="">{des}</Text>
            

            <Text fontSize={14}>{children}</Text>
        </Box>
    )
}