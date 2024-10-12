// Modules
import * as S from "./styles";
import * as T from "./types";

// Components
import Input from "../../common/Input";
import Button from "../../common/Button";

// Libraries
import React from "react";

const Form = ({ src, action, sendText }: T.FormProps): JSX.Element => {
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

            <Button text={sendText} onClick={action} inverse={false} />
        </S.Body>
    );
};

export default React.memo(Form);
