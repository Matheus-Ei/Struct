// Services
import Icons from "services/Icons";

interface ProjectProps {
    title: string;
    description: string;
    id: number;
}

const handleModal = (id: number) => {
    return null;
};

const Project = ({ title, description, id }: ProjectProps) => {
    return (
        <div className="flex flex-col w-96 h-32 border border-primary rounded-btn p-3 justify-between">
            <div>
                <h1 className="text-lg font-bold">{title}</h1>
                <p>{description}</p>
            </div>

            <button onClick={() => handleModal(id)}>
                <Icons name="MdOpenInNew" library="md" size={20} />
            </button>
        </div>
    );
};

export default Project;
