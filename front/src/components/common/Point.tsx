// Components
import Icons from "../../services/Icons";
import Text from "./Text";

interface PointProps {
    text: string;
    icon: string;
    library: string;
}

const Point = ({ icon, library, text }: PointProps) => {
    return (
        <div>
            <Icons name={icon} library={library} size={20} />

            <Text text={text} />
        </div>
    );
};

export default Point;
