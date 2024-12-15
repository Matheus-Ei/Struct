// Libraries
import { useQuery } from "react-query";

// Local
import Request from "modules/Request";

const useUserProvider = (accessToken: string | null, provider: "google") => {
    const getGoogleUser = async (accessToken: string | null) => {
        try {
            if (!accessToken) return null;

            const response = await Request.post("provider/user/google", {
                access_token: accessToken,
            });

            return response.data;
        } catch {
            return null;
        }
    };

    return useQuery(["google-user-provider", accessToken], () => {
        switch (provider) {
            case "google":
                return getGoogleUser(accessToken);
        }
    });
};

export default useUserProvider;
