// Components
import Text from "./Text";

interface ButtonProps {
    text: string;
    onClick: () => any;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <div onClick={onClick}>
            <Text text={text} />
        </div>
    );
};

export default Button;
