import clsx from "clsx";
import EditableField from "components/EditableField";
import { projectsContext } from "pages/Dashboard/Projects";
import { useContext } from "react";
import Request from "services/Request";

interface InformationsProps {
    projectId: number;
    title: string | undefined;
    description: string | undefined;
}

const updateProject = async (
    title: string | undefined,
    description: string | undefined,
    projectId: number,
    refetch: () => void
) => {
    await Request.patch(`project/edit/${projectId}`, { title, description });
    refetch();
};

const Informations = ({ projectId, title, description }: InformationsProps) => {
    const context = useContext(projectsContext);
    if (!context) return null;
    const { refetch } = context;

    // Styles
    const titleCssEditing = clsx(
        "py-1 px-2 w-fit w-max-full",
        "bg-base-200 text-2xl font-bold",
        "rounded-btn outline-none break-all",
        "cursor-text select-none"
    );
    const titleCssNotEditing = clsx(
        "w-fit w-max-full",
        "text-3xl font-bold",
        "outline-none break-all",
        "cursor-pointer select-none"
    );
    const descriptionCssEditing = clsx(
        "bg-base-200 text-md",
        "outline-none break-all",
        "rounded-btn py-1 px-2 w-fit",
        "cursor-text select-none"
    );
    const descriptionCssNotEditing = clsx(
        "text-lg w-fit",
        "outline-none break-all",
        "cursor-pointer select-none"
    );

    return (
        <>
            <div className="w-3/4">
                <h3 className="text-xl font-bold italic">Title</h3>
                <EditableField
                    defaultValue={title}
                    onUpdate={async (newValue) =>
                        await updateProject(
                            newValue,
                            undefined,
                            projectId,
                            refetch
                        )
                    }
                    classNameEditing={titleCssEditing}
                    classNameNotEditing={titleCssNotEditing}
                />
            </div>

            <div className="w-3/4">
                <h3 className="text-xl font-bold italic">Description</h3>
                <EditableField
                    defaultValue={description}
                    onUpdate={async (newValue) =>
                        await updateProject(
                            undefined,
                            newValue,
                            projectId,
                            refetch
                        )
                    }
                    classNameEditing={descriptionCssEditing}
                    classNameNotEditing={descriptionCssNotEditing}
                />
            </div>
        </>
    );
};

export default Informations;
