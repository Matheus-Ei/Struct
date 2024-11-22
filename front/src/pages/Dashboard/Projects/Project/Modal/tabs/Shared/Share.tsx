// Library
import { useState } from "react";

// Components
import Input from "components/Input";
import Point from "components/Point";

// Other Locals
import Project from "services/project";
import Options from "components/Options";

interface ShareProps {
    projectId: number;
    refetch: () => void;
}

const Share = ({ projectId, refetch }: ShareProps) => {
    const [nickname, setNickname] = useState<string>("");
    const [permission, setPermission] = useState<number>(5);

    const permissionOptions = [
        "owner",
        "admin",
        "editor",
        "commenter",
        "filler",
        "viewer",
    ];

    const shareProject = async () => {
        if (!nickname) return;

        Project.share(
            projectId,
            nickname,
            permissionOptions[permission],
            () => {
                refetch();
                setNickname("");
                setPermission(5);
            }
        );
    };

    return (
        <div className="flex items-center justify-center absolute bottom-3 left-5 gap-2">
            <Input
                text="Nickname"
                className="border-b border-neutral px-2 pb-1 outline-none bg-base-100"
                setValue={setNickname}
                onEnter={shareProject}
            />

            <Options
                options={permissionOptions}
                selected={permission}
                setSelected={setPermission}
            />

            <Point icon="FaPlus" library="fa6" onClick={shareProject} />
        </div>
    );
};

export default Share;
