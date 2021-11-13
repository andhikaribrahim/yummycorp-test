import Head from 'next/head'
import styled from 'styled-components';

const Title = styled.div.attrs(() => ({
  className: `block text-xl text-gray-600 mt-12 font-semibold text-center uppercase leading-normal`
}))``;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row items-center flex-1 flex-shrink-0">
        <div className="container min-h-screen">
          <Title>
            This is nextjs boilerplate
          </Title>
        </div>
      </div>
    </div>
  )
}
