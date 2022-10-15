import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Minecraft">
    <Container>
      <Title>
        Minecraft <Badge>2022</Badge>
      </Title>
      <P>
        Currently it has 5 types of blocks: Grass, Wood, Log, Glass and Dirt.
        You switch blocks with numbers 1-5 on your keyboard. You navigate the
        world with the mouse and WASD. You can click to add blocks and Alt+Click
        to remove blocks. You world is stored in your browsers local storage.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo</Meta>
          <Link
            target="_blank"
            href="https://younis1-png.github.io/minecraft-with-threejs/"
          >
            Minecraft <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            target="_blank"
            href="https://github.com/Younis1-png/minecraft-with-threejs"
          >
            Minecraft <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, React.js, Three.js</span>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>
      <WorkImage src="/images/mywork/minecraft01.webp" alt="minecraft02" />
      <WorkImage src="/images/mywork/minecraft03.webp" alt="minecraft02" />
      <WorkImage src="/images/mywork/minecraft02.webp" alt="minecraft03" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
