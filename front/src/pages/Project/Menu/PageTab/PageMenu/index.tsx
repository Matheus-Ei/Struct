// Local
import ContextMenu from "components/ContextMenu";
import useSafeContext from "hooks/useSafeContext";
import { PageTabContext } from "../context";
import DeletePage from "./DeletePage";

const PageMenu = () => {
    const { menu, clickPosition } = useSafeContext(PageTabContext);

    return (
        <ContextMenu
            show={menu.show}
            onClose={() => menu.toggle(false)}
            style={{ location: clickPosition.value }}
        >
            <div className="flex flex-col">
                <DeletePage />
            </div>
        </ContextMenu>
    );
};

export default PageMenu;
