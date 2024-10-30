import Icons from "services/Icons";

interface PointProps {
    icon: string;
    library: string;
    text?: string;
    isSelected?: boolean;
    onClick?: () => void;
}

const Point = ({ text, icon, library, isSelected, onClick }: PointProps) => {
    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <div
            onClick={handleClick}
            className={`flex ${text ? "gap-4 py-2 px-4" : "p-1"} justify-center items-center rounded-btn ${isSelected && "bg-primary text-primary-content"}`}
        >
            <Icons library={library} name={icon} size={24} />
            {text && <p className="cursor-default">{text}</p>}
        </div>
    );
};

export default Point;
