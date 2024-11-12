import Card from "components/Card";
import Icons from "services/Icons";
import { ReactComponent as Logo } from "assets/logo-500x500-3.svg";
import { useContext } from "react";
import { SignUpContext } from ".";
import { goPrevStep } from "./functions";

interface WrapperSignUpProps {
    children: JSX.Element;
}

const WrapperSignUp = ({ children }: WrapperSignUpProps) => {
    const context = useContext(SignUpContext);

    if (!context) return null;
    const { step, setStep } = context;

    const prevStep = () => {
        goPrevStep(setStep);
    };

    return (
        <Card>
            <div className="relative w-[55vw] h-[400px] flex items-center justify-center">
                {step !== 0 && (
                    <button
                        className="absolute flex top-4 left-4 gap-2 items-center justify-center text-neutral"
                        onClick={prevStep}
                    >
                        <Icons library="io5" name="IoArrowBackOutline" />
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
            </div>
        </Card>
    );
};

export default WrapperSignUp;
