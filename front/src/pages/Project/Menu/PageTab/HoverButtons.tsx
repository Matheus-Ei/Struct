// Libraries
import { MouseEvent } from "react";
import clsx from "clsx";

// Local
import { addPage } from "pages/Project/util/events";
import { ProjectContext } from "pages/Project/context";
import Icon from "components/Icon";
import useSafeContext from "hooks/useSafeContext";
import { PageTabContext } from "./context";

const HoverButtons = () => {
    const useProjectContext = useSafeContext(ProjectContext);
    const { selectedPage } = useProjectContext;

    const { isHover, menu, clickPosition, page, children } =
        useSafeContext(PageTabContext);

    if (!isHover) return null;
    const isSelected = selectedPage.id === page.id;

    const handleMenu = (event?: MouseEvent<HTMLElement>) => {
        if (!event) return;

        menu.toggle(true);
        clickPosition.set({ x: event.clientX, y: event.clientY });
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
                value={{ name: "IoAddOutline", library: "io5" }}
                onClick={() =>
                    addPage(useProjectContext, children.toggle, page.id)
                }
            />

            <Icon
                value={{ name: "MdMoreHoriz", library: "md" }}
                onClick={handleMenu}
            />
        </div>
    );
};

export default HoverButtons;
