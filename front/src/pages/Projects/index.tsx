// Modules
import * as S from "./styles";

// Components
import Project from "./components/Project";

// HOCs
import withLoader from "../../HOCs/withLoader";

const Projects = () => {
    return (
        <S.Body>
            <Project />
        </S.Body>
    );
};

export default withLoader(Projects, "small");
