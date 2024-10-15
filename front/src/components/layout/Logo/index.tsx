// Modules
import * as T from "./types";
import "./styles.css";

// Components
import Image from "../../common/Image";
import Paragraph from "./Paragraph";

// Hooks
import { useTheme } from "../../../hooks/useTheme";

const Logo = ({ src, flexDirection, text }: T.LogoProps): JSX.Element => {
    const bodyStyle: Object = { flexDirection };

    return (
        <div style={bodyStyle} className="logo-body">
            <Image height={60} width={80} src={src} />
            <Paragraph text={text} theme={useTheme()} />
        </div>
    );
};

export default Logo;
