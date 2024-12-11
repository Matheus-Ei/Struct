// Local
import Button from "components/Button";
import Icon from "components/Icon";

interface ChangeInfoProps {
    text: string;
    icon: string;
    library: string;
    onClick: () => void;
}

const ChangeInfo = ({ text, icon, library, onClick }: ChangeInfoProps) => {
    return (
        <Button
            className="border-none p-0 font-normal italic"
            onClick={onClick}
        >
            <div className="flex gap-x-2 items-center">
                <Icon
                    name={icon}
                    library={library}
                    className="text-primary text-xl"
                />

                <h1 className="text-base-content italic">{text}</h1>
            </div>
        </Button>
    );
};

export default ChangeInfo;
