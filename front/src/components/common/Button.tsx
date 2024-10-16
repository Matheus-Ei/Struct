// Components
import Text from "./Text";

interface ButtonProps {
    text: string;
    onClick: () => any;
    inverse?: boolean;
}

const Button = ({ text, onClick, inverse }: ButtonProps) => {
    const defaultStyle =
        "mt-2 py-3 px-12 border-solid bg-neutral-0 dark:bg-neutral-900 border-neutral-900 dark:border-neutral-50 border rounded-lg w-fit h-fit";
    const inverseStyle =
        "mt-2 py-3 px-12 border-solid bg-neutral-900 dark:bg-neutral-50 border-neutral-50 dark:border-neutral-900 border rounded-lg w-fit h-fit";

    return (
        <div
            onClick={onClick}
            className={!inverse ? defaultStyle : inverseStyle}
        >
            <p
                className={
                    !inverse
                        ? "text-neutral-900 dark:text-neutral-50"
                        : "text-neutral-50 dark:text-neutral-900"
                }
            >
                {text}
            </p>
        </div>
    );
};

export default Button;
