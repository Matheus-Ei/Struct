// Library
import { useNavigate } from "react-router-dom";

// Local
import ContextMenu from "components/ContextMenu";
import Icon from "components/Icon";

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
            <div className="flex flex-col items-start justify-center">
                <div
                    className="flex items-center justify-center gap-x-2 cursor-pointer select-none text-lg"
                    onClick={() => navigate("/profile")}
                >
                    <Icon name="FaUser" library="fa6" />

                    <h1>Profile</h1>
                </div>

                <div
                    className="flex items-center justify-center gap-x-2 cursor-pointer select-none text-lg"
                    onClick={() => navigate("/settings")}
                >
                    <Icon name="IoMdSettings" library="io" />

                    <h1>Settings</h1>
                </div>
            </div>
        </ContextMenu>
    );
};

export default Menu;
