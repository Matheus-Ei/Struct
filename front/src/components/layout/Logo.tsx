// Components
import Image from "../common/Image";
import Text from "../common/Text";

interface LogoProps {
    src: any;
    text?: string;
}

const Logo = ({ src, text }: LogoProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center h-[30%]">
            <Image src={src} />
            <Text text={text ? text : ""} />
        </div>
    );
};

export default Logo;
