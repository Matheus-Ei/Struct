// Hooks
import { useTheme } from "../../hooks/useTheme";

interface CardProps {
    children: JSX.Element;

    width?: number;
    height?: number;
}

const Card = ({ children, width, height }: CardProps) => {
    const theme = useTheme();

    const style: Object = {
        width: `${width}%`,
        height: `${height}%`,
        backgroundColor: theme.primary,
        borderColor: theme.secondary,
    };

    return (
        <div className="flex-body set-border" style={style}>
            {children}
        </div>
    );
};

export default Card;
