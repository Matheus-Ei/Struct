// Components
import Selector from "../../components/common/Selector";
import LineSeparator from "../../components/common/LineSeparator";

const createProject = (type: string) => {};

interface ActionsProps {}

const Actions = ({}: ActionsProps) => {
    return (
        <div>
            <LineSeparator text="New Project" style="dual" />
            <div>
                <Selector
                    name="Singular"
                    icon="GoSingleSelect"
                    repository="go"
                    onClick={() => createProject("Singular")}
                    isSelected={false}
                />

                <Selector
                    name="Compost"
                    icon="RiCheckboxMultipleBlankFill"
                    repository="ri"
                    onClick={() => createProject("Compost")}
                    isSelected={false}
                />

                <Selector
                    name="Monopage"
                    icon="SiPronounsdotpage"
                    repository="si"
                    onClick={() => createProject("Monopage")}
                    isSelected={false}
                />
            </div>
        </div>
    );
};

export default Actions;
