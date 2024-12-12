// Local
import Icon from "components/Icon";

interface TitleProps {
    text?: string;
    icon?: { position: "left" | "right"; name: string; library: string };
}

const Title = ({ text, icon }: TitleProps) => {
    if (!text && !icon) return null;

    const iconRight = icon && icon.position === "right";
    const iconLeft = icon && icon.position === "left";

    return (
        <div className="flex items-center gap-x-2">
            {iconRight && <Icon value={{ name: "MdEdit", library: "md" }} />}

            {text && <h1 className="font-bold italic select-none">{text}</h1>}

            {iconLeft && <Icon value={{ name: "MdEdit", library: "md" }} />}
        </div>
    );
};

export default Title;
