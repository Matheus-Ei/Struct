// Modules
import * as S from "./styles";

// Components
import Project from "./components/Project";

// HOCs
import withLoader from "../../HOCs/withLoader";

// Services
import Request from "../../services/Request";
import { useEffect, useState } from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const backUrl = process.env.REACT_APP_BACK_URL as string;
        Request.get(`${backUrl}/project/get-all`).then((response) => {
            setProjects(response);
        });
    }, []);

    return (
        <S.Body>
            <S.Grid>
                {projects.map((item: any, index: number) => {
                    return (
                        <Project
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            type={item.type}
                            modules={item.module}
                            key={index}
                        />
                    );
                })}
            </S.Grid>
        </S.Body>
    );
};

export default withLoader(Projects, "small");
