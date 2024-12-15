// Local
import Button from "components/Button";
import useSafeContext from "hooks/useSafeContext";
import Project from "services/project";
import { ProjectsContext } from "../../context";
import { CreateProjectContext } from "./context";

const CreateButton = () => {
    const { refetch } = useSafeContext(ProjectsContext);
    const { title, description, setModal } =
        useSafeContext(CreateProjectContext);

    const handleCreate = async () => {
        if (!title.value) {
            title.setError({ message: "The title is required", isError: true });
            return;
        }
        title.setError({ message: "", isError: false });

        if (!description.value) {
            description.setError({
                message: "The description is required",
                isError: true,
            });
            return;
        }
        description.setError({ message: "", isError: false });

        await Project.create(title.value, description.value);

        setModal(false);
        refetch();
    };

    return (
        <div className="absolute bottom-0">
            <Button text="Create" inverse={true} onClick={handleCreate} />
        </div>
    );
};

export default CreateButton;
