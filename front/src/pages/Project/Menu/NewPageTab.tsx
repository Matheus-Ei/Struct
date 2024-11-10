import { useContext } from "react";
import Icons from "services/Icons";
import { PagesContext } from "..";
import { addPage } from "../util/events";

const NewPageTab = () => {
    const context = useContext(PagesContext);

    if (!context) {
        return null;
    }

    const className = `flex flex-row gap-x-2 rounded-btn
                       py-2 items-center text-start
                       justify-start cursor-default px-4
                       select-none w-full bg-base-200 mt-2`;

    return (
        <div className={className} onClick={() => addPage(context, null, null)}>
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
