// Libraries
import { useContext } from "react";

// Local
import { deletePage } from "pages/Project/util/events";
import ContextMenu from "components/ContextMenu";
import { PagesContext } from "pages/Project";
import Icon from "components/Icon";

interface ContextPageMenuProps {
    showMenu: boolean;
    toggleShowMenu: (value?: boolean) => void;
    clickPosition: { x: number; y: number };
    pageId: number;
}

const ContextPageMenu = ({
    showMenu,
    toggleShowMenu,
    clickPosition,
    pageId,
}: ContextPageMenuProps) => {
    const context = useContext(PagesContext);
    if (!context) return null;

    return (
        <ContextMenu
            show={showMenu}
            onClose={() => toggleShowMenu(false)}
            position={clickPosition}
        >
            <div className="flex flex-col">
                <button
                    className="flex gap-2 items-center justify-center"
                    onClick={() => deletePage(toggleShowMenu, pageId, context)}
                >
                    <Icon name="MdDelete" library="md" />
                    <h1>Delete</h1>
                </button>
            </div>
        </ContextMenu>
    );
};

export default ContextPageMenu;
