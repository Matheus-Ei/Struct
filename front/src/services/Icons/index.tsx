// Modules
import lib from "./library";

interface IconsProps {
    library: string;
    name: string;
    color?: string;
    size?: number;
}

const Icons = ({ library, name, color, size }: IconsProps) => {
    const repository: any = lib[library];

    try {
        const RequiredIcon = repository[name];

        return <RequiredIcon size={size} />;
    } catch (error) {
        const errorRepo: any = lib["fa6"];
        const RequiredIcon = errorRepo["FaQuestion"];

        return <RequiredIcon color={color} size={size} />;
    }
};

export default Icons;
