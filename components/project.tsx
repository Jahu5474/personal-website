import { Heading, Flex, Text, Card, SimpleGrid, CardHeader, CardBody, Button, CardFooter } from '@chakra-ui/react';
import React from 'react';

const Project = () => {
    const Size = 'md'

    return (
        <>
            <Heading
                mt={4}
                mb={4}
            >
                Projects
            </Heading>
            <Flex
                direction={{ base: "row", md: "column" }}

            >

                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(250px, 1fr))' height="300px">
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