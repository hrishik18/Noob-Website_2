import { Heading,Container, Flex, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import { Projectlist } from "../components/Projectlist";

const Project = () => (
  <Layout>
    <Container>
      <Flex align="center" justify="center" mt={[2,3,5]} p={[2, 3, 5]} direction="column">
        <Heading textStyle='h2' m={4}>
        Works
      </Heading>
        <Projectlist/>
      </Flex>
    </Container>
  </Layout>
)

export default Project