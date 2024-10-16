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
        <div className="flex flex-col items-center justify-center gap-2 w-full">
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

            <Button text={sendText} onClick={action} inverse={true} />
        </div>
    );
};

export default Form;
