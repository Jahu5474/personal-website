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
        >
          <Heading
            pt={3}
            pb={4}
          >
            <Text as="span" color="blue.400">
              Jasper Huynh,
            </Text>
            <Text>
              Full Stack Developer
            </Text>
          </Heading>
          <Text
            w="auto"
          >
            I always enjoyed creating and using the creative side of me and through a friend I discovered the world of programming. As a child, technology have always peaked my interest and would always play around with them. I gained experience in coding by doing a web development online bootcamp in the summer of 2022. I am located in Vancouver, BC, Canada, where I will continue to grind hard and create things out of thin air with codes.
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default Home;
