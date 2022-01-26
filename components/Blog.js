import { Box, useColorModeValue,SimpleGrid } from "@chakra-ui/react"
import { Card } from "./Card"

export const Blog = ({ children, title, CrdImg }) => {
    return (
        <Box>
            <Box
                mb={6}
                borderRadius="lg"
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            >
                Blogs
            </Box>
            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <Card title={"Hashing of Different types"} CrdImg="hash.png" ></Card>
                <Card title={"Burpsite Walk though "} CrdImg="hash.jpg" ></Card>
                <Card title={"The is an example text to see how the card fits the overflowing and a long sentense i hope this works out somehow , keep your finger crossed "} CrdImg="hash.png" ></Card>
            </SimpleGrid>

        </Box>
    )
}