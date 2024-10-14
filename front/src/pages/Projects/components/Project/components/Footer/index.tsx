// Modules
import * as S from "./styles";
import * as F from "./functions";
import * as T from "./types";

// Components
import ButtonIcon from "../../../../../../components/common/ButtonIcon";
import Point from "../../../../../../components/common/Point";
import IconPoint from "../../../../../../components/common/IconPoint";

const getTypeIcon = (type: "Singular" | "Compost" | "Monopage") => {
    let icon: string = "FaQuestion";
    let library: string = "fa";

    switch (type) {
        case "Singular":
            icon = "GoSingleSelect";
            library = "go";
            break;

        case "Compost":
            icon = "RiCheckboxMultipleBlankFill";
            library = "ri";
            break;

        case "Monopage":
            icon = "SiPronounsdotpage";
            library = "si";
            break;
    }

    return [icon, library];
};

const getModuleIcon = (moduleName: string) => {
    let icon: string = "FaQuestion";
    let library: string = "fa";

    switch (moduleName) {
        case "Notes":
            icon = "FaNoteSticky";
            library = "fa6";
            break;

        case "List":
            icon = "FaListAlt";
            library = "fa";
            break;
    }

    return [icon, library];
};

const Footer = ({ type, modules, projectId }: T.FooterProps) => {
    const typeIcon = getTypeIcon(type);

    const allModulesIcon = modules.map((item) => {
        return getModuleIcon(item);
    });

    return (
        <S.Footer>
            <S.Informations>
                <Point icon={typeIcon[0]} library={typeIcon[1]} text={type} />
                {type !== "Compost" ? (
                    <Point
                        icon={allModulesIcon[0][0]}
                        library={allModulesIcon[0][1]}
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
                    onClick={() => F.handleDelete(projectId)}
                />
            </S.Actions>
        </S.Footer>
    );
};

export default Footer;
