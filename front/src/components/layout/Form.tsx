// Components
import Input from "../common/Input";
import Button from "../common/Button";

// Animations
import scale from "../../animations/scale";

interface FormProps {
    src: Array<any>;
    action: () => void;
    sendText: string;
}

const Form = ({ src, action, sendText }: FormProps) => {
    const AnimatedButton = scale(Button, 1.05, "hover");

    return (
        <div
            className="flex-body"
            style={{ flexDirection: "column", gap: "5vh", width: "90%" }}
        >
            {src.map((item: any, index: number) => {
                return (
                    <Input
                        text={item[0]}
                        setInput={item[1]}
                        width={90}
                        height={100}
                        isPassword={item[2]}
                        key={index}
                    />
                );
            })}

            <AnimatedButton text={sendText} onClick={action} inverse={false} />
        </div>
    );
};

export default Form;
