// Libraries
import { useCallback, useContext, useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

// Local
import useUserProvider from "services/providers/useUserProvider";
import Button from "components/Button";
import Icon from "components/Icon";
import User from "services/user";
import { SignUpContext } from "..";

const GoogleSignUp = () => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const useSignUpContext = useContext(SignUpContext);

    const { data: response } = useUserProvider(accessToken, "google");

    const googleProvider = useGoogleLogin({
        onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
        onError: () =>
            useSignUpContext?.setError({
                message: "An error occurred",
                isError: true,
            }),
    });

    const navigate = useNavigate();
    const signUp = useCallback(async () => {
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

            if (!isSignedUp)
                useSignUpContext?.setError({
                    message: "An error occurred",
                    isError: true,
                });
        } catch (error) {
            useSignUpContext?.setError({
                message: "An error occurred",
                isError: true,
            });
        }
    }, [useSignUpContext, navigate, response]);

    useEffect(() => {
        signUp();
    }, [signUp]);

    return (
        <Button
            className="border-2 w-fit h-fit p-2 rounded-btn bg-white border-red-400 text-red-400 font-bold text-2xl"
            inverse={true}
            onClick={googleProvider}
        >
            <Icon library="fc" name="FcGoogle" />
        </Button>
    );
};

export default GoogleSignUp;
