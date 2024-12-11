// Local
import Icon from "components/Icon";

interface HoverButtonsProps {
    isHover: boolean;
    openProject: () => void;
}

const HoverButtons = ({ isHover, openProject }: HoverButtonsProps) => {
    if (!isHover) return null;

    return (
        <button onClick={openProject} className="w-fit">
            <Icon
                value={{ name: "MdOpenInNew", library: "md" }}
                className="text-xl"
            />
        </button>
    );
};

export default HoverButtons;
