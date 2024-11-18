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

    return (
        <>
            <div>
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
                    classNameEditing="cursor-text select-none bg-base-200 rounded-btn py-1 px-2 w-fit text-2xl font-bold outline-none"
                    classNameNotEditing="cursor-pointer select-none w-fit text-3xl font-bold outline-none"
                />
            </div>

            <div>
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
                    classNameEditing="cursor-text select-none bg-base-200 rounded-btn py-1 px-2 w-11/12 text-md outline-none"
                    classNameNotEditing="cursor-pointer select-none w-11/12 text-lg outline-none"
                />
            </div>
        </>
    );
};

export default Informations;
