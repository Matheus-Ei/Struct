// Libraries
import { useContext } from "react";

// Local
import { PagesContext } from "pages/Project";

interface ModuleProps {
    pageId?: number;
    module: string;
}

const Module = ({ module }: ModuleProps) => {
    const context = useContext(PagesContext);

    const setModule = async () => {
        switch (module) {
            case "notes":
                // Send a request to update the page to the new module
                context?.page.refetch();
                return;
        }
    };

    return (
        <button
            className="flex items-center justify-center h-12 w-full p-4 bg-base-100 rounded-btn border border-base-300 border-b-4 border-b-primary"
            onClick={setModule}
        >
            <p>{module[0].toUpperCase() + module.slice(1)}</p>
        </button>
    );
};

export default Module;
