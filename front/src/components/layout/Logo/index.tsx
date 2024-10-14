// Modules
import * as S from "./styles";
import * as T from "./types";

// Components
import Image from "../../common/Image";
import Paragraph from "./components/Paragraph";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Logo = ({
    src,
    flexDirection,
    text,
}: T.LogoProps): JSX.Element => {
    const bodyStyle: Object = { flexDirection };

    return (
        <S.Body style={bodyStyle}>
            <Image height={60} width={80} src={src} />
            <Paragraph text={text} theme={useTheme()} />
        </S.Body>
    );
};

export default Logo;
