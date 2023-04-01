import React from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Heading, Text, Stack, Container, Button, Box } from '@chakra-ui/react'
import { NextPage } from 'next';
import style from '../styles/app.module.css'



const Home: NextPage = () => {
  return (
    <>
      <Container
        h="100vh"
        maxW="container.md"
        centerContent
      >
        <Heading
          pt={3}
          pb={4}
          textAlign="center"
        >
          Jasper Huynh
        </Heading>
        <Box
          display="flex"
          justifyContent="center"
          pb={4}
        >
          <Image src="/images/jasper.jpg" alt="jasper" width={150} height={150} className={style.me} />
        </Box>
        <Text>
          Hi, I'm just happy to be here and learn from the best.
        </Text>
      </Container>
    </>
  )
}

export default Home;
