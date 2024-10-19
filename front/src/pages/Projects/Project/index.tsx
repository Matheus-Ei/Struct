import Card from "components/Card";
import { Dispatch, SetStateAction } from "react";
import Actions from "./Actions";
import Header from "./Header";
import Information from "./Information";

// Components
interface ProjectProps {
    title: string;
    description: string;
    type: "Singular" | "Compost" | "Monopage";
    modules: Array<string>;
    projectId: number;
    setProjects: Dispatch<
        SetStateAction<
            Array<{
                title: string;
                description: string;
                type: "Singular" | "Compost" | "Monopage";
                module: Array<string>;
                id: number;
            }>
        >
    >;
}

const Project = ({
    title,
    description,
    type,
    modules,
    projectId,
    setProjects,
}: ProjectProps) => {
    return (
        <Card>
            <div className="flex flex-col items-center justify-between h-fit w-fit">
                <Header title={title} description={description} />

                <div className="flex flex-row justify-between w-full">
                    <Information type={type} modules={modules} />
                    <Actions projectId={projectId} setProjects={setProjects} />
                </div>
            </div>
        </Card>
    );
};

export default Project;
