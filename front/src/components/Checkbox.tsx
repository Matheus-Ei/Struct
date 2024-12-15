// Local
import Event from "modules/Event";
import { SetStateType } from "types/global";

interface CheckboxProps {
    title: string;
    group: string;
    value: { check: string; set: SetStateType<string> };
}

const Checkbox = ({ title, group, value }: CheckboxProps) => {
    const isChecked = title !== value.check;
    const handleCheck = () => Event.onChangeSet(title, value.set, isChecked);

    return (
        <div className="form-control">
            <label className="label cursor-pointer gap-6">
                <input
                    type="radio"
                    name={group}
                    className="radio checked:bg-primary rounded-btn"
                    onChange={handleCheck}
                />

                <span className="label-text">{title}</span>
            </label>
        </div>
    );
};

export default Checkbox;
