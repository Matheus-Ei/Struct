// Libraries
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Local
import Button from "components/Button";
import Icons from "services/Icons";
import Request from "services/Request";

interface GoogleSignUpButtonProps {
    toggleError: (value: boolean) => void;
}

const GoogleSignUpButton = ({ toggleError }: GoogleSignUpButtonProps) => {
    const [googleAccessToken, setGoogleAccessToken] = useState<string | null>(
        null
    );
    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) =>
            setGoogleAccessToken(codeResponse.access_token),
        onError: () => toggleError(true),
    });

    const signUp = async () => {
        if (googleAccessToken) {
            try {
                // Get the informations from the user access_token
                const response = await Request.post("user/auth/google", {
                    access_token: googleAccessToken,
                });

                // Register the user using the Auth autenticator
                await Request.post("user/register", {
                    name: response.name,
                    nickname: response.nickname,
                    mail: response.mail,
                    autenticator: "Auth",
                });
            } catch (error) {
                console.error(error);
            } finally {
                navigate("/dashboard");
            }
        }
    };

    useEffect(() => {
        signUp();
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

export default GoogleSignUpButton;
