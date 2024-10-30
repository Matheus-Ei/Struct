import { useNavigate } from "react-router-dom";
import Icons from "services/Icons";

interface FooterProps {
    id: number;
}

const Footer = ({ id }: FooterProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${id}`);
    };

    return (
        <div
            onClick={handleClick}
            className="flex cursor-pointer select-none flex-row gap-4 items-center justify-center absolute bottom-3 right-5 bg-base-100 border border-primary rounded-btn p-4"
        >
            <Icons name="FaRegFolderOpen" library="fa6" />

            <h1 className="font-bold text-base-content">Go to the project</h1>
        </div>
    );
};

export default Footer;
