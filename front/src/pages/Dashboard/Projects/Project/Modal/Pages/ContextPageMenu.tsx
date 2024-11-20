// Local
import ContextMenu from "components/ContextMenu";
import Icons from "services/Icons";
import Request from "services/Request";

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
        Request.delete(`page/geral/${pageId}`).then(() => {
            toggleShowMenu(false);
            refetch();
        });
    };

    return (
        <ContextMenu
            show={showMenu}
            onClose={() => toggleShowMenu(false)}
            position={clickPosition}
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
