// HOCs
import withLoader from "HOCs/withLoader";
import { useEffect, useState } from "react";
import Request from "services/Request";

// Components
import Project from "./Project";

const Projects = () => {
    const [projects, setProjects] = useState<
        Array<{
            title: string;
            description: string;
            type: "Singular" | "Compost" | "Monopage";
            module: Array<string>;
            id: number;
        }>
    >([]);

    useEffect(() => {
        Request.get(
            (process.env.REACT_APP_BACK_URL as string) + "/project/get-all"
        ).then((item) => {
            setProjects(item);
        });
    }, []);

    return (
        <div className="flex flex-col gap-12 items-center justify-start w-full h-[90vh]">
            <h1 className="font-bold text-lg">Projects</h1>
            {projects.length === 0 ? (
                <div className="flex items-start justify-center w-full h-full">
                    <p className="text-base-content">
                        Big things will be here soon...
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-4 overflow-y-scroll h-[60vh] w-fit pr-5">
                    {projects.map((item, index) => {
                        return (
                            <Project
                                title={item.title}
                                description={item.description}
                                type={item.type}
                                modules={item.module}
                                projectId={item.id}
                                setProjects={setProjects}
                                key={index}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default withLoader(Projects, true);
