// Local
import Icon from "components/Icon";
import useDefinedContext from "hooks/useDefinedContext";
import { ProjectContext } from "pages/Project/context";
import Page from "services/page";

interface ModuleProps {
    name: string;
    description: string;
    icon: string;
    library: string;
}

const Module = ({ name, description, icon, library }: ModuleProps) => {
    const { selectedPage, page } = useDefinedContext(ProjectContext);

    const handleClick = () => {
        if (!selectedPage.id) return;

        Page.setModule(selectedPage.id, name).then(() => {
            setTimeout(() => {
                page.refetch();
            }, 10);
        });
    };

    return (
        <div
            className="w-64 h-28 gap-y-1 border border-base-300 rounded-btn p-2 flex flex-col hover:italic cursor-pointer select-none"
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
