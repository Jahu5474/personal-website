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
      >
        <Heading
          pt={3}
          textAlign="center"
        >
          Jasper Huynh
        </Heading>
        <Box
          display="flex"
          justifyContent="center"
        >
          <Image src="/images/jasper.jpg" alt="jasper" width={150} height={150} className={style.me} />
        </Box>
      </Container>
    </>
  )
}

export default Home;
