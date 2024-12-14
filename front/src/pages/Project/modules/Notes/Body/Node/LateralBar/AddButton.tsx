// Local
import Icon from "components/Icon";
import useSafeContext from "hooks/useSafeContext";
import { NotesContext } from "../../context";
import Operations from "../utils/Operations";

interface AddButtonProps {
    order: number;
}

const AddButton = ({ order }: AddButtonProps) => {
    const { nodes } = useSafeContext(NotesContext);
    const operations = new Operations(nodes);

    const addNode = () => {
        operations.add(order);
    };

    return (
        <Icon
            value={{ name: "IoAdd", library: "io5" }}
            className="text-2xl"
            onClick={addNode}
        />
    );
};

export default AddButton;
