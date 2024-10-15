// Modules
import * as F from "./functions";
import * as T from "./types";

// Components
import ButtonIcon from "../../../../components/common/ButtonIcon";
import Point from "../../../../components/common/Point";
import IconPoint from "../../../../components/common/IconPoint";

const Footer = ({ type, modules, projectId, setProjects }: T.FooterProps) => {
    const typeIcon = F.getTypeIcon(type);

    const allModulesIcon = modules.map((item) => {
        return F.getModuleIcon(item);
    });

    return (
        <div>
            <div>
                <Point icon={typeIcon[0]} library={typeIcon[1]} text={type} />
                {type !== "Compost" ? (
                    <Point
                        icon={allModulesIcon[0].name}
                        library={allModulesIcon[0].library}
                        text={modules[0]}
                    />
                ) : (
                    <IconPoint icons={allModulesIcon} />
                )}
            </div>

            <div>
                <ButtonIcon
                    icon="MdOpenInNew"
                    library="md"
                    onClick={() => F.handleOpen(projectId)}
                />

                <ButtonIcon
                    icon="FaRegEdit"
                    library="fa"
                    onClick={() => F.handleEdit(projectId)}
                />

                <ButtonIcon
                    icon="FaTrash"
                    library="fa"
                    onClick={() => F.handleDelete(projectId, setProjects)}
                />
            </div>
        </div>
    );
};

export default Footer;
