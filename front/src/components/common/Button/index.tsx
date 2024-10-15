// Modules
import * as S from "./styles";
import * as T from "./types";

// Components
import Text from "../Text";

// Hooks
import { useTheme } from "../../../hooks/useTheme";
import useToggle from "../../../hooks/useToggle";
import { useEffect } from "react";

const Button = ({ text, onClick, inverse }: T.ButtonProps) => {
    const [isClicked, toggleIsClicked] = useToggle(false);

    useEffect(() => {
        toggleIsClicked(inverse);
    }, []);

    const style = S.getStyle(useTheme(), isClicked);

    const returnDefaultStyle = () => {
        toggleIsClicked(inverse);
    };

    const toggleStyle = () => {
        toggleIsClicked();
    };

    return (
        <div
            className="set-border space-around"
            style={style}
            onClick={onClick}
            onMouseDown={toggleStyle}
            onMouseUp={toggleStyle}
            onMouseLeave={returnDefaultStyle}
        >
            <Text text={text} color={style.borderColor} size={1.2} />
        </div>
    );
};

export default Button;
