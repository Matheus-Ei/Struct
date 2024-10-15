// Components
import Icons from "../../services/Icons";

interface IconType {
    name: string;
    library: string;
}

type MultiIconType = Array<IconType>;

interface IconPointProps {
    icons: MultiIconType;
}

const IconPoint = ({ icons }: IconPointProps) => {
    return (
        <div>
            {icons.map((item: IconType, index: number) => {
                return (
                    <Icons
                        name={item.name}
                        library={item.library}
                        size={20}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default IconPoint;
