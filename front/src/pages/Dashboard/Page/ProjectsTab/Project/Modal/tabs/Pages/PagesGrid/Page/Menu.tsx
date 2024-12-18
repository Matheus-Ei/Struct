// Local
import ContextMenu from "components/ContextMenu";
import Icon from "components/Icon";
import Page from "services/page";

interface MenuProps {
    show: boolean;
    toggleShow: (value?: boolean) => void;
    position: { x: number; y: number };
    pageId: number;
    refetch: () => void;
}

const Menu = ({ show, toggleShow, position, pageId, refetch }: MenuProps) => {
    const deletePage = async () => {
        await Page.delete(pageId);

        toggleShow(false);
        refetch();
    };

    return (
        <ContextMenu
            show={show}
            onClose={() => toggleShow(false)}
            style={{ location: position, translate: true }}
        >
            <div className="flex flex-col">
                <button
                    className="flex gap-2 items-center justify-center"
                    onClick={deletePage}
                >
                    <Icon value={{ name: "MdDelete", library: "md" }} />

                    <h1>Delete</h1>
                </button>
            </div>
        </ContextMenu>
    );
};

export default Menu;
