import axios from 'axios';

const token = process.env.GITHUB_ACCESS_TOKEN;
const owner = 'Jahu5474';
const repo = 'Creative-Eyecare-Centre';

export async function getRepoInfo() {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: {
            Authorization: `token ${token}`,
        },
    });
    return response.data;
}
