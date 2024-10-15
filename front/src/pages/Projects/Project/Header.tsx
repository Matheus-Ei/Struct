// Components
import Text from "../../../components/common/Text";

interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({ title, description }: HeaderProps) => {
    return (
        <div>
            <Text text={title} />

            <Text text={description} />
        </div>
    );
};

export default Header;
