// Components
import Icons from "../../services/Icons";
import Text from "./Text";

interface PointProps {
    text: string;
    icon: string;
    library: string;
}

const Point = ({ icon, library, text }: PointProps) => {
    const style = `flex items-center justify-center w-fit gap-5 rounded-lg px-5 py-1`;

    return (
        <div className={style}>
            <Icons name={icon} library={library} size={20} />

            <Text text={text} />
        </div>
    );
};

export default Point;
