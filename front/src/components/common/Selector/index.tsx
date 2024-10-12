// Modules
import * as S from "./styles";
import * as T from "./types";

// Hooks
import { useTheme } from "../../../hooks/useTheme";
import Icons from "../../../services/Icons";

const Selector = ({
    name,
    icon,
    repository,
    isSelected,
    setSelected,
}: T.SelectorProps): JSX.Element => {
    const theme = useTheme();

    const bodyStyle: Object = {
        backgroundColor: isSelected ? theme.semi : theme.primary,
        color: theme.secondary,
    };

    const handleClick = () => {
        setSelected(name);
    };

    return (
        <S.Body onClick={handleClick} style={bodyStyle}>
            <Icons name={icon} library={repository} color={theme.secondary} />
            <S.Text>{name}</S.Text>
        </S.Body>
    );
};

export default Selector;
