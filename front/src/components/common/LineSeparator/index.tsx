// Modules
import { useTheme } from "../../../hooks/useTheme";
import Text from "../Text";
import * as S from "./styles";
import * as T from "./types";

const LineSeparator = ({ text, width, style }: T.LineSeparatorProps) => {
    const theme = useTheme();
    const color = theme.middle;

    const Line = () => <S.Line style={{ borderColor: color }} />;

    return (
        <S.Body style={{ width: `${width}%` }}>
            <Line />

            <Text text={text} color={color} size={1} />

            {style === "dual" ? (
                <Line />
            ) : (
                <S.Line style={{ border: "none" }} />
            )}
        </S.Body>
    );
};

export default LineSeparator;
