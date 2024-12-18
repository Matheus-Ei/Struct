// Local
import { ProjectsContext } from "pages/Dashboard/Page/ProjectsTab/context";
import EditableField from "components/EditableField";
import { ProjectType } from "services/project/type";
import useSafeContext from "hooks/useSafeContext";
import Project from "services/project";

interface HeaderProps {
    project: ProjectType | undefined;
}

const Header = ({ project }: HeaderProps) => {
    const { refetch } = useSafeContext(ProjectsContext);

    const update = async (newValue: string, field: "title" | "description") => {
        field === "title"
            ? await Project.edit(project?.id, newValue, undefined)
            : await Project.edit(project?.id, undefined, newValue);

        refetch();
    };

    return (
        <div className="flex flex-col gap-y-6 w-[96%]">
            <EditableField
                defaultValue={project?.title}
                onUpdate={(newValue) => update(newValue, "title")}
                className={{
                    edit: "text-2xl font-bold",
                    normal: "text-3xl font-bold break-all",
                }}
                title={{ text: "Title" }}
            />

            <EditableField
                defaultValue={project?.description}
                onUpdate={(newValue) => update(newValue, "description")}
                className={{ edit: "text-md", normal: "text-lg break-all" }}
                title={{ text: "Description" }}
            />
        </div>
    );
};

export default Header;
