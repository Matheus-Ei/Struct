// Library
import { useState } from "react";

// Local
import Input from "components/Input";
import Options from "components/Options";
import Point from "components/Point";
import ProjectShare from ".";

const permissionOptions = [
    "owner",
    "admin",
    "editor",
    "commenter",
    "filler",
    "viewer",
];

interface AddUserProps {
    projectId: string | undefined;
    refetch?: () => void;
}

const AddUser = ({ projectId, refetch }: AddUserProps) => {
    const [nickname, setNickname] = useState<string>("");
    const [permission, setPermission] = useState<number>(0);

    const handleAdition = async () => {
        await ProjectShare.add(
            projectId,
            nickname,
            permissionOptions[permission]
        );

        refetch && refetch();
    };

    return (
        <div className="flex gap-x-4 items-center justify-center">
            <Input
                text="Nickname"
                className="border-b border-neutral px-2 pb-1 outline-none bg-base-100"
                setValue={setNickname}
                onEnter={handleAdition}
            />

            <Options
                options={permissionOptions}
                selected={permission}
                setSelected={setPermission}
            />

            <Point
                icon="BsFillShareFill"
                library="bs"
                onClick={handleAdition}
            />
        </div>
    );
};

export default AddUser;
