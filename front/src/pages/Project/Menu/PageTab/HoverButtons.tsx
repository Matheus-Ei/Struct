// Libraries
import { useContext } from "react";
import clsx from "clsx";

// Local
import { addPage } from "pages/Project/util/events";
import { PageType } from "services/page/types";
import { PagesContext } from "pages/Project";
import Icon from "components/Icon";

interface HoverButtonsProps {
    toggleShowChildren: (value?: boolean) => void;
    showChildren: boolean;
    isHover: boolean;
    childrens: Array<PageType> | null;
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

    if (!isHover || !context) return null;
    const isSelected = context.selectedPageId === pageId;

    const childrenButton = () => {
        if (childrens?.length === 0) return null;

        if (showChildren) {
            return (
                <Icon name="MdExpandLess" library="md" className="h-full" />
            );
        }

        return <Icon name="MdExpandMore" library="md" className="h-full" />;
    };

    const bodyCss = clsx("flex flex-row absolute gap-x-2 right-2 top-2", {
        "text-primary-content": isSelected,
        "text-base-content": !isSelected,
    });

    return (
        <div className={bodyCss}>
            <div onClick={() => addPage(context, toggleShowChildren, pageId)}>
                <Icon name="IoAddOutline" library="io5" className="h-full" />
            </div>

            <div onClick={() => toggleShowChildren()}>{childrenButton()}</div>
        </div>
    );
};

export default HoverButtons;
