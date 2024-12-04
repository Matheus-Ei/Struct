// Libraries
import { useContext } from "react";
import clsx from "clsx";

// Local
import { addPage } from "../util/events";
import Icon from "components/Icon";
import { ProjectContext } from "..";

const bodyCss = clsx(
    "flex flex-row justify-start items-center",
    "py-2 px-4 gap-x-2 mt-2",
    "w-full bg-base-100 hover:text-primary hover:italic",
    "rounded-btn text-start",
    "cursor-default select-none"
);

const NewPageTab = () => {
    const useProjectContext = useContext(ProjectContext);
    if (!useProjectContext) return null;

    return (
        <div
            className={bodyCss}
            onClick={() => addPage(useProjectContext, null, null)}
        >
            <Icon name="IoMdAddCircle" library="io" className="text-2xl" />

            <h1 className="line-clamp-1 w-full text-sm">New Page</h1>
        </div>
    );
};

export default NewPageTab;
