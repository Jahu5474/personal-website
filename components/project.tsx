import { GetStaticProps } from "next";
import Repositories from "../components/Repositories";

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

interface Props {
    repositories: Repository[];
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch(`https://api.github.com/users/Jahu5474/repos?per_page=100`);
    const repositories = await response.json();

    return {
        props: {
            repositories,
        },
    };
};

const Home = ({ repositories }: Props) => {
    return (
        <div>
            <Repositories repositories={repositories} />
        </div>
    );
};



export default Home;
