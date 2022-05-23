import Head from 'next/head'
import Hero from '../components/HomePage/Hero'
import Partners from '../components/HomePage/Partners'
import Artworks from '../components/HomePage/Artworks'
import Creators from '../components/HomePage/Creators'

const index = () => {
  return (
    <>
      <Head>
        <title>AloneNFT Demo Project</title>
        <meta name="description" content="AloneNFT Demo Project" />
      </Head>
      <Hero />
      <Partners />
      <Artworks />
      <Creators />
    </>
  )
}

export default index