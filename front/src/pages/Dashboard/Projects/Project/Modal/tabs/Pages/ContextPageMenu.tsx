// Local
import ContextMenu from "components/ContextMenu";
import Icons from "modules/Icons";
import Page from "services/page";

interface ContextPageMenuProps {
    showMenu: boolean;
    toggleShowMenu: (value?: boolean) => void;
    clickPosition: { x: number; y: number };
    pageId: number;
    refetch: () => void;
}

const ContextPageMenu = ({
    showMenu,
    toggleShowMenu,
    clickPosition,
    pageId,
    refetch,
}: ContextPageMenuProps) => {
    const deletePage = () => {
        Page.delete(pageId, () => {
            toggleShowMenu(false);
            refetch();
        });
    };

    return (
        <ContextMenu
            show={showMenu}
            onClose={() => toggleShowMenu(false)}
            position={clickPosition}
            translateY={true}
        >
            <div className="flex flex-col">
                <button
                    className="flex gap-2 items-center justify-center"
                    onClick={deletePage}
                >
                    <Icons name="MdDelete" library="md" />
                    <h1>Delete</h1>
                </button>
            </div>
        </ContextMenu>
    );
};

export default ContextPageMenu;
