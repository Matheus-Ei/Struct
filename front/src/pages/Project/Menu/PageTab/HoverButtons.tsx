// Libraries
import { useContext } from "react";
import clsx from "clsx";

// Local
import { addPage } from "pages/Project/util/events";
import { PagesContext } from "pages/Project";
import Icon from "components/Icon";

interface HoverButtonsProps {
    toggleChildren: (value?: boolean) => void;
    toggleMenu: (value?: boolean) => void;
    setClickPosition: (value: { x: number; y: number }) => void;
    isHover: boolean;
    pageId: number;
}

const HoverButtons = ({
    toggleChildren,
    setClickPosition,
    toggleMenu,
    isHover,
    pageId,
}: HoverButtonsProps) => {
    const context = useContext(PagesContext);

    if (!isHover || !context) return null;
    const isSelected = context.selectedPage.id === pageId;

    const bodyCss = clsx("flex flex-row absolute gap-x-2 right-2 top-2", {
        "text-primary-content": isSelected,
        "text-base-content": !isSelected,
    });

    return (
        <div className={bodyCss}>
            <Icon
                name="IoAddOutline"
                library="io5"
                className="h-full"
                onClick={() => addPage(context, toggleChildren, pageId)}
            />

            <Icon
                name="MdMoreHoriz"
                library="md"
                className="h-full"
                onClick={(event) => {
                    toggleMenu(true);
                    setClickPosition({ x: event.clientX, y: event.clientY });
                }}
            />
        </div>
    );
};

export default HoverButtons;
