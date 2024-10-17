// Services
import Icons from "../services/Icons";

interface PointProps {
    text: string;
    icon: string;
    library: string;
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
            className={`flex gap-6 justify-center items-center py-2 px-6 rounded-lg ${isSelected && "bg-base-200"}`}
        >
            <Icons library={library} name={icon} size={24} />
            <p className="text-base-content cursor-default text-lg">{text}</p>
        </div>
    );
};

export default Point;
