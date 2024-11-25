import { useQuery } from "react-query";
import Request from "modules/Request";

export const useGoogleUserProvider = (access_token: string | null) => {
    const getGoogleUser = async (access_token: string | null) => {
        try {
            if (!access_token) return null;

            const response = await Request.post("provider/user/google", {
                access_token,
            });

            return response.data;
        } catch {
            return null;
        }
    };

    return useQuery(["google-user-provider", access_token], () =>
        getGoogleUser(access_token)
    );
};
