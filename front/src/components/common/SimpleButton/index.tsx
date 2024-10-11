// Modules
import * as S from "./styles";
import * as T from "./types";

// Components
import Text from "../Text";

// Hooks
import { useTheme } from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";
import React, { useEffect } from "react";

const SimpleButton = ({ text, onClick, inverse }: T.ButtonProps): JSX.Element => {
    const [isClicked, toggleIsClicked] = useToggle(false);

    useEffect(() => {
        if (inverse) {
            toggleIsClicked(inverse);
        }
    }, []);

    // Style definitions
    const theme = useTheme();
    const secondary = theme.secondary;
    const primary = theme.primary;

    const style = isClicked
        ? {
              borderColor: secondary,
              backgroundColor: primary,
          }
        : { borderColor: primary, backgroundColor: secondary };

    // Event functions
    const onMouseLeave = () => {
        toggleIsClicked(false);

        if (inverse) {
            toggleIsClicked(true);
        }
    };

    const changeStyle = () => {
        toggleIsClicked();
    };

    return (
        <S.Body
            style={style}
            onClick={onClick}
            onMouseDown={changeStyle}
            onMouseUp={changeStyle}
            onMouseLeave={onMouseLeave}
        >
            <Text text={text} color={style.borderColor} />
        </S.Body>
    );
};

export default React.memo(SimpleButton);
