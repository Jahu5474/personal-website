import { Box, Heading, Text } from "@chakra-ui/react";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

interface Props {
    repositories?: Repository[];
    error?: string;
}

const Repositories = ({ repositories, error }: Props) => {
    if (error) {
        return (
            <Box>
                <Text color="red.500">{error}</Text>
            </Box>
        );
    }

    if (!repositories) {
        return (
            <Box>
                <Text>Loading...</Text>
            </Box>
        );
    }

    return (
        <Box>
            <Heading as="h2" size="lg" mb={4}>
                My Github Repositories
            </Heading>
            {repositories.map((repo) => (
                <Box key={repo.name} mb={4}>
                    <Heading as="h3" size="md">
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                            {repo.name}
                        </a>
                    </Heading>
                    <Text>{repo.description}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default Repositories;
