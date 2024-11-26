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
    const handleClick = (event: MouseEvent) => onClick && onClick(event);
    const handleClickClean = () => onClick && onClick();

    if (!library || !name) return <FaQuestion onClick={handleClickClean} />;

    try {
        const repository: IconType = lib[library];
        const RequiredIcon = repository[name];

        if (className)
            return <RequiredIcon className={className} onClick={handleClick} />;

        return <RequiredIcon onClick={handleClick} />;
    } catch (error) {
        return <FaQuestion onClick={handleClickClean} />;
    }
};

export default Icon;
