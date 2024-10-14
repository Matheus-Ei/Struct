// Libraries
import { Dispatch, SetStateAction } from "react";

export type ProjectsType = Array<{
    id: number;
    title: string;
    description: string;
    type: "Singular" | "Monopage" | "Compost";
    module: Array<string>;
}>;

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
