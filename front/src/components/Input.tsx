interface InputProps {
    text?: string;
    setValue?: (arg0: any) => any;
    isPassword?: boolean;
    type?: "textarea" | "input";
    style?: string;
}

const Input = ({ text, setValue, isPassword, type, style }: InputProps) => {
    const handleChange = (event: any) => {
        setValue && setValue(event.target.value);
    };

    if (type === "textarea") {
        return (
            <textarea
                className={
                    style
                        ? style
                        : "border rounded-btn h-14 w-[95%] pl-4 border-base-content mb-3 bg-base-100 text-base-content pt-4 resize-none"
                }
                placeholder={text}
                onChange={handleChange}
            ></textarea>
        );
    }

    return (
        <input
            className={
                style
                    ? style
                    : "border rounded-btn h-14 w-[95%] pl-4 border-base-content mb-3 bg-base-100 text-base-content"
            }
            placeholder={text}
            onChange={handleChange}
            type={!isPassword ? "text" : "password"}
        ></input>
    );
};

export default Input;
