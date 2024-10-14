// Services
import Request from "../../../../../../services/Request";

import * as T from "./types";

export const handleOpen = (projectId: number) => {};

export const handleDelete = (
    projectId: number,
    setProjects: T.SetProjectsType
) => {
    const backendUrl = process.env.REACT_APP_BACK_URL as string;
    Request.delete(`${backendUrl}/project/delete/${projectId}`);

    setProjects((prev: any) => {
        return prev.filter((item: any) => item.id !== projectId);
    });
};

export const handleEdit = (projectId: number) => {};

export const getTypeIcon = (type: "Singular" | "Compost" | "Monopage") => {
    let icon: string = "FaQuestion";
    let library: string = "fa";

    switch (type) {
        case "Singular":
            icon = "GoSingleSelect";
            library = "go";
            break;

        case "Compost":
            icon = "RiCheckboxMultipleBlankFill";
            library = "ri";
            break;

        case "Monopage":
            icon = "SiPronounsdotpage";
            library = "si";
            break;
    }

    return [icon, library];
};

export const getModuleIcon = (moduleName: string) => {
    let name: string = "FaQuestion";
    let library: string = "fa";

    switch (moduleName) {
        case "Notes":
            name = "FaNoteSticky";
            library = "fa6";
            break;

        case "List":
            name = "FaListAlt";
            library = "fa";
            break;
    }

    return { name, library };
};
