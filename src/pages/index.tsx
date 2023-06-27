import Head from 'next/head'

import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Media } from '@/components/sections/Media'
import { WhyLeadster } from '@/components/sections/WhyLeadster'

export default function Landing() {
  return (
    <>
      <Head>
        <title>Leadster - O futuro da geração de leads</title>
        <meta
          name="description"
          content="Conheça a Leadster, um Chatbot de Marketing Conversacional para Aumentar a Geração de Leads Qualificados no seu Site. Visite e saiba mais!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Media />
      <WhyLeadster />
      <Footer />
    </>
  )
}
