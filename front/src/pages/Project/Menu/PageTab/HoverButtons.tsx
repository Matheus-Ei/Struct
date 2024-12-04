// Libraries
import { MouseEvent, useContext } from "react";
import clsx from "clsx";

// Local
import { addPage } from "pages/Project/util/events";
import { ProjectContext } from "pages/Project";
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
    const useProjectContext = useContext(ProjectContext);

    if (!isHover || !useProjectContext) return null;
    const isSelected = useProjectContext.selectedPage.id === pageId;

    const handleMenu = (event?: MouseEvent<HTMLElement>) => {
        if (!event) return;

        toggleMenu(true);
        setClickPosition({ x: event.clientX, y: event.clientY });
    };

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
                onClick={() =>
                    addPage(useProjectContext, toggleChildren, pageId)
                }
            />

            <Icon
                name="MdMoreHoriz"
                library="md"
                className="h-full"
                onClick={handleMenu}
            />
        </div>
    );
};

export default HoverButtons;
