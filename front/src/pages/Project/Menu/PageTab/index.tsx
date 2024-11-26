// Libraries
import { MouseEvent, useState } from "react";

// Local
import ContextPageMenu from "./ContextPageMenu";
import HoverButtons from "./HoverButtons";
import useToggle from "hooks/useToggle";
import Childrens from "./Childrens";
import Content from "./Content";
import { PageType } from "services/page/types";

interface PageTabProps {
    item: PageType;
    index: number;
}

const PageTab = ({ item, index }: PageTabProps) => {
    // States
    const [isHover, toggleHover] = useToggle(false);

    // Children
    const [showChildren, toggleShowChildren] = useToggle(false);

    // Context menu
    const [showMenu, toggleShowMenu] = useToggle(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    const onContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        setClickPosition({ x: event.clientX, y: event.clientY });
        toggleShowMenu(true);
    };

    return (
        <div
            className="flex flex-col relative w-full justify-start"
            onMouseOver={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            key={index}
        >
            <Content item={item} onContextMenu={onContextMenu} />

            <HoverButtons
                showChildren={showChildren}
                toggleShowChildren={toggleShowChildren}
                isHover={isHover}
                childrens={item.children_pages}
                pageId={item.id}
            />

            <Childrens
                items={item.children_pages}
                show={showChildren}
                parentPageId={item.id}
            />

            <ContextPageMenu
                showMenu={showMenu}
                toggleShowMenu={toggleShowMenu}
                clickPosition={clickPosition}
                pageId={item.id}
            />
        </div>
    );
};

export default PageTab;
