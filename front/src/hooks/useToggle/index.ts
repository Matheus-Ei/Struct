// Modules
import * as T from "./types";

// Hooks
import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = (value?: boolean) => {
        setValue((currentValue) =>
            typeof value === "boolean" ? value : !currentValue
        );
    };

    const returnValues: T.ToggleType = [value, toggleValue];
    return returnValues;
};

export default useToggle;
