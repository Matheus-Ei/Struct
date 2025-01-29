// Local
import Button from "components/Button";
import Icon from "components/Icon";
import { IconType } from "types/global";

interface ChangeInfoProps {
    text: string;
    icon: IconType;
    onClick: () => void;
}

const ChangeInfo = ({ text, icon, onClick }: ChangeInfoProps) => {
    return (
        <Button
            className="border-none p-0 font-normal italic hover:text-secondary"
            onClick={onClick}
        >
            <div className="flex gap-x-2 items-center">
                <Icon value={icon} className="text-xl" />

                <h1 className="text-base-content italic">{text}</h1>
            </div>
        </Button>
    );
};

export default ChangeInfo;
