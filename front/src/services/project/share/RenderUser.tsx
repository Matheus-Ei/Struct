// Library
import { MouseEvent, useState } from "react";

// Local
import { SharedUserType } from "../type";
import Icon from "components/Icon";
import useToggle from "hooks/useToggle";
import ContextMenu from "components/ContextMenu";
import ProjectShare from ".";

interface RenderUserProps {
    user: SharedUserType;
    refetch?: () => void;
}
const RenderUser = ({ user, refetch }: RenderUserProps) => {
    const [isHover, toggleIsHover] = useToggle(false);
    const [isMenuOpen, toggleMenuOpen] = useToggle(false);
    const [clickPosition, setClickPosition] = useState({ x: 10, y: 10 });

    const handleDelete = async () => {
        await ProjectShare.delete(String(user.project_id), user.user_nickname);
        toggleMenuOpen(false);
        refetch && refetch();
    };

    const handleMenu = (event?: MouseEvent, preventDefault?: boolean) => {
        preventDefault && event?.preventDefault();
        toggleMenuOpen(true);
        setClickPosition({ x: event?.clientX ?? 0, y: event?.clientY ?? 0 });
    };

    return (
        <div
            className="flex flex-col items-center justify-center gap-y-2 w-full cursor-pointer select-none"
            onMouseEnter={() => toggleIsHover(true)}
            onMouseLeave={() => toggleIsHover(false)}
            onContextMenu={(event) => handleMenu(event, true)}
        >
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-start gap-x-3">
                    <Icon name="FaUserAlt" library="fa" className="text-2xl" />

                    <h1 className="text-lg">{user.user_nickname}</h1>
                </div>

                <div className="relative flex items-center justify-start gap-x-3">
                    {isHover && (
                        <Icon
                            name="IoIosMore"
                            library="io"
                            onClick={handleMenu}
                        />
                    )}

                    <ContextMenu
                        onClose={() => toggleMenuOpen(false)}
                        show={isMenuOpen}
                        position={clickPosition}
                    >
                        <div>
                            <button
                                className="flex gap-2 items-center justify-center"
                                onClick={handleDelete}
                            >
                                <Icon name="MdDelete" library="md" />
                                <h1>Delete</h1>
                            </button>
                        </div>
                    </ContextMenu>
                </div>
            </div>

            <h1 className="text-sm text-neutral italic line-clamp-1 w-full">
                {user.user_mail}
            </h1>
        </div>
    );
};

export default RenderUser;
