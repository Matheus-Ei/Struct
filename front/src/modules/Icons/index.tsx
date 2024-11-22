// Libraries
import { FaQuestion } from "react-icons/fa";

// Local
import lib from "./library";

interface IconsProps {
    library: string;
    name: string;
    className?: string;
}

const Icons = ({ library, name, className }: IconsProps) => {
    if (!library || !name) return <FaQuestion />;

    try {
        const repository: any = lib[library];
        const RequiredIcon = repository[name];

        if (className) return <RequiredIcon className={className} />;

        return <RequiredIcon />;
    } catch (error) {
        return <FaQuestion />;
    }
};

export default Icons;
