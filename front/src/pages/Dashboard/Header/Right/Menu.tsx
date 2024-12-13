// Library
import { useNavigate } from "react-router-dom";

// Local
import ContextMenu from "components/ContextMenu";
import Point from "components/Point";

interface MenuProps {
    showMenu: boolean;
    toggleShowMenu: (value?: boolean) => void;
    position: { x: number; y: number };
}

const Menu = ({ showMenu, toggleShowMenu, position: { x, y } }: MenuProps) => {
    const navigate = useNavigate();

    return (
        <ContextMenu
            onClose={() => toggleShowMenu(false)}
            position={{ x: x - 100, y: y - 45 }}
            show={showMenu}
        >
            <div className="flex flex-col items-start justify-center gap-y-1">
                <Point
                    icon={{ name: "FaUser", library: "fa6" }}
                    text="Profile"
                    className="m-0 p-0"
                    onClick={() => navigate("/profile")}
                />

                <Point
                    icon={{ name: "IoMdSettings", library: "io" }}
                    text="Settings"
                    className="m-0 p-0"
                    onClick={() => navigate("/settings")}
                />
            </div>
        </ContextMenu>
    );
};

export default Menu;
