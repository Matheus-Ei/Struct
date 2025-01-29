// Local
import { deletePage } from "pages/Project/util/events";
import ContextMenu from "components/ContextMenu";
import { ProjectContext } from "pages/Project/context";
import Icon from "components/Icon";
import useSafeContext from "hooks/useSafeContext";
import { PageTabContext } from "./context";

const PageMenu = () => {
    const useProjectContext = useSafeContext(ProjectContext);
    const { menu, clickPosition, page } = useSafeContext(PageTabContext);

    return (
        <ContextMenu
            show={menu.show}
            onClose={() => menu.toggle(false)}
            position={clickPosition.value}
        >
            <div className="flex flex-col">
                <button
                    className="flex gap-2 items-center justify-center"
                    onClick={() =>
                        deletePage(menu.toggle, page.id, useProjectContext)
                    }
                >
                    <Icon value={{ name: "MdDelete", library: "md" }} />
                    <h1>Delete</h1>
                </button>
            </div>
        </ContextMenu>
    );
};

export default PageMenu;
