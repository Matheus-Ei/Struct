// Library
import { useQuery } from "react-query";

// Local
import User from ".";

export const useUser = () => {
    return useQuery("user", User.get);
};
