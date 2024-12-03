// Libraries
import { MouseEvent, useState } from "react";

// Local
import PageMenu from "./PageMenu";
import { PageType } from "services/page/types";
import HoverButtons from "./HoverButtons";
import useToggle from "hooks/useToggle";
import Childrens from "./Childrens";
import Content from "./Content";

interface PageTabProps {
    item: PageType;
}

const PageTab = ({ item }: PageTabProps) => {
    // States
    const [isHover, toggleHover] = useToggle(false);

    // Children
    const [showChildren, toggleChildren] = useToggle(false);

    // Context menu
    const [showMenu, toggleMenu] = useToggle(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault();
        setClickPosition({ x: event.clientX, y: event.clientY });
        toggleMenu(true);
    };

    return (
        <>
            <div
                className="flex flex-col relative w-full h-9 justify-start"
                onMouseOver={() => toggleHover(true)}
                onMouseLeave={() => toggleHover(false)}
            >
                <Content
                    item={item}
                    onContextMenu={handleContextMenu}
                    isHover={isHover}
                    showChildren={showChildren}
                    childrens={item.children_pages}
                    toggleChildren={toggleChildren}
                />

                <HoverButtons
                    isHover={isHover}
                    toggleChildren={toggleChildren}
                    toggleMenu={toggleMenu}
                    setClickPosition={setClickPosition}
                    pageId={item.id}
                />

                <PageMenu
                    showMenu={showMenu}
                    toggleMenu={toggleMenu}
                    clickPosition={clickPosition}
                    pageId={item.id}
                />
            </div>

            <div className="flex flex-col relative w-full justify-start">
                <Childrens
                    items={item.children_pages}
                    show={showChildren}
                    parentPageId={item.id}
                />
            </div>
        </>
    );
};

export default PageTab;
