import Request from "services/Request";

interface ModuleProps {
    refetchPage: () => void;
    pageId: number;
    module: string;
}

const setModule = async (
    module: string,
    pageId: number,
    refetchPage: () => void
) => {
    switch (module) {
        case "notes":
            await Request.patch(`page/notes/set-module/${pageId}`, {});
            refetchPage();
            return;
    }
};

const Module = ({ refetchPage, pageId, module }: ModuleProps) => {
    return (
        <div
            className="flex items-center justify-center h-12 w-full p-4 bg-base-300 rounded-badge"
            onClick={() => {
                refetchPage();
                setModule(module, pageId, refetchPage);
            }}
        >
            {module[0].toUpperCase() + module.slice(1)}
        </div>
    );
};

export default Module;
