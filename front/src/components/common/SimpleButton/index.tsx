import { useEffect } from "react";
import { useTheme } from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";
import Text from "../Text";
import * as S from "./styles";
import * as T from "./types";

const SimpleButton = ({ text, onClick }: T.ButtonProps) => {
    const theme = useTheme();
    const [isClicked, toggleIsClicked] = useToggle(false);

    const secondary = theme.secondary;
    const primary = theme.primary;

    const style = isClicked
        ? {
              borderColor: secondary,
              backgroundColor: primary,
          }
        : { borderColor: primary, backgroundColor: secondary };

    return (
        <S.Body
            style={style}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
            onMouseDown={() => {
                toggleIsClicked();
            }}
            onMouseUp={() => {
                toggleIsClicked();
            }}
        >
            <Text text={text} color={style.borderColor} />
        </S.Body>
    );
};

export default SimpleButton;
