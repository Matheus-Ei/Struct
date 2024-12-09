// Library
import { useEffect, useState } from "react";

// Local
import useDefinedContext from "hooks/useDefinedContext";
import { ProjectContext } from "pages/Project";
import SearchBar from "components/SearchBar";
import Modal from "components/Modal";

// Services
import AddUser from "services/project/share/Add";
import { SharedUserType } from "services/project/type";
import { useProjectShare } from "services/project/share/useShare";
import RenderUser from "services/project/share/RenderUser";
import Icon from "components/Icon";

interface ShareModalProps {
    isOpen: boolean;
    toggleOpen: (isOpen: boolean) => void;
}

const ShareModal = ({ isOpen, toggleOpen }: ShareModalProps) => {
    const { projectId } = useDefinedContext(ProjectContext);

    const { data: allShares, refetch: refetchUsers } =
        useProjectShare(projectId);

    const [shares, setShares] = useState<string[]>([]);

    // Set shares to be the nicknames of the users
    useEffect(() => {
        if (allShares) {
            setShares(
                allShares.map((share: SharedUserType) => share.user_nickname)
            );
        }
    }, [allShares]);

    const getUsers = () => {
        return allShares?.filter((share: SharedUserType) =>
            shares.includes(share.user_nickname)
        );
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={() => toggleOpen(false)}
            className="pb-4 sm:pb-0 sm:h-[40rem] sm:w-[60vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[25vw]"
        >
            <div className="flex flex-col w-full h-full items-center justify-between">
                <div className="w-full h-full flex flex-col items-center justify-start">
                    {!getUsers() ? (
                        <div className="w-full">
                            <h1>No user found...</h1>
                            <Icon
                                name="TbError404"
                                library="tb"
                                className="text-4xl w-fit"
                            />
                        </div>
                    ) : (
                        <>
                            <SearchBar
                                className="w-5/6 h-9 pl-4 mb-2"
                                searchPlace={
                                    allShares?.map(
                                        (share: SharedUserType) =>
                                            share.user_nickname
                                    ) ?? []
                                }
                                placeholder="Search users"
                                setResult={setShares}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-items-start w-full mt-2 ml-4">
                                {getUsers()?.map(
                                    (item: SharedUserType, index: number) => (
                                        <RenderUser
                                            user={item}
                                            refetch={refetchUsers}
                                            key={index}
                                        />
                                    )
                                )}
                            </div>
                        </>
                    )}
                </div>

                <AddUser projectId={projectId} refetch={refetchUsers} />
            </div>
        </Modal>
    );
};

export default ShareModal;
