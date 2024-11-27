// Libraries
import { FaQuestion } from "react-icons/fa";

// Local
import lib from "./library";

interface IconsProps {
    library: string;
    name: string;
    className?: string;
    onClick?: (event?: MouseEvent) => void;
}

interface IconType {
    [key: string]: any;
}

const Icon = ({ library, name, className, onClick }: IconsProps) => {
    const handleClick = (event: any) => onClick && onClick(event);

    if (!library || !name) return <FaQuestion onClick={handleClick} />;

    try {
        const repository: IconType = lib[library];
        const RequiredIcon = repository[name];

        if (className)
            return <RequiredIcon className={className} onClick={handleClick} />;

        return <RequiredIcon onClick={handleClick} />;
    } catch (error) {
        return <FaQuestion onClick={handleClick} />;
    }
};

export default Icon;
