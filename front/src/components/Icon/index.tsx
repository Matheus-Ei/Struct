// Libraries
import { MouseEvent } from "react";
import { FaQuestion } from "react-icons/fa";

// Local
import library, { LibsType } from "./library";
import { IconType } from "types/global";

interface IconsProps {
    value: IconType;
    className?: string;
    onClick?: (event?: MouseEvent<HTMLElement>) => void;
}

const Icon = ({ value, className, onClick }: IconsProps) => {
    const handleClick = (event: any) => onClick && onClick(event);

    if (!value) return <FaQuestion onClick={handleClick} />;

    try {
        const repository: LibsType = library[value.library];
        const RequiredIcon = repository[value.name];

        if (className)
            return <RequiredIcon className={className} onClick={handleClick} />;

        return <RequiredIcon onClick={handleClick} />;
    } catch (error) {
        return <FaQuestion onClick={handleClick} />;
    }
};

export default Icon;
