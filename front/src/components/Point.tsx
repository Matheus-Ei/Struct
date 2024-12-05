// Libraries
import clsx from "clsx";

// Local
import Icon from "components/Icon";

interface PointProps {
    icon: string;
    library: string;
    text?: string;
    isSelected?: boolean;
    className?: string;
    onClick?: () => void;
}

const Point = ({
    text,
    icon,
    library,
    isSelected,
    onClick,
    className,
}: PointProps) => {
    const handleClick = () => onClick && onClick();

    const css = clsx(
        "flex justify-center items-center",
        "rounded-btn cursor-pointer select-none",
        {
            "gap-4 py-2 px-4": text,
            "p-1": !text,
            "bg-primary text-primary-content": isSelected,
        }
    );

    return (
        <div onClick={handleClick} className={className ? className : css}>
            <Icon library={library} name={icon} className="text-xl" />
            {text && <p>{text}</p>}
        </div>
    );
};

export default Point;
