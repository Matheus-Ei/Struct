// Components
import Input from "../common/Input";
import Button from "../common/Button";

interface FormProps {
    src: Array<any>;
    action: () => void;
    sendText: string;
}

const Form = ({ src, action, sendText }: FormProps) => {
    return (
        <div>
            {src.map((item: any, index: number) => {
                return (
                    <Input
                        text={item[0]}
                        setInput={item[1]}
                        isPassword={item[2]}
                        key={index}
                    />
                );
            })}

            <Button text={sendText} onClick={action} />
        </div>
    );
};

export default Form;
