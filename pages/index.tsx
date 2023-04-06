import React from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Heading, Text, Stack, Container, Button, Box } from '@chakra-ui/react'
import { NextPage } from 'next';
import style from '../styles/app.module.css'



const Home: NextPage = () => {
  return (
    <>
      <Box>
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
            I grew a passion for coding through a friend which have helped me along during my journey in being a self taught full stack developer. As a child, technology have always peaked my interest and started coding during the summer of 2022.
          </Text>
          <Text>
            I am broke and need a job.
          </Text>
          <Text>
            Netflix hire me pls
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default Home;
