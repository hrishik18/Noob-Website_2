import { Box, useColorModeValue, SimpleGrid } from "@chakra-ui/react"
import { Card2 } from "./Card2"

export const Projectlist = ({ children, title, CrdImg }) => {
    return (
        <Box>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Card2 title={"School Management System"} link="https://github.com/hrishik18/School-Management-System"
                     CrdImg="stu.jpeg" >
                    It basicaly performs CRUD operation on the student's data
                    </Card2>
            </SimpleGrid>
        </Box>
    )
}   