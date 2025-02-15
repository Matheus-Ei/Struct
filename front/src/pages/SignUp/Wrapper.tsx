// Local
import { ReactComponent as Logo } from "assets/logo-500x500-3.svg";
import { goPrevStep } from "./utils/functions";
import GoogleSignUp from "./provider/Google";
import Card from "components/Card";
import Icon from "components/Icon";
import { SignUpContext } from "./context";
import useSafeContext from "hooks/useSafeContext";

interface WrapperSignUpProps {
    children: JSX.Element;
}

const WrapperSignUp = ({ children }: WrapperSignUpProps) => {
    const { step, setStep } = useSafeContext(SignUpContext);

    const prevStep = () => {
        goPrevStep(setStep);
    };

    return (
        <Card>
            <div className="relative w-[55vw] h-[450px] p-4 flex flex-col items-center justify-center">
                {step !== 0 && (
                    <button
                        className="absolute flex top-4 left-4 gap-2 items-center justify-center text-neutral"
                        onClick={prevStep}
                    >
                        <Icon
                            value={{
                                name: "IoArrowBackOutline",
                                library: "io5",
                            }}
                        />
                        <p>Go back</p>
                    </button>
                )}

                <div className="w-full h-full flex items-center justify-center gap-[10%]">
                    <div className="w-fit h-fit flex flex-col items-center">
                        <Logo className="text-primary w-52 h-fit mb-4" />

                        <p className="text-primary text-center text-lg w-72">
                            Venha fazer parte de um mundo mais organizado.
                        </p>
                    </div>

                    {children}
                </div>

                <div className="divider px-40">Or sign-up with</div>
                <GoogleSignUp />
            </div>
        </Card>
    );
};

export default WrapperSignUp;
