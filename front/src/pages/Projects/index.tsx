// Modules
import * as T from "./types";
import "./styles.css";

// Components
import Project from "./Project";
import Actions from "./Actions";

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
        <div
            className="flex-body fill-all"
            style={{ justifyContent: "flex-start", flexDirection: "column" }}
        >
            {projects.length !== 0 ? (
                <div
                    className="scroll-grid-2x2"
                    style={{
                        borderBottomColor: theme.semi,
                    }}
                >
                    {getProjects(projects, setProjects)}
                </div>
            ) : (
                <p style={{ color: theme.middle }}>
                    Big things will be here soon...
                </p>
            )}
            <Actions />
        </div>
    );
};

export default withLoader(Projects, "small");
