// Modules
import * as S from "./styles";

// Components
import Text from "../../../../../../components/common/Text";

interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({ title, description }: HeaderProps) => {
    return (
        <S.Body>
            <Text text={title} weight="bold" />

            <Text text={description} containerWidth={90} />
        </S.Body>
    );
};

export default Header;
