// Local
import clsx from "clsx";
import Icons from "services/Icons";

interface PointProps {
    icon: string;
    library: string;
    text?: string;
    isSelected?: boolean;
    onClick?: () => void;
}

const Point = ({ text, icon, library, isSelected, onClick }: PointProps) => {
    const handleClick = () => onClick && onClick();

    const css = clsx(
        "flex justify-center items-center",
        "rounded-btn cursor-pointer",
        {
            "gap-4 py-2 px-4": text,
            "p-1": !text,
            "bg-primary text-primary-content": isSelected,
        }
    );

    return (
        <div onClick={handleClick} className={css}>
            <Icons library={library} name={icon} size={24} />
            {text && <p className="cursor-default">{text}</p>}
        </div>
    );
};

export default Point;
