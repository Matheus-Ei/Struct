// Library
import clsx from "clsx";

// Local
import Point from "components/Point";
import { ProjectContext } from "pages/Project/context";
import useSafeContext from "hooks/useSafeContext";

const DashProject = () => {
    const { selectedPage } = useSafeContext(ProjectContext);

    const css = clsx("w-full h-9 gap-x-2", "justify-start", {
        "bg-primary text-primary-content": selectedPage.id === null,
    });

    return (
        <Point
            text="Project"
            icon={{ name: "PiProjectorScreen", library: "pi" }}
            className={css}
            onClick={() => selectedPage.set(null)}
        />
    );
};

export default DashProject;
