// Modules
import * as T from "./types";
import * as F from "./functions";

// Components
import Selector from "../../../components/common/Selector";
import LineSeparator from "../../../components/common/LineSeparator";

const Actions = ({}: T.ActionsProps) => {
    return (
        <div className="projects-actions-body">
            <LineSeparator text="New Project" width={50} style="dual" />
            <div className="projects-actions-content">
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
            </div>
        </div>
    );
};

export default Actions;
