import Icons from "services/Icons";

interface HoverButtonsProps {
    toggleShowChildren: (value?: boolean) => void;
    showChildren: boolean;
    isHover: boolean;
}

const HoverButtons = ({
    toggleShowChildren,
    showChildren,
    isHover,
}: HoverButtonsProps) => {
    if (!isHover) {
        return null;
    }

    return (
        <div
            className="absolute right-2 top-2"
            onClick={() => {
                toggleShowChildren();
            }}
        >
            {showChildren ? (
                <Icons name="MdExpandLess" library="md" className="h-full" />
            ) : (
                <Icons name="MdExpandMore" library="md" className="h-full" />
            )}
        </div>
    );
};

export default HoverButtons;
