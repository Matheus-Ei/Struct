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

export interface FooterProps {
    type: "Singular" | "Compost" | "Monopage";
    modules: Array<string>;
    projectId: number;
    setProjects: SetProjectsType;
}
