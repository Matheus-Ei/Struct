import ContextMenu from "components/ContextMenu";
import Emoji from "components/Emoji";
import useToggle from "hooks/useToggle";
import { PagesContext } from "pages/Project";
import { useContext, useState } from "react";
import Request from "services/Request";
import Childrens from "./Childrens";
import HoverButtons from "./HoverButtons";

interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    children_pages: Array<PagesRequestType> | null;
    emoji: number | null;
    module: string;
}

interface PageTabProps {
    item: PagesRequestType;
    index: number;
}

const PageTab = ({ item, index }: PageTabProps) => {
    const context = useContext(PagesContext);

    // States
    const [isHover, toggleHover] = useToggle(false);
    const isSelected = item.id === context?.selectedPageId;

    // Children
    const [showChildren, toggleShowChildren] = useToggle(false);

    // Context menu
    const [showMenu, toggleShowMenu] = useToggle(false);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

    // Style
    const commonStyle = `flex flex-row gap-x-2 rounded-btn py-1 items-center text-start 
                         justify-start cursor-default px-4 select-none w-full`;
    const className = isSelected
        ? `${commonStyle}  bg-primary text-primary-content`
        : commonStyle;

    const onContextMenu = (event: any) => {
        event?.preventDefault();
        setClickPosition({ x: event.clientX, y: event.clientY });
        toggleShowMenu(true);
    };

    return (
        <div
            className="flex flex-col relative w-full justify-start"
            onMouseOver={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            onContextMenu={onContextMenu}
            key={index}
        >
            <div
                className={className}
                onClick={() => context?.setSelectedPageId(item.id)}
            >
                {item.emoji ? <Emoji symbol={item.emoji} /> : <p>&#x2753;</p>}

                <h1 className="line-clamp-1 w-full text-sm">{item.name}</h1>
            </div>

            <HoverButtons
                showChildren={showChildren}
                toggleShowChildren={toggleShowChildren}
                isHover={isHover}
            />

            <Childrens
                items={item.children_pages}
                show={showChildren}
                parentPageId={item.id}
            />

            <ContextMenu
                show={showMenu}
                onClose={() => toggleShowMenu(false)}
                position={clickPosition}
            >
                <button
                    onClick={() => {
                        toggleShowMenu(false);
                        Request.delete(`page/geral/${item.id}`).then(() => {
                            context?.refetch();
                        });
                    }}
                >
                    Delete
                </button>
            </ContextMenu>
        </div>
    );
};

export default PageTab;
