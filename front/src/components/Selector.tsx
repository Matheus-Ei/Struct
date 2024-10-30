import { Dispatch, SetStateAction } from "react";

interface SelectorProps {
    options: Array<string>;
    setCurrent: Dispatch<SetStateAction<string>>;
}

const Selector = ({ options, setCurrent }: SelectorProps) => {
    const handleChange = (event: any) => {
        setCurrent(event.target.value);
    };

    return (
        <select
            onChange={handleChange}
            className="select select-primary w-full max-w-xs"
        >
            {options.map((item, index) => {
                return <option key={index}>{item}</option>;
            })}
        </select>
    );
};

export default Selector;
