import Checkbox from "components/Checkbox";
import Selector from "components/Selector";
import { Dispatch, SetStateAction } from "react";

interface OptionsProps {
    setModule: Dispatch<SetStateAction<string>>;
    setType: Dispatch<SetStateAction<string>>;
    type: string;
}

const Options = ({ setModule, setType, type }: OptionsProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-1/4 h-full gap-12">
            <div className="flex flex-row items-center justify-center w-full h-fit">
                <Selector options={["Notes"]} setCurrent={setModule} />
            </div>

            <div className="flex flex-row items-center justify-center w-full h-fit gap-4">
                <Checkbox
                    text="Singular"
                    group="type"
                    checked={type}
                    setChecked={setType}
                />

                <Checkbox
                    text="Monopage"
                    group="type"
                    checked={type}
                    setChecked={setType}
                />
            </div>
        </div>
    );
};

export default Options;
