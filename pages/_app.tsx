import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../styles/theme'
import Navbar from '../components/navbar'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <ChakraProvider theme={customTheme}>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
