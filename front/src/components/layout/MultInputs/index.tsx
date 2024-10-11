import { useTheme } from "../../../hooks/useTheme";
import Input from "../../common/Input";
import * as S from "./styles";
import * as T from "./types";

const MultInput = ({ srcList }: T.MultInputsProps) => {
    return (
        <S.Body>
            {srcList.map((item: any, index: number) => {
                return (
                    <Input
                        text={item[0]}
                        setInput={item[1]}
                        width={80}
                        height={100}
                        borderRadius={10}
                        key={index}
                    />
                );
            })}
        </S.Body>
    );
};

export default MultInput;
