import Point from "components/Point";
import { Dispatch, SetStateAction } from "react";
import Request from "services/Request";

interface ActionsProps {
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

const handleDelete = ({ projectId, setProjects }: ActionsProps) => {
    Request.delete(
        (process.env.REACT_APP_BACK_URL as string) +
            "/project/delete/" +
            projectId
    ).then((response) => {
        response &&
            setProjects((prev) => {
                return prev.filter((item: any) => item.id !== projectId);
            });
    });
};

const handleEdit = (projectId: number) => {};

const handleOpen = (projectId: number) => {};

const Actions = ({ projectId, setProjects }: ActionsProps) => {
    return (
        <div className="flex flex-row items-end justify-center gap-2">
            <Point
                icon="IoOpenOutline"
                library="io5"
                onClick={() => handleOpen(projectId)}
            />
            <Point
                icon="MdModeEdit"
                library="md"
                onClick={() => handleEdit(projectId)}
            />
            <Point
                icon="MdDelete"
                library="md"
                onClick={() => handleDelete({ projectId, setProjects })}
            />
        </div>
    );
};

export default Actions;
