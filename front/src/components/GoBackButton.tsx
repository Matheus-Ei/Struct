// Library
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

// Local
import Icon from "./Icon";

interface GoBackButtonProps {
    location?: string;
    className?: string;
}

const GoBackButton = ({
    location = "/dashboard",
    className,
}: GoBackButtonProps) => {
    const navigator = useNavigate();

    const css = twMerge(
        "flex flex-row items-center justify-center gap-x-4 absolute left-20 top-20",
        className
    );

    return (
        <button className={css} onClick={() => navigator(location)}>
            <Icon name="IoIosArrowBack" library="io" />
            <p>Go back</p>
        </button>
    );
};

export default GoBackButton;
