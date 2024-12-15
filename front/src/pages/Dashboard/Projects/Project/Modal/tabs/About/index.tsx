// Local
import { ProjectsContext } from "pages/Dashboard/Projects/context";
import { useProject } from "services/project/useProject";
import Project from "services/project";
import { TabProps } from "../../utils/types";
import Field from "./Field";
import useSafeContext from "hooks/useSafeContext";
import MoreInfo from "./MoreInfo";

const About = ({ projectId }: TabProps) => {
    const { data: project } = useProject(projectId);
    const { refetch } = useSafeContext(ProjectsContext);

    const updateTitle = async (newValue: string) => {
        await Project.edit(projectId, newValue, undefined);
        refetch();
    };

    const updateDescription = async (newValue: string) => {
        await Project.edit(projectId, undefined, newValue);
        refetch();
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

            <MoreInfo project={project} />
        </div>
    );
};

export default About;
