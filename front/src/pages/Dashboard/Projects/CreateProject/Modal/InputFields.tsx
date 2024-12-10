// Library
import clsx from "clsx";

// Local
import Input from "components/Input";
import useDefinedContext from "hooks/useDefinedContext";
import { CreateProjectContext } from "./context";

const InputFields = () => {
    const { title, description } = useDefinedContext(CreateProjectContext);

    const descriptionCss = clsx(
        "h-full w-[95%] pl-4 mb-3 pt-4",
        "border rounded-btn outline-none resize-none",
        "bg-base-100 text-base-content",
        {
            "border-error": description.error.isError,
            "border-neutral": !description.error.isError,
        }
    );

    return (
        <>
            <h1 className="absolute top-0 left-6 font-bold text-2xl text-center">
                New project
            </h1>

            <Input
                text="Title"
                type="textarea"
                setValue={title.set}
                error={title.error}
            />

            <Input
                text="Description"
                type="textarea"
                className={descriptionCss}
                setValue={description.set}
                error={description.error}
            />
        </>
    );
};

export default InputFields;
