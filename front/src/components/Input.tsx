interface InputProps {
    text?: string;
    setValue?: (arg0: any) => any;
    isPassword?: boolean;
}

const Input = ({ text, setValue, isPassword }: InputProps) => {
    const handleChange = (event: any) => {
        setValue && setValue(event.target.value);
    };

    return (
        <input
            className="border rounded-btn h-14 w-[95%] pl-4 border-base-content mb-3 bg-base-100 text-base-content"
            placeholder={text}
            onChange={handleChange}
            type={!isPassword ? "text" : "password"}
        ></input>
    );
};

export default Input;
