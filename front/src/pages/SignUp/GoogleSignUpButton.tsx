// Libraries
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";

// Local
import Button from "components/Button";
import Icons from "modules/Icons";
import Request from "modules/Request";
import User from "services/user";
import { SignUpContext } from ".";

const GoogleSignUpButton = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const navigate = useNavigate();

    const context = useContext(SignUpContext);

    const googleLogin = useGoogleLogin({
        onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
        onError: () =>
            context?.setError({ message: "An error occurred", isError: true }),
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
                    context?.setError({
                        message: "An error occurred",
                        isError: true,
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    const memoizedSignUp = useCallback(signUp, [
        accessToken,
        navigate,
        context,
    ]);

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
