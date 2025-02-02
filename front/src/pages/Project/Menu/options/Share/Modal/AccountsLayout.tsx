// Library
import { useEffect, useMemo, useState } from "react";

// Local
import Message404 from "components/Message404";
import SearchBar from "components/SearchBar";
import { SharedAccountType } from "services/project/type";
import UsersGrid from "./AccountsGrid";

interface AccountsLayoutProps {
    rawShares: SharedAccountType[];
    refetch: () => void;
}

const AccountsLayout = ({ rawShares, refetch }: AccountsLayoutProps) => {
    const [shares, setShares] = useState<string[]>([]);

    // Set shares to be the nicknames of the users
    useEffect(() => {
        if (rawShares) {
            setShares(
                rawShares.map((share: SharedAccountType) => share.account_nickname)
            );
        }
    }, [rawShares]);

    // Filter the users based on the search result
    const searchUsersNick: SharedAccountType[] = useMemo(
        () =>
            rawShares?.filter((share: SharedAccountType) =>
                shares.includes(share.account_nickname)
            ),
        [rawShares, shares]
    );

    // Get the nicknames of the users
    const usersNick: string[] = useMemo(
        () => rawShares?.map((share: SharedAccountType) => share.account_nickname),
        [rawShares]
    );

    if (!searchUsersNick) return <Message404 text="No users found" />;
    return (
        <div className="w-full h-full flex flex-col items-start justify-start">
            <>
                <SearchBar
                    className="w-5/6 h-9 mb-2"
                    searchPlace={usersNick}
                    placeholder="Search users"
                    setResult={setShares}
                />

                <UsersGrid accounts={searchUsersNick} refetch={refetch} />
            </>
        </div>
    );
};

export default AccountsLayout;
