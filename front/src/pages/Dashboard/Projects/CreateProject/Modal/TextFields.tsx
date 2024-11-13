// Libraries
import { Dispatch, SetStateAction } from "react";

// Local
import Input from "components/Input";

interface TextFieldsProps {
    setTitle: Dispatch<SetStateAction<string>>;
    setDescription: Dispatch<SetStateAction<string>>;
}

const TextFields = ({ setTitle, setDescription }: TextFieldsProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-11/12 h-full">
            <Input text="Title" type="textarea" setValue={setTitle} />

            <Input
                text="Description"
                type="textarea"
                className="border rounded-btn h-96 w-[95%] outline-none pl-4 border-neutral mb-3 bg-base-100 text-base-content pt-4 resize-none"
                setValue={setDescription}
            />
        </div>
    );
};

export default TextFields;
