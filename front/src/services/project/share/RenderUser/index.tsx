// Library
import { MouseEvent, useState } from "react";

// Local
import { SharedUserType } from "../../type";
import useToggle from "hooks/useToggle";
import Menu from "./Menu";
import Bottom from "./Bottom";
import Header from "./Header";

interface RenderUserProps {
    user: SharedUserType;
    refetch?: () => void;
}
const RenderUser = ({ user, refetch }: RenderUserProps) => {
    const [isHover, toggleIsHover] = useToggle(false);
    const [isMenu, toggleMenu] = useToggle(false);
    const [clickPosition, setClickPosition] = useState({ x: 10, y: 10 });

    const handleMenu = (event?: MouseEvent) => {
        event?.preventDefault();
        toggleMenu(true);
        setClickPosition({ x: event?.clientX ?? 0, y: event?.clientY ?? 0 });
    };

    return (
        <div
            className="flex flex-col items-center justify-center gap-y-2 w-full cursor-pointer select-none"
            onMouseEnter={() => toggleIsHover(true)}
            onMouseLeave={() => toggleIsHover(false)}
            onContextMenu={handleMenu}
        >
            <div className="flex items-center justify-between w-full">
                <Header user={user} />

                <Menu
                    isHover={isHover}
                    menu={{
                        isOpen: isMenu,
                        toggle: toggleMenu,
                        position: clickPosition,
                    }}
                    user={user}
                    onOpen={handleMenu}
                    refetch={refetch}
                />
            </div>

            <Bottom user={user} />
        </div>
    );
};

export default RenderUser;
