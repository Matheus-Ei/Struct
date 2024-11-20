import { TabProps } from "../types";
import Delete from "./Actions";

const Settings = ({ projectId, setModal }: TabProps) => {
    return (
        <div className="w-full h-full flex justify-start items-start pl-3 pt-4">
            <Delete projectId={projectId} setModal={setModal} />
        </div>
    );
};

export default Settings;
