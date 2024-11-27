// Libraries
import { MouseEvent, useContext } from "react";

// Local
import { PagesContext } from "pages/Project";
import Emoji from "components/Emoji";
import clsx from "clsx";
import { PageType } from "services/page/types";

interface ContentProps {
    item: PageType;
    onContextMenu: (event: MouseEvent<HTMLDivElement>) => void;
}

const Content = ({ item, onContextMenu }: ContentProps) => {
    const context = useContext(PagesContext);
    if (!context) return null;

    const isSelected = item.id === context.selectedPageId;

    const css = clsx(
        "w-full gap-x-2 rounded-btn py-1 px-4",
        "flex flex-row justify-start items-center text-start",
        "cursor-default select-none",
        {
            "bg-primary text-primary-content": isSelected,
        }
    );

    const handleClick = () => context.setSelectedPageId(item.id);

    return (
        <div className={css} onContextMenu={onContextMenu} onClick={handleClick}>
            <Emoji symbol={item.emoji} />
            <h1 className="line-clamp-1 w-full text-sm">{item.name}</h1>
        </div>
    );
};

export default Content;
