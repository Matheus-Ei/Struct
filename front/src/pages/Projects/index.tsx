// Modules
import * as S from "./styles";
import * as T from "./types";

// Components
import Project from "./components/Project";
import Actions from "./components/Actions";

// HOCs
import withLoader from "../../HOCs/withLoader";

// Services
import Request from "../../services/Request";

// Hooks
import { useTheme } from "../../hooks/useTheme";
import { useEffect, useState } from "react";

const getProjects = (projects: any, setProjects: T.SetProjectsType) => {
    return projects.map((item: any, index: number) => {
        return (
            <Project
                id={item.id}
                title={item.title}
                description={item.description}
                type={item.type}
                modules={item.module}
                key={index}
                setProjects={setProjects}
            />
        );
    });
};

const Projects = () => {
    const [projects, setProjects] = useState<T.ProjectsType>([]);
    const theme = useTheme();

    useEffect(() => {
        const backUrl = process.env.REACT_APP_BACK_URL as string;
        Request.get(`${backUrl}/project/get-all`).then((response) => {
            setProjects(response);
        });
    }, []);

    return (
        <S.Body>
            {projects.length !== 0 ? (
                <S.Grid
                    style={{
                        borderBottomColor: theme.semi,
                    }}
                >
                    {getProjects(projects, setProjects)}
                </S.Grid>
            ) : (
                <p style={{ color: theme.middle }}>
                    Big things will be here soon...
                </p>
            )}
            <Actions />
        </S.Body>
    );
};

export default withLoader(Projects, "small");
