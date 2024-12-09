// Library
import clsx from "clsx";

// Local
import Point from "components/Point";
import { ProjectContext } from "pages/Project";
import useDefinedContext from "hooks/useDefinedContext";

const DashProject = () => {
    const { selectedPage } = useDefinedContext(ProjectContext);

    const projectPointCss = clsx("w-full h-9 gap-x-2", "justify-start", {
        "bg-primary text-primary-content": selectedPage.id === null,
    });

    return (
        <Point
            text="Project"
            icon="PiProjectorScreen"
            library="pi"
            className={projectPointCss}
            onClick={() => selectedPage.set(null)}
        />
    );
};

export default DashProject;
