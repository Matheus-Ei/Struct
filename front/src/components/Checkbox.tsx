// Libraries
import { Dispatch, SetStateAction } from "react";

interface CheckboxProps {
    text: string;
    group: string;
    setChecked: Dispatch<SetStateAction<string>>;
    checked: string;
}

const Checkbox = ({ text, group, setChecked, checked }: CheckboxProps) => {
    const handleCheck = () => text !== checked && setChecked(text);

    return (
        <div className="form-control">
            <label className="label cursor-pointer gap-6">
                <input
                    type="radio"
                    name={group}
                    className="radio checked:bg-primary rounded-btn"
                    onChange={handleCheck}
                />

                <span className="label-text">{text}</span>
            </label>
        </div>
    );
};

export default Checkbox;
