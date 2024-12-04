import Icon from "components/Icon";

interface ModuleProps {
    name: string;
    description: string;
    url: string;
    icon: string;
    library: string;
}

const Module = ({ name, description, url, icon, library }: ModuleProps) => {
    const handleClick = () => {};

    return (
        <div
            className="w-64 h-28 gap-y-1 border rounded-btn p-2 flex flex-col cursor-pointer select-none"
            onClick={handleClick}
        >
            <div className="flex items-center gap-x-2">
                <Icon name={icon} library={library} className="text-2xl" />
                <h1 className="text-lg font-bold">{name.toUpperCase()}</h1>
            </div>

            <p className="line-clamp-2">{description}</p>
        </div>
    );
};

export default Module;
