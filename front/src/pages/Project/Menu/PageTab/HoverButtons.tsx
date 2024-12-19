// Libraries
import { MouseEvent } from "react";
import clsx from "clsx";

// Local
import { addPage } from "pages/Project/util/events";
import { ProjectContext } from "pages/Project/context";
import useSafeContext from "hooks/useSafeContext";
import { PageTabContext } from "./context";
import HoverButtons from "components/HoverButtons";

const Hover = () => {
    const useProjectContext = useSafeContext(ProjectContext);
    const { selectedPage } = useProjectContext;

    const { isHover, menu, clickPosition, page, children } =
        useSafeContext(PageTabContext);

    const isSelected = selectedPage.id === page.id;

    const openMenu = (event?: MouseEvent<HTMLElement>) => {
        if (!event) return;

        menu.toggle(true);
        clickPosition.set({ x: event.clientX, y: event.clientY });
    };

    const css = clsx(
        "h-full flex flex-row items-center justify-center absolute gap-x-2 right-2",
        {
            "text-primary-content": isSelected,
            "text-base-content": !isSelected,
        }
    );

    const functions = [
        {
            icon: { name: "IoAddOutline", library: "io5" },
            onClick: () => addPage(useProjectContext, children.toggle, page.id),
        },
        {
            icon: { name: "MdMoreHoriz", library: "md" },
            onClick: openMenu,
        },
    ];

    return (
        <HoverButtons isHover={isHover} functions={functions} className={css} />
    );
};

export default Hover;
