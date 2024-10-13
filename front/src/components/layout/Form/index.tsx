// Modules
import * as S from "./styles";
import * as T from "./types";

// Components
import Input from "../../common/Input";
import Button from "../../common/Button";

// Animations
import scale from "../../../animations/scale";

const Form = ({ src, action, sendText }: T.FormProps) => {
    const AnimatedButton = scale(Button, 1.05, "hover");

    return (
        <S.Body>
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
        </S.Body>
    );
};

export default Form;
