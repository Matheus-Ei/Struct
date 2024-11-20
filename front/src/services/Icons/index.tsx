// Libraries
import { FaQuestion } from "react-icons/fa";

// Local
import lib from "./library";

interface IconsProps {
    library: string;
    name: string;
    color?: string;
    size?: number;
    className?: string;
}

const Icons = ({ library, name, color, size, className }: IconsProps) => {
    if (!library || !name) return <FaQuestion />;

    try {
        const repository: any = lib[library];
        const RequiredIcon = repository[name];

        if (className) return <RequiredIcon className={className} />;

        return <RequiredIcon color={color} size={size} />;
    } catch (error) {
        return <FaQuestion />;
    }
};

export default Icons;
