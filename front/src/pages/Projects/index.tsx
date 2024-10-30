import { useParams } from "react-router-dom";

const Projects = () => {
    const { id } = useParams();

    return <div>{id}</div>;
};

export default Projects;
