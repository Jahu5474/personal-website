import { Box, Text, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import RepoCard from './repoCard';

const RepoList = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const username: string = 'Jahu5474';
            const repoName: string = 'Creative-Eyecare-Centre';
            const token = process.env.GITHUB_ACCESS_TOKEN;

            const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            const data = await response.json();

            setRepos([data]);
        };

        fetchRepos();
    }, []);

    return (
        <Box mt={8}>
            {repos.map((repo: any) => (
                <RepoCard
                    key={repo.id}
                    name={repo.name}
                    description={repo.description}
                    stars={repo.stargazers_count}
                    forks={repo.forks_count}
                />
            ))}
        </Box>
    );
};

export default RepoList;