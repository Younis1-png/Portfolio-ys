import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Cryptohex">
    <Container>
      <Title>
        React Cryptocurrency App
        <Badge>2021</Badge>
      </Title>
      <P>
        Cryptocurrency App: State Management using Redux Toolkit, creating
        charts using Chart.js, and fetching data from multiple sources using
        RapidAPI
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Demo</Meta>
          <Link
            target="_blank"
            href="https://younis1-png.github.io/cryptohex-master/"
          >
            React Cryptocurrency App
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>github</Meta>
          <Link
            target="_blank"
            href="https://github.com/Younis1-png/cryptohex-master"
          >
            React Cryptocurrency App
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React,State Management using Redux, RapidAPI, CoinRanking API, Bing
            News Search{' '}
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Preview</Center>
      </Heading>

      <WorkImage src="/images/mywork/cryptohex01.png" alt="cryptohex" />
      <WorkImage src="/images/mywork/cryptohex03.png" alt="cryptohex" />
      <WorkImage src="/images/mywork/cryptohex04.png" alt="cryptohex" />
      <WorkImage src="/images/mywork/cryptohex05.png" alt="cryptohex" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
