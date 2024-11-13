import { useGoogleLogin } from "@react-oauth/google";
import Button from "components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "services/Icons";
import Request from "services/Request";
import Login from "utils/login";

interface GoogleLoginButtonProps {
    toggleError: (value: boolean) => void;
}

const GoogleLoginButton = ({ toggleError }: GoogleLoginButtonProps) => {
    const [googleAccessToken, setGoogleAccessToken] = useState<string | null>(
        null
    );
    const navigate = useNavigate();

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
                const isLogged = await Login.make(
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

    useEffect(() => {
        login();
    }, [googleAccessToken]);

    return (
        <Button
            className="border-2 w-fit h-fit px-6 py-2 rounded-btn bg-white border-red-400 text-red-400 font-bold text-2xl"
            inverse={true}
            onClick={googleLogin}
        >
            <Icons library="fc" name="FcGoogle" />
        </Button>
    );
};

export default GoogleLoginButton;
