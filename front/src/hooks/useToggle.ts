import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(value?: boolean) {
        setValue((currentValue) =>
            typeof value === "boolean" ? value : !currentValue
        );
    }

    return [value, toggleValue];
};

export default useToggle;
