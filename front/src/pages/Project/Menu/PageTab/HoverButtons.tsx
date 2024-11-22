// Libraries
import { useContext } from "react";

// Local
import { PagesRequestType } from "pages/Project/util/types";
import { addPage } from "pages/Project/util/events";
import { PagesContext } from "pages/Project";
import Icons from "modules/Icons";
import clsx from "clsx";

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

    if (!isHover || !context) return null;

    const childrenButton = () => {
        if (childrens?.length === 0) return null;

        if (showChildren) {
            return (
                <Icons name="MdExpandLess" library="md" className="h-full" />
            );
        }

        return <Icons name="MdExpandMore" library="md" className="h-full" />;
    };

    const bodyCss = clsx("flex flex-row absolute gap-x-2 right-2 top-2", {
        "text-primary-content": isSelected,
        "text-base-content": !isSelected,
    });

    return (
        <div className={bodyCss}>
            <div onClick={() => addPage(context, toggleShowChildren, pageId)}>
                <Icons name="IoAddOutline" library="io5" className="h-full" />
            </div>

            <div onClick={() => toggleShowChildren()}>{childrenButton()}</div>
        </div>
    );
};

export default HoverButtons;
