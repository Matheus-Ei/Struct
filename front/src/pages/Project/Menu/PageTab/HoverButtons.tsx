// Libraries
import { useContext } from "react";

// Local
import { PagesRequestType } from "pages/Project/util/types";
import { addPage } from "pages/Project/util/events";
import { PagesContext } from "pages/Project";
import Icons from "services/Icons";

interface HoverButtonsProps {
    toggleShowChildren: (value?: boolean) => void;
    showChildren: boolean;
    isHover: boolean;
    childrens: Array<PagesRequestType> | null;
    pageId: number;
}

const HoverButtons = ({
    toggleShowChildren,
    showChildren,
    isHover,
    childrens,
    pageId,
}: HoverButtonsProps) => {
    const context = useContext(PagesContext);
    const isSelected = context?.selectedPageId === pageId;

    if (!isHover || !context) {
        return null;
    }

    const childrenButton = () => {
        if (childrens?.length === 0) {
            return null;
        }

        return showChildren ? (
            <Icons name="MdExpandLess" library="md" className="h-full" />
        ) : (
            <Icons name="MdExpandMore" library="md" className="h-full" />
        );
    };

    return (
        <div
            className={`flex flex-row absolute gap-x-2 right-2 top-2 ${isSelected ? "text-primary-content" : "text-base-content"}`}
        >
            <div onClick={() => addPage(context, toggleShowChildren, pageId)}>
                <Icons name="IoAddOutline" library="io5" className="h-full" />
            </div>

            <div onClick={() => toggleShowChildren()}>{childrenButton()}</div>
        </div>
    );
};

export default HoverButtons;
