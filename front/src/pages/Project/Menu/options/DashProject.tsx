// Library
import clsx from "clsx";
import { useContext } from "react";

// Local
import Point from "components/Point";
import { ProjectContext } from "pages/Project";

const DashProject = () => {
    const useProjectContext = useContext(ProjectContext);

    const projectPointCss = clsx(
        "w-full h-9 gap-x-2 rounded-btn py-1 px-4 mb-2",
        "flex flex-row justify-start items-center text-start",
        "cursor-default select-none",
        {
            "bg-primary text-primary-content":
                useProjectContext?.selectedPage.id === null,
        }
    );

    return (
        <Point
            text="Project"
            icon="PiProjectorScreen"
            library="pi"
            className={projectPointCss}
            onClick={() => useProjectContext?.selectedPage.set(null)}
        />
    );
};

export default DashProject;
