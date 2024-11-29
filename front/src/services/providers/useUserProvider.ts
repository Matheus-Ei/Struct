// Libraries
import { useQuery } from "react-query";

// Local
import Request from "modules/Request";

const useUserProvider = (access_token: string | null, provider: "google") => {
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

    return useQuery(["google-user-provider", access_token], () => {
        switch (provider) {
            case "google":
                return getGoogleUser(access_token);
        }
    });
};

export default useUserProvider;
