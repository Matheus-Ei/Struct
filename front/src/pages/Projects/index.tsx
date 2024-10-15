// Modules
import * as T from "./types";

// Components
import Project from "./Project";
import Actions from "./Actions";

// HOCs
import withLoader from "../../HOCs/withLoader";

// Services
import Request from "../../services/Request";

// Hooks
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

    useEffect(() => {
        const backUrl = process.env.REACT_APP_BACK_URL as string;
        Request.get(`${backUrl}/project/get-all`).then((response) => {
            setProjects(response);
        });
    }, []);

    return (
        <div>
            {projects.length !== 0 ? (
                <div>{getProjects(projects, setProjects)}</div>
            ) : (
                <p>Big things will be here soon...</p>
            )}
            <Actions />
        </div>
    );
};

export default withLoader(Projects, "small");
