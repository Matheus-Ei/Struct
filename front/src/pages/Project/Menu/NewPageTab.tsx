import { useContext } from "react";
import Icons from "services/Icons";
import { PagesContext } from "..";

interface NewPageTabProps {
    parentPageId: number | null;
}

const NewPageTab = ({ parentPageId }: NewPageTabProps) => {
    const context = useContext(PagesContext);

    const className = `flex flex-row gap-x-2 rounded-btn py-2 items-center text-start 
                       justify-start cursor-default px-4 select-none w-11/12 bg-base-200`;

    return (
        <div
            className={className}
            onClick={() => {
                context?.setSelectedPageId(null);
                context?.setNewParentPage(parentPageId);
            }}
        >
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
