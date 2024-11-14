// Libraries
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useEffect,
    useState,
} from "react";

// Local
import Button from "components/Button";
import Icons from "services/Icons";
import Request from "services/Request";
import User from "utils/user";

interface GoogleSignUpButtonProps {
    toggleError: (value: boolean) => void;
    setErrorMessage: Dispatch<SetStateAction<string | null>>;
}

const GoogleSignUpButton = ({
    toggleError,
    setErrorMessage,
}: GoogleSignUpButtonProps) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
        onError: () => toggleError(true),
    });

    const signUp = async () => {
        if (accessToken) {
            try {
                // Get the informations from the user access_token
                const response = await Request.post("user/auth/google", {
                    access_token: accessToken,
                });

                const isSignedUp = await User.signUp(
                    response.name,
                    response.nickname,
                    response.mail,
                    undefined,
                    "Auth",
                    navigate
                );

                if (!isSignedUp) {
                    setErrorMessage("An error occurred, please try again");
                    toggleError(true);
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const memoizedSignUp = useCallback(signUp, [accessToken, navigate, toggleError, setErrorMessage]);

    useEffect(() => {
        memoizedSignUp();
    }, [memoizedSignUp]);

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

export default GoogleSignUpButton;
