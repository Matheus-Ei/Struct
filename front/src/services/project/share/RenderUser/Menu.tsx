// Library
import { MouseEvent } from "react";

// Local
import ContextMenu from "components/ContextMenu";
import Icon from "components/Icon";
import { SharedUserType } from "services/project/type";
import ProjectShare from "..";

interface MenuProps {
    isHover: boolean;
    menu: {
        isOpen: boolean;
        toggle: (value: boolean) => void;
        position: { x: number; y: number };
    };
    user: SharedUserType;
    onOpen: (event?: MouseEvent) => void;
    refetch?: () => void;
}

const Menu = ({ isHover, menu, refetch, onOpen, user }: MenuProps) => {
    const unshare = async () => {
        await ProjectShare.delete(String(user.project_id), user.user_nickname);
        menu.toggle(false);
        refetch && refetch();
    };

    return (
        <div className="relative flex items-center justify-start gap-x-3">
            {isHover && (
                <Icon
                    value={{ name: "IoIosMore", library: "io" }}
                    onClick={onOpen}
                />
            )}

            <ContextMenu
                onClose={() => menu.toggle(false)}
                show={menu.isOpen}
                style={{ location: menu.position }}
            >
                <button
                    className="flex gap-2 items-center justify-center"
                    onClick={unshare}
                >
                    <Icon value={{ name: "MdDelete", library: "md" }} />

                    <h1>Delete</h1>
                </button>
            </ContextMenu>
        </div>
    );
};

export default Menu;
