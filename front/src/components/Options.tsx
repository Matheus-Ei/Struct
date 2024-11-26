// Libraries
import { ChangeEvent } from "react";

// Local
import { SetStateType } from "types/global";

interface OptionsProps {
    options: string[];
    selected: number;
    setSelected: SetStateType<number>;
    placeholder?: string;
    className?: string;
}

const defaultCss = "bg-base-300 px-2 py-1 rounded-btn";

const renderOptions = (option: string, index: number) => {
    return (
        <option value={option} key={index}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
    );
};

const Options = ({
    options,
    selected,
    setSelected,
    placeholder,
    className,
}: OptionsProps) => {
    const css = className ? className : defaultCss;

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const index = options.indexOf(event.target.value);
        setSelected(index);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <select
                id="options"
                value={options[selected] || ""}
                onChange={onChange}
                className={css}
            >
                <option value="">{placeholder || "Select"}</option>
                {options.map(renderOptions)}
            </select>
        </div>
    );
};

export default Options;
