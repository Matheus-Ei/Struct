import Card from "components/Card";

interface WrapperSignUpProps {
    children: JSX.Element;
}

const WrapperSignUp = ({ children }: WrapperSignUpProps) => {
    return (
        <Card>
            <div className="w-[55vw] h-[400px] flex items-center justify-center">
                {children}
            </div>
        </Card>
    );
};

export default WrapperSignUp;
