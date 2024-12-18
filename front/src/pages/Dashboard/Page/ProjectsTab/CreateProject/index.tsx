// Libraries
import { useState } from "react";
import clsx from "clsx";

// Local
import CreateProjectModal from "./Modal";
import Icon from "components/Icon";

const buttonCss = clsx(
    "w-56 h-16",
    "flex items-center justify-center",
    "gap-6",
    "rounded-btn border-2 border-dashed border-primary"
);

const CreateProject = () => {
    const [showModal, setModal] = useState(false);

    const openModal = () => setModal(true);

    return (
        <div className="flex w-96 h-32 p-3 justify-start items-center">
            <button onClick={openModal} className={buttonCss}>
                <Icon
                    value={{ name: "IoAdd", library: "io5" }}
                    className="text-2xl"
                />

                <h1>New project</h1>
            </button>

            <CreateProjectModal showModal={showModal} setModal={setModal} />
        </div>
    );
};

export default CreateProject;
