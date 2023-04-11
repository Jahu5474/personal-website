import { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';

const useFetchRepoData = (username: string, repoName: string, token: string) => {
    const [repoData, setRepoData] = useState<any>(null);

    useEffect(() => {
        const fetchRepoData = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setRepoData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRepoData();
    }, [username, repoName, token]);

    return repoData;
};

const MyComponent = () => {
    const username: string = 'your_username';
    const repoName: string = 'your_repository_name';
    const token: string = 'your_personal_access_token';

    const repoData = useFetchRepoData(username, repoName, token);

    if (!repoData) {
        return (
            <Flex justify="center" align="center" height="100vh">
                <Text>Loading...</Text>
            </Flex>
        );
    }

    return (
        <Flex direction="column" align="center">
            <Text fontSize="xl" fontWeight="bold">{repoData.full_name}</Text>
            <Text fontSize="md">{repoData.description}</Text>
            <Text fontSize="md">Language: {repoData.language}</Text>
            <Text fontSize="md">Stars: {repoData.stargazers_count}</Text>
        </Flex>
    );
};

export default MyComponent;
