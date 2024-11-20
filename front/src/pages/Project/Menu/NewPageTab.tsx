// Libraries
import { useContext } from "react";

// Local
import { addPage } from "../util/events";
import Icons from "services/Icons";
import { PagesContext } from "..";
import clsx from "clsx";

const NewPageTab = () => {
    const context = useContext(PagesContext);
    if (!context) return null;

    const bodyCss = clsx(
        "flex flex-row justify-start items-center",
        "py-2 px-4 gap-x-2 mt-2",
        "w-full bg-base-200",
        "rounded-btn text-start",
        "cursor-default select-none"
    );

    return (
        <div className={bodyCss} onClick={() => addPage(context, null, null)}>
            <Icons
                name="IoAddOutline"
                library="io5"
                className="text-primary h-full"
            />

            <h1 className="line-clamp-1 w-full text-sm">New Page</h1>
        </div>
    );
};

export default NewPageTab;
