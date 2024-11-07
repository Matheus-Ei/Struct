import Request from "services/Request";

interface UndefinedProps {
    pageId: number;
    refetchPage: () => void;
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

const Undefined = ({ pageId, refetchPage }: UndefinedProps) => {
    return (
        <div className="flex flex-row w-full h-full items-center justify-center">
            <button
                onClick={() => {
                    refetchPage();
                    setModule("notes", pageId, refetchPage);
                }}
            >
                setNotes
            </button>
        </div>
    );
};

export default Undefined;
