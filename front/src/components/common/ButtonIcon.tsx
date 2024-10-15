// Components
import Icons from "../../services/Icons";

interface ButtonIconProps {
    icon: string;
    library: string;
    onClick: () => any;
}

const ButtonIcon = ({ icon, library, onClick }: ButtonIconProps) => {
    return (
        <div onClick={onClick}>
            <Icons name={icon} library={library} />
        </div>
    );
};

export default ButtonIcon;
