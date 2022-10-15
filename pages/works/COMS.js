import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Projects = () => (
  <Layout title="Video Player App">
    <Container>
      <Title>
        Video Player App <Badge>2021-</Badge>
      </Title>
      <P>
        React JS application consisting of stunning video sections, custom
        categories, channel pages, and, most importantly, you can play videos
        straight from your Video player App!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo</Meta>
          <Link
            target="_blank"
            href="https://dulcet-crostata-5a56c6.netlify.app/"
          >
            Video Player App
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            target="_blank"
            href="https://github.com/Younis1-png/Video-player-app"
          >
            Video Player App
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML,CSS,React.js,Rapid-api</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/mywork/videoPlayer02.png" alt="COMS" />
      <WorkImage src="/images/mywork/videoPlayer03.png" alt="COMS" />
      <WorkImage src="/images/mywork/videoPlayer01.png" alt="COMS" />
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../../components/chakra'
