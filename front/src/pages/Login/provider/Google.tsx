// Libraries
import { useCallback, useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

// Components
import Button from "components/Button";
import Icon from "components/Icon";
import User from "services/user";

// Local
import useUserProvider from "services/providers/useUserProvider";

interface GoogleLoginProps {
    toggleError: (value: boolean) => void;
}

const GoogleLogin = ({ toggleError }: GoogleLoginProps) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const { data: response } = useUserProvider(accessToken, "google");
    const navigate = useNavigate();

    // Gets the access_token from the google login
    const googleProvider = useGoogleLogin({
        onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
        onError: () => toggleError(true),
    });

    const login = useCallback(async () => {
        if (!response) return;

        // Make the login using the Auth autenticator
        const isLogged = await User.login(response.mail, "", "Auth", navigate);

        if (!isLogged) toggleError(true);
        toggleError(true);
    }, [navigate, toggleError, response]);

    // Login the user when the response is ready
    useEffect(() => {
        login();
    }, [login]);

    return (
        <Button
            className="border-2 p-2 bg-white border-red-400 text-red-400 text-2xl"
            inverse={true}
            onClick={googleProvider}
        >
            <Icon value={{ name: "FcGoogle", library: "fc" }} />
        </Button>
    );
};

export default GoogleLogin;
