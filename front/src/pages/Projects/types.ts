import { Dispatch, SetStateAction } from "react";

export type ProjectType = Array<{
    title: string;
    description: string;
    type: "Singular" | "Compost" | "Monopage";
    module: Array<string>;
    id: number;
}>;

export type SetProjectType = Dispatch<
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

export interface ProjectProps {
    title: string;
    description: string;
    type: "Singular" | "Compost" | "Monopage";
    modules: Array<string>;
    projectId: number;
    setProjects: SetProjectType;
}

export interface ActionsProps {
    projectId: number;
    setProjects: SetProjectType;
}

export interface HeaderProps {
    title: string;
    description: string;
}

export interface InformationProps {
    type: "Singular" | "Compost" | "Monopage";
    modules: Array<string>;
}
