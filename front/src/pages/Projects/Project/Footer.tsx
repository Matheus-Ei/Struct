import { useNavigate } from "react-router-dom";
import Icons from "services/Icons";

const Footer = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };

    return (
        <div
            onClick={handleClick}
            className="flex cursor-pointer select-none flex-row gap-4 items-center justify-center absolute bottom-3 right-5 bg-base-100 border border-primary rounded-btn p-4"
        >
            <Icons name="FaCode" library="fa" />

            <h1 className="font-bold text-base-content">Go to the project</h1>
        </div>
    );
};

export default Footer;
