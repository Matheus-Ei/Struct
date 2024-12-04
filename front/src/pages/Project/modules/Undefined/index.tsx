// Libraries
import { useContext } from "react";

// Local
import { ProjectContext } from "pages/Project";
import SearchElement from "./SearchElement";
import Emoji from "components/Emoji";
import EditableField from "components/EditableField";

const Undefined = () => {
    const useProjectContext = useContext(ProjectContext);

    return (
        <div className="flex flex-col w-3/4 h-full items-center justify-center gap-2">
            <div className="flex flex-col w-full h-1/6 items-start justify-center gap-y-3">
                <div className="flex flex-row gap-4 w-full text-start text-3xl">
                    <Emoji symbol={useProjectContext?.page.data?.emoji} />

                    <EditableField
                        defaultValue={useProjectContext?.page.data?.name}
                        onUpdate={async () => {}}
                    />
                </div>

                <EditableField
                    defaultValue={useProjectContext?.page.data?.description}
                    onUpdate={async () => {}}
                />
            </div>

            <SearchElement pageId={useProjectContext?.page.data?.id} />
        </div>
    );
};

export default Undefined;
