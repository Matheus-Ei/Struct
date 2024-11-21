// Libraries
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

// Local
import Button from "components/Button";
import Request from "modules/Request";
import Icons from "modules/Icons";
import User from "services/user";

interface GoogleLoginButtonProps {
    toggleError: (value: boolean) => void;
}

const GoogleLoginButton = ({ toggleError }: GoogleLoginButtonProps) => {
    const [googleAccessToken, setGoogleAccessToken] = useState<string | null>(
        null
    );
    const navigate = useNavigate();

    // Gets the access_token from the google login
    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) =>
            setGoogleAccessToken(codeResponse.access_token),
        onError: (error) => console.log("Login Failed:", error),
    });

    const login = async () => {
        if (googleAccessToken) {
            try {
                // Get the informations of the user from the access_token
                const response = await Request.post("user/auth/google", {
                    access_token: googleAccessToken,
                });

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
            } catch (error) {
                console.error(error);
            }
        }
    };

    const memoizedLogin = useCallback(login, [
        googleAccessToken,
        navigate,
        toggleError,
    ]);

    useEffect(() => {
        memoizedLogin();
    }, [memoizedLogin]);

    return (
        <Button
            className="border-2 w-fit h-fit p-2 rounded-btn bg-white border-red-400 text-red-400 font-bold text-2xl"
            inverse={true}
            onClick={googleLogin}
        >
            <Icons library="fc" name="FcGoogle" />
        </Button>
    );
};

export default GoogleLoginButton;
