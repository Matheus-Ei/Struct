// Components
import Image from "../common/Image";
import Text from "../common/Text";

interface LogoProps {
    src: any;
    text?: string;
}

const Logo = ({ src, text }: LogoProps): JSX.Element => {
    return (
        <div>
            <Image src={src} />
            <Text text={text ? text : ""} />
        </div>
    );
};

export default Logo;
