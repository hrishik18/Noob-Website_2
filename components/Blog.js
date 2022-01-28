import { Box, useColorModeValue,SimpleGrid } from "@chakra-ui/react"
import { Card } from "./Card"

export const Blog = ({ children, title,CrdImg }) => {
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
                <Card title={"Different Hash Function"} time={"Nov21"} 
                des={"This blog shows the difference between various Hash functions such as SHAs,MDs"} CrdImg="hash.png" ></Card>
                <Card title={"Burpsite Walk though "} CrdImg="hash.jpg" ></Card>
            </SimpleGrid>

        </Box>
    )
}