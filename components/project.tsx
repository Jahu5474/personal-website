import { Heading, Flex, Text, Card, SimpleGrid, CardHeader, CardBody, Button, CardFooter, Box } from '@chakra-ui/react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

const Project = () => {
    const Size = 'md'


    return (
        <>
            <Heading
                mt={4}
                mb={4}
                size={Size}
            >
                Projects
            </Heading>
            <Flex
                direction={{ base: "row", md: "column" }}

            >

                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))' height="350px">
                    <Card>
                        <CardHeader>
                            <Heading size={Size} > Creative Eyecare Centre</Heading>
                        </CardHeader>
                        <Flex
                            justify="center"
                        >
                            <Image src="/images/creative-eyecare-centre.png" width={350} height={350} alt="creative" />
                        </Flex>

                        <CardBody>
                            <Text>
                                Created a website with front and backend functionality for a optomitrist company where I was working at as a part-time worker.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Link
                                href="https://github.com/Jahu5474/Creative-Eyecare-Centre"
                            >
                                <Button
                                    variant="outline"
                                    _hover={{
                                        bg: "blue.400",
                                        color: "white"
                                    }}
                                >
                                    View Repository
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size={Size}> GSC-2023</Heading>
                        </CardHeader>
                        <Flex>
                            <Image src="/images/gsc-2023.png" width={350} height={350} alt="google" />
                        </Flex>
                        <CardBody>
                            <Text>Participated in a UBC Google Solution Challenge in solving 17 world problems using Google technologies.
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <Link
                                href="https://github.com/Jahu5474/gsc-2023"
                            >
                                <Button
                                    variant="outline"
                                    _hover={{
                                        bg: "blue.400",
                                        color: "white"
                                    }}
                                >
                                    View Repository
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Heading size={Size}> Customer dashboard</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button>View here</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>


            </Flex>
        </>
    )
}

export default Project;