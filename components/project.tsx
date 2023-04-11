// import { Box, Heading, Text, VStack } from '@chakra-ui/react';
// import { FaStar, FaCodeBranch } from 'react-icons/fa';
// import { getRepoInfo } from '../components/github';

// const Repo = () => {
//     return (
//         <>
//             <Box>
//                 <Heading>
//                     My Projects
//                 </Heading>
//                 {/* <VStack align="flex-start">
//                     <Heading>{repoInfo.name}</Heading>
//                     <Text>{repoInfo.description}</Text>
//                     <Box>
//                         <FaStar /> {repoInfo.stargazers_count} stars
//                     </Box>
//                     <Box>
//                         <FaCodeBranch /> {repoInfo.forks_count} forks
//                     </Box>
//                 </VStack> */}
//             </Box>
//         </>
//     );
// }

// export default Repo;



import { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { getRepoInfo } from '../components/github'

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

const Project = () => {
    const username: string = 'Jahu5474';
    const repoName: string = 'Creative-Eyecare-Centre';
    const token: any = process.env.GITHUB_ACCESS_TOKEN;

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

export default Project;
