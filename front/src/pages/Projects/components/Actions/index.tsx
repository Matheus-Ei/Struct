// Modules
import * as S from "./styles";
import * as T from "./types";
import * as F from "./functions";

// Components
import Selector from "../../../../components/common/Selector";
import LineSeparator from "../../../../components/common/LineSeparator";

const Actions = ({}: T.ActionsProps) => {
    return (
        <S.Body>
            <LineSeparator text="New Project" width={50} style="dual" />
            <S.Content>
                <Selector
                    name="Singular"
                    icon="GoSingleSelect"
                    repository="go"
                    onClick={() => F.createProject("Singular")}
                    isSelected={false}
                />

                <Selector
                    name="Compost"
                    icon="RiCheckboxMultipleBlankFill"
                    repository="ri"
                    onClick={() => F.createProject("Compost")}
                    isSelected={false}
                />

                <Selector
                    name="Monopage"
                    icon="SiPronounsdotpage"
                    repository="si"
                    onClick={() => F.createProject("Monopage")}
                    isSelected={false}
                />
            </S.Content>
        </S.Body>
    );
};

export default Actions;
