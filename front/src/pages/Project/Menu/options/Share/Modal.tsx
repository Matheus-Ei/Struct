// Library
import clsx from "clsx";
import Input from "components/Input";

// Local
import Modal from "components/Modal";
import Options from "components/Options";
import Point from "components/Point";
import SearchBar from "components/SearchBar";
import { useState } from "react";

const modalCss = clsx(
    "relative w-screen h-screen sm:w-[25vw] sm:h-[40rem] z-30",
    "flex flex-col items-start justify-start"
);

interface ShareModalProps {
    isOpen: boolean;
    toggleOpen: (isOpen: boolean) => void;
}

const ShareModal = ({ isOpen, toggleOpen }: ShareModalProps) => {
    // Temporary data
    const allShares = [
        { name: "Share 1" },
        { name: "Share 2" },
        { name: "Share 3" },
    ];
    const permissionOptions = [
        "owner",
        "admin",
        "editor",
        "commenter",
        "filler",
        "viewer",
    ];

    const [nickname, setNickname] = useState<string>("");
    const [permission, setPermission] = useState<number>(0);
    const [shares, setShares] = useState<string[]>([]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => toggleOpen(false)}
            className={modalCss}
        >
            <div className="flex flex-col w-full h-full items-center justify-between">
                <div className="w-full h-full flex flex-col items-center justify-start">
                    <SearchBar
                        className="w-5/6 h-9 pl-4 mb-2 outline-none border-b bg-base-100"
                        searchPlace={allShares.map((share) => share.name)}
                        placeholder="Search users"
                        setResult={setShares}
                    />

                    {/* Users will go here */}
                </div>

                <div className="flex items-center justify-center gap-x-4">
                    <Input
                        text="Nickname"
                        className="border-b border-neutral px-2 pb-1 outline-none bg-base-100"
                        setValue={setNickname}
                        onEnter={() => {}}
                    />

                    <Options
                        options={permissionOptions}
                        selected={permission}
                        setSelected={setPermission}
                    />

                    <Point
                        icon="BsFillShareFill"
                        library="bs"
                        onClick={() => {}}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default ShareModal;
