// Libraries
import { FaQuestion } from "react-icons/fa";

// Local
import lib from "./library";

interface IconsProps {
    library: string;
    name: string;
    className?: string;
    onClick?: (event?: any) => void;
}

const Icons = ({ library, name, className, onClick }: IconsProps) => {
    if (!library || !name) return <FaQuestion onClick={onClick} />;

    try {
        const repository: any = lib[library];
        const RequiredIcon = repository[name];

        if (className)
            return <RequiredIcon className={className} onClick={onClick} />;

        return <RequiredIcon onClick={onClick} />;
    } catch (error) {
        return <FaQuestion onClick={onClick} />;
    }
};

export default Icons;
