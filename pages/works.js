import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import videoPlayer01 from '../public/images/mywork/videoPlayer01.png'
import Minecraft01 from '../public/images/mywork/minecraft01.webp'
import cryptohex01 from '../public/images/mywork/cryptohex01.png'
// import thumbHandGesture from '../public/images/works/handgesture-home.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="videoPlayerApp"
            title="Rapid-API Video Player "
            thumbnail={videoPlayer01}
          >
            React JS application consisting of stunning video sections, custom
            categories, channel pages, and, most importantly, you can play
            videos straight from your Video Clone App
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="cryptohex"
            title=" CryptoHex"
            thumbnail={cryptohex01}
          >
            Cryptocurrency App: State Management using Redux Toolkit, creating
            charts using Chart.js, and fetching data from multiple sources using
            RapidAPI
          </WorkGridItem>
        </Section>
        
        <Section>
          <WorkGridItem
            id="Minecraft"
            title="Minecraft"
            thumbnail={Minecraft01}
          >
            Playable Minecraft clone using React, JavaScript, and Three.js.
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem
            id="handgesture"
            thumbnail={thumbHandGesture}
            title="Hand Gesture Recognition"
          >
            A machine learning Model that will Recognize Hand Gestures in real
            time using CNN and automated using Raspberry pi.
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
