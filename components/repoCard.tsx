import { Box, Text, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

const RepoCard = ({ name, description, stars, forks }: any) => {
    return (
        <Box boxShadow="lg" rounded="lg" bg="white" p={6} my={4}>
            <Heading as="h2" size="md" mb={2}>{name}</Heading>
            <Text color="gray.500" mb={4}>{description}</Text>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Text fontWeight="bold">{stars} stars</Text>
                <Text fontWeight="bold">{forks} forks</Text>
            </Box>
        </Box>
    );
};

export default RepoCard;