// Libraries
import { useContext } from "react";

// Local
import { PagesContext } from "pages/Project";
import Request from "services/Request";

interface ModuleProps {
    pageId?: number;
    module: string;
}

const Module = ({ pageId, module }: ModuleProps) => {
    const context = useContext(PagesContext);

    const setModule = async () => {
        switch (module) {
            case "notes":
                await Request.patch(`page/notes/set-module/${pageId}`, {});
                context?.refetchPage();
                return;
        }
    };

    return (
        <button
            className="flex items-center justify-center h-12 w-full p-4 bg-base-300 rounded-btn"
            onClick={setModule}
        >
            <p>{module[0].toUpperCase() + module.slice(1)}</p>
        </button>
    );
};

export default Module;
