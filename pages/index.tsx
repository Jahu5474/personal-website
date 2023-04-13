import React from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Heading, Text, Stack, Container, Button, Box, Divider, Flex } from '@chakra-ui/react'
import { NextPage } from 'next';
import style from '../styles/app.module.css';
import Project from '@/components/project';

const Home: NextPage = () => {
  return (
    <>
      <Box pt="20">
        <Flex as="section" id="about" flexDir="column" alignItems="center" minH="100vh" mb="5em" mx="2em">
          <Flex flexDir="column" maxW="896px" w="full">
            <Flex flexDir="column">
              <Heading pt={3} pb={4}>
                <Text as="span" color="blue.400">
                  Jasper Huynh,
                </Text>
                <Text>Full Stack Developer</Text>
              </Heading>
              <Text w="auto" id="about">
                I always enjoyed creating and using the creative side of me and through a friend I discovered the world of programming. As a child, technology have always peaked my interest and would always play around with them. I gained experience in coding by doing a web development online bootcamp in the summer of 2022. I am located in Vancouver, BC, Canada, where I will continue to grind hard and create things out of thin air with codes.
              </Text>
              <Project />

            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Home;
