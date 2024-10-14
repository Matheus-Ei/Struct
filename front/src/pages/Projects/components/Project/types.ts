// Libraries
import { Dispatch, SetStateAction } from "react";

export type SetProjectsType = Dispatch<
    SetStateAction<
        Array<{
            id: number;
            title: string;
            description: string;
            type: "Singular" | "Monopage" | "Compost";
            module: Array<string>;
        }>
    >
>;

export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    type: "Singular" | "Compost" | "Monopage";
    modules: Array<string>;
    setProjects: SetProjectsType;
}
