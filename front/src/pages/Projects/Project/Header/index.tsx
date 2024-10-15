// Modules
import * as T from "./types";

// Components
import Text from "../../../../components/common/Text";
import { useTheme } from "../../../../hooks/useTheme";

const Header = ({ title, description }: T.HeaderProps) => {
    const theme = useTheme();

    return (
        <div className="project-header-body">
            <Text text={title} weight="bold" color={theme.secondary} />

            <Text text={description} containerWidth={90} color={theme.middle} />
        </div>
    );
};

export default Header;
