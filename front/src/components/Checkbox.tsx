// Local
import Event from "modules/Event";
import { SetStateType } from "types/global";

interface CheckboxProps {
    text: string;
    group: string;
    setChecked: SetStateType<string>;
    checked: string;
}

const Checkbox = ({ text, group, setChecked, checked }: CheckboxProps) => {
    const condition = text !== checked;
    const handleCheck = () => Event.onChangeSet(text, setChecked, condition);

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
