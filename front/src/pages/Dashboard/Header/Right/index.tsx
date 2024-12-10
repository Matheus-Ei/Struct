// Library
import { useRef } from "react";

// Local
import Icon from "components/Icon";
import useToggle from "hooks/useToggle";
import Menu from "./Menu";
import Element from "modules/Element";

const Right = () => {
    const [showMenu, toggleMenu] = useToggle(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const menuElement = new Element(menuRef);

    const openOptions = () => toggleMenu();

    const { left: x, bottom: y } = menuElement.position;

    return (
        <div
            className="flex flex-row w-fit h-full items-center justify-end"
            ref={menuRef}
        >
            <Icon
                name="FaUserAstronaut"
                library="fa"
                className="text-4xl"
                onClick={openOptions}
            />

            <Menu
                showMenu={showMenu}
                toggleShowMenu={toggleMenu}
                position={{ x, y }}
            />
        </div>
    );
};

export default Right;
