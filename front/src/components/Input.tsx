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
            className="border rounded-lg h-12 w-[95%] pl-4 border-middle mb-3 bg-primary"
            placeholder={text}
            onChange={handleChange}
            type={!isPassword ? "text" : "password"}
        ></input>
    );
};

export default Input;
