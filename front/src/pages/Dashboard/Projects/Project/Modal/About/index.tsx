// Libraries
import Point from "components/Point";
import { projectsContext } from "pages/Dashboard/Projects";
import { useContext } from "react";
import { useQuery } from "react-query";

// Local
import Request from "services/Request";
import { TabProps } from "../types";
import Field from "./Field";

const updateProject = async (
    title: string | undefined,
    description: string | undefined,
    projectId: number,
    refetch: () => void
) => {
    await Request.patch(`project/edit/${projectId}`, { title, description });
    refetch();
};

const About = ({ projectId }: TabProps) => {
    const getProjectInfo = () => Request.get(`project/get/${projectId}`);
    const { data: project } = useQuery("project-info-about", getProjectInfo);

    const context = useContext(projectsContext);
    if (!context) return null;

    return (
        <div className="flex flex-col w-[96%] h-[75%] overflow-y-scroll overflow-x-hidden gap-8 mt-8 ml-8">
            <Field
                title="Title"
                value={project?.title}
                type="title"
                onUpdate={async (newValue) =>
                    await updateProject(
                        newValue,
                        undefined,
                        projectId,
                        context.refetch
                    )
                }
            />

            <Field
                title="Description"
                value={project?.description}
                type="description"
                onUpdate={async (newValue) =>
                    await updateProject(
                        undefined,
                        newValue,
                        projectId,
                        context.refetch
                    )
                }
            />

            <div className="relative flex flex-col items-start justify-center w-full right-4">
                <Point
                    text={`Users: ${project?.number_shared}`}
                    icon="FaUsers"
                    library="fa6"
                />

                <Point
                    text={`Pages: ${project?.number_pages}`}
                    icon="GoPaperclip"
                    library="go"
                />
            </div>
        </div>
    );
};

export default About;
