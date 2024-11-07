import ContextMenu from "components/ContextMenu";
import { PagesContext } from "pages/Project";
import { deletePage } from "pages/Project/util/events";
import { useContext } from "react";
import Icons from "services/Icons";

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

    if (!context) {
        return null;
    }

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
                    <Icons name="MdDelete" library="md" />
                    <h1>Delete</h1>
                </button>
            </div>
        </ContextMenu>
    );
};

export default ContextPageMenu;
