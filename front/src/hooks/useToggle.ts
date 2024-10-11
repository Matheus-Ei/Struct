import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
    type ToggleType = [value: boolean, toggleValue: () => void];

    const [value, setValue] = useState(defaultValue);

    const toggleValue = (value?: boolean) => {
        setValue((currentValue) =>
            typeof value === "boolean" ? value : !currentValue
        );
    };

    const returnValues: ToggleType = [value, toggleValue];
    return returnValues;
};

export default useToggle;
