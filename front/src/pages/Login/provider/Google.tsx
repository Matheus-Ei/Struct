// Libraries
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// Local
import Button from "components/Button";
import Icons from "modules/Icons";
import User from "services/user";
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

    useEffect(() => {
        login();
    }, [login]);

    return (
        <Button
            className="border-2 w-fit h-fit p-2 rounded-btn bg-white border-red-400 text-red-400 font-bold text-2xl"
            inverse={true}
            onClick={googleProvider}
        >
            <Icons library="fc" name="FcGoogle" />
        </Button>
    );
};

export default GoogleLogin;
