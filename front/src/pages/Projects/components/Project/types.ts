export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    type: "Singular" | "Compost" | "Monopage";
    modules: Array<string>;
}
