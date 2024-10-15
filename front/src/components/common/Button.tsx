// Components
import Text from "./Text";

// Hooks
import { useTheme } from "../../hooks/useTheme";
import useToggle from "../../hooks/useToggle";
import { useEffect } from "react";

export const getStyle = (theme: any, isClicked: boolean) => {
    const style = isClicked
        ? {
              borderColor: theme.secondary,
              backgroundColor: theme.primary,
          }
        : { borderColor: theme.primary, backgroundColor: theme.secondary };

    return style;
};

interface ButtonProps {
    text: string;
    onClick: () => any;
    inverse: boolean;
}

const Button = ({ text, onClick, inverse }: ButtonProps) => {
    const [isClicked, toggleIsClicked] = useToggle(false);

    useEffect(() => {
        toggleIsClicked(inverse);
    }, []);

    const style = getStyle(useTheme(), isClicked);

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
