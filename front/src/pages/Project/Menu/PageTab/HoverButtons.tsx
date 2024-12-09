// Libraries
import { MouseEvent } from "react";
import clsx from "clsx";

// Local
import { addPage } from "pages/Project/util/events";
import { ProjectContext } from "pages/Project";
import Icon from "components/Icon";
import useDefinedContext from "hooks/useDefinedContext";

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
    const useProjectContext = useDefinedContext(ProjectContext);
    const { selectedPage } = useProjectContext;

    if (!isHover) return null;
    const isSelected = selectedPage.id === pageId;

    const handleMenu = (event?: MouseEvent<HTMLElement>) => {
        if (!event) return;

        toggleMenu(true);
        setClickPosition({ x: event.clientX, y: event.clientY });
    };

    const bodyCss = clsx(
        "h-full flex flex-row items-center justify-center absolute gap-x-2 right-2",
        {
            "text-primary-content": isSelected,
            "text-base-content": !isSelected,
        }
    );

    return (
        <div className={bodyCss}>
            <Icon
                name="IoAddOutline"
                library="io5"
                onClick={() =>
                    addPage(useProjectContext, toggleChildren, pageId)
                }
            />

            <Icon name="MdMoreHoriz" library="md" onClick={handleMenu} />
        </div>
    );
};

export default HoverButtons;
