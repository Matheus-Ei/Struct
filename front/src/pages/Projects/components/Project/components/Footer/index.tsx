// Modules
import * as S from "./styles";
import * as F from "./functions";
import * as T from "./types";

// Components
import ButtonIcon from "../../../../../../components/common/ButtonIcon";
import Point from "../../../../../../components/common/Point";
import IconPoint from "../../../../../../components/common/IconPoint";

const Footer = ({ type, modules, projectId, setProjects }: T.FooterProps) => {
    const typeIcon = F.getTypeIcon(type);

    const allModulesIcon = modules.map((item) => {
        return F.getModuleIcon(item);
    });

    return (
        <S.Footer>
            <S.Informations>
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
            </S.Informations>

            <S.Actions>
                <ButtonIcon
                    name="MdOpenInNew"
                    library="md"
                    size={20}
                    onClick={() => F.handleOpen(projectId)}
                />

                <ButtonIcon
                    name="FaRegEdit"
                    library="fa"
                    size={20}
                    onClick={() => F.handleEdit(projectId)}
                />

                <ButtonIcon
                    name="FaTrash"
                    library="fa"
                    size={20}
                    onClick={() => F.handleDelete(projectId, setProjects)}
                />
            </S.Actions>
        </S.Footer>
    );
};

export default Footer;
