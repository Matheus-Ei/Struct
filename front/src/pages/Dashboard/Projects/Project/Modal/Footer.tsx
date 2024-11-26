// Libraries
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

// Local
import Icon from "components/Icon";

interface FooterProps {
    id: number;
}

const bodyCss = clsx(
    "flex items-center justify-center gap-4",
    "absolute bottom-3 right-5 z-0",
    "bg-base-100 border border-primary rounded-btn p-4",
    "cursor-pointer select-none"
);

const Footer = ({ id }: FooterProps) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/projects/${id}`);

    return (
        <div onClick={handleClick} className={bodyCss}>
            <Icon name="FaRegFolderOpen" library="fa6" />

            <h1 className="font-bold text-base-content">Open project</h1>
        </div>
    );
};

export default Footer;
