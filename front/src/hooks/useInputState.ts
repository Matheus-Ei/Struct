// Library
import { useState } from "react";

// Local
import { ErrorType } from "types/global";

const useInputState = () => {
    const [value, set] = useState<string>("");
    const [error, setError] = useState<ErrorType>({
        message: "",
        isError: false,
    });

    const reset = () => {
        set("");
        setError({ message: "", isError: false });
    };

    const validate = () => {
        if (!value) {
            setError({
                message: `This field is required.`,
                isError: true,
            });
            return false;
        }

        setError({ message: "", isError: false });
        return true;
    };

    return { value, set, error, setError, reset, validate };
};

export default useInputState;
