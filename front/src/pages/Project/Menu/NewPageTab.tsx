// Libraries
import { useContext } from "react";
import clsx from "clsx";

// Local
import { addPage } from "../util/events";
import Icon from "components/Icon";
import { PagesContext } from "..";

const bodyCss = clsx(
    "flex flex-row justify-start items-center",
    "py-2 px-4 gap-x-2 mt-2",
    "w-full bg-base-100 hover:text-primary hover:italir",
    "rounded-btn text-start",
    "cursor-default select-none"
);

const NewPageTab = () => {
    const context = useContext(PagesContext);
    if (!context) return null;

    return (
        <div className={bodyCss} onClick={() => addPage(context, null, null)}>
            <Icon
                name="IoAddOutline"
                library="io5"
                className="text-primary h-full"
            />

            <h1 className="line-clamp-1 w-full text-sm">New Page</h1>
        </div>
    );
};

export default NewPageTab;
