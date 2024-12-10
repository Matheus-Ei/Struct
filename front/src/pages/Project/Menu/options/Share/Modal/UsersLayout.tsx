// Library
import { useEffect, useMemo, useState } from "react";

// Local
import Message404 from "components/Message404";
import SearchBar from "components/SearchBar";
import { SharedUserType } from "services/project/type";
import Users from "./Users";

interface UsersLayoutProps {
    rawShares: SharedUserType[];
    refetch: () => void;
}

const UsersLayout = ({ rawShares, refetch }: UsersLayoutProps) => {
    const [shares, setShares] = useState<string[]>([]);

    // Set shares to be the nicknames of the users
    useEffect(() => {
        if (rawShares) {
            setShares(
                rawShares.map((share: SharedUserType) => share.user_nickname)
            );
        }
    }, [rawShares]);

    // Filter the users based on the search result
    const searchUsersNick: SharedUserType[] = useMemo(
        () =>
            rawShares?.filter((share: SharedUserType) =>
                shares.includes(share.user_nickname)
            ),
        [rawShares, shares]
    );

    // Get the nicknames of the users
    const usersNick: string[] = useMemo(
        () => rawShares?.map((share: SharedUserType) => share.user_nickname),
        [rawShares]
    );

    return (
        <div className="w-full h-full flex flex-col items-center justify-start">
            {!searchUsersNick ? (
                <Message404 text="No users found" />
            ) : (
                <>
                    <SearchBar
                        className="w-5/6 h-9 pl-4 mb-2"
                        searchPlace={usersNick}
                        placeholder="Search users"
                        setResult={setShares}
                    />

                    <Users users={searchUsersNick} refetch={refetch} />
                </>
            )}
        </div>
    );
};

export default UsersLayout;
