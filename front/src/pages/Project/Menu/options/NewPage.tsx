// Libraries
import clsx from "clsx";

// Local
import { addPage } from "../../util/events";
import Icon from "components/Icon";
import { ProjectContext } from "../..";
import useDefinedContext from "hooks/useDefinedContext";

const bodyCss = clsx(
    "flex flex-row justify-start items-center",
    "px-4 gap-x-2 mt-4",
    "w-full bg-base-100 hover:text-primary hover:italic",
    "rounded-btn text-start",
    "cursor-default select-none"
);

const NewPage = () => {
    const useProjectContext = useDefinedContext(ProjectContext);

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

export default NewPage;
