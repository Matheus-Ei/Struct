// Libraries
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";

// Local
import Button from "components/Button";
import Icons from "modules/Icons";
import User from "services/user";
import { SignUpContext } from ".";
import { useGoogleUserProvider } from "services/providers/useUser";

const GoogleSignUpButton = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const navigate = useNavigate();
    const context = useContext(SignUpContext);

    const { data: response } = useGoogleUserProvider(accessToken);

    const googleProvider = useGoogleLogin({
        onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
        onError: () =>
            context?.setError({ message: "An error occurred", isError: true }),
    });

    const signUp = async () => {
        try {
            if (!response) return;

            const isSignedUp = await User.signUp(
                response.name,
                response.nickname,
                response.mail,
                undefined,
                "Auth",
                navigate
            );

            if (!isSignedUp) {
                context?.setError({
                    message: "An error occurred",
                    isError: true,
                });
            }
        } catch (error) {
            context?.setError({ message: "An error occurred", isError: true });
        }
    };

    const memoizedSignUp = useCallback(signUp, [navigate, context, response]);

    useEffect(() => {
        memoizedSignUp();
    }, [memoizedSignUp]);

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

export default GoogleSignUpButton;
