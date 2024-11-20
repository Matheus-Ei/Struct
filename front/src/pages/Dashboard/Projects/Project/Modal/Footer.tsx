// Libraries
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

// Local
import Icons from "services/Icons";

interface FooterProps {
    id: number;
}

const Footer = ({ id }: FooterProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/projects/${id}`);
    };

    const bodyCss = clsx(
        "flex items-center justify-center gap-4",
        "absolute bottom-3 right-5 z-0",
        "bg-base-100 border border-primary rounded-btn p-4",
        "cursor-pointer select-none"
    );

    return (
        <div onClick={handleClick} className={bodyCss}>
            <Icons name="FaRegFolderOpen" library="fa6" />

            <h1 className="font-bold text-base-content">Go to the project</h1>
        </div>
    );
};

export default Footer;
