// Libraries
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// Local
import Button from "components/Button";
import Icons from "modules/Icons";
import User from "services/user";
import { useGoogleUserProvider } from "services/providers/useUser";

interface GoogleLoginButtonProps {
    toggleError: (value: boolean) => void;
}

const GoogleLoginButton = ({ toggleError }: GoogleLoginButtonProps) => {
    const [googleAccessToken, setGoogleAccessToken] = useState<string | null>(
        null
    );
    const navigate = useNavigate();
    const { data: response } = useGoogleUserProvider(googleAccessToken);

    // Gets the access_token from the google login
    const googleProvider = useGoogleLogin({
        onSuccess: (codeResponse) =>
            setGoogleAccessToken(codeResponse.access_token),
        onError: (error) => console.log("Login Failed:", error),
    });

    const login = async () => {
        try {
            if (!response) return;

            // Make the login using the Auth autenticator
            const isLogged = await User.login(
                response.mail,
                "",
                "Auth",
                navigate
            );

            if (!isLogged) {
                toggleError(true);
            }
        } catch {
            toggleError(true);
        }
    };

    const memoizedLogin = useCallback(login, [
        navigate,
        toggleError,
        response,
    ]);

    useEffect(() => {
        memoizedLogin();
    }, [memoizedLogin]);

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

export default GoogleLoginButton;
