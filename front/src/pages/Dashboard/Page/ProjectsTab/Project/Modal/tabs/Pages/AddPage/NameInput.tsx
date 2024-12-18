// Local
import Input from "components/Input";
import { SetStateType } from "types/global";

interface NameInputProps {
    setTitle: SetStateType<string>;
    onEnter: () => void;
}

const NameInput = ({ setTitle, onEnter }: NameInputProps) => {
    return (
        <Input
            placeholder="Title"
            className="border-base-100 rounded-none border-b border-b-neutral m-0 h-8 px-2 pb-1 outline-none bg-base-100"
            setValue={setTitle}
            onEnter={onEnter}
        />
    );
};

export default NameInput;
