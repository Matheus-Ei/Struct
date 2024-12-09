// Local
import { ProjectsContext } from "pages/Dashboard/Projects";
import { useProject } from "services/project/useProject";
import Project from "services/project";
import Point from "components/Point";
import { TabProps } from "../../utils/types";
import Field from "./Field";
import useDefinedContext from "hooks/useDefinedContext";

const About = ({ projectId }: TabProps) => {
    const { data: project } = useProject(projectId);
    const { refetch } = useDefinedContext(ProjectsContext);

    const updateTitle = async (newValue: string) => {
        await Project.edit(projectId, newValue, undefined, refetch);
    };

    const updateDescription = async (newValue: string) => {
        await Project.edit(projectId, undefined, newValue, refetch);
    };

    return (
        <div className="flex flex-col w-[96%] h-[75%] overflow-y-scroll overflow-x-hidden gap-8 mt-8 ml-8">
            <Field
                title="Title"
                value={project?.title}
                type="title"
                onUpdate={updateTitle}
            />

            <Field
                title="Description"
                value={project?.description}
                type="description"
                onUpdate={updateDescription}
            />

            <div className="relative flex flex-col items-start justify-center w-full right-4">
                <Point
                    text={`Shared with ${project?.number_shared} users`}
                    icon="FaUsers"
                    library="fa6"
                />

                <Point
                    text={`Has ${project?.number_pages} pages`}
                    icon="GoPaperclip"
                    library="go"
                />
            </div>
        </div>
    );
};

export default About;
