// Local
import Icon from "components/Icon";
import { NotesContext } from "../../context";
import useSafeContext from "hooks/useSafeContext";
import Operations from "../utils/Operations";

interface RemoveButtonProps {
    order: number;
}

const RemoveButton = ({ order }: RemoveButtonProps) => {
    const { nodes } = useSafeContext(NotesContext);
    const operations = new Operations(nodes);

    const removeNode = () => {
        operations.remove(order);
    };

    return (
        <Icon
            value={{ name: "IoRemove", library: "io5" }}
            className="text-2xl"
            onClick={removeNode}
        />
    );
};

export default RemoveButton;
