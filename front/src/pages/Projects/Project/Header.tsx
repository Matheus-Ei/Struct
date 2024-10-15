// Components
import Text from "../../../components/common/Text";
import { useTheme } from "../../../hooks/useTheme";

interface HeaderProps {
    title: string;
    description: string;
}

const Header = ({ title, description }: HeaderProps) => {
    const theme = useTheme();

    return (
        <div className="project-header-body">
            <Text text={title} weight="bold" color={theme.secondary} />

            <Text text={description} containerWidth={90} color={theme.middle} />
        </div>
    );
};

export default Header;
