// Components
import ProjectsTab from "./Page/ProjectsTab";

export interface RouterType {
    label: string;
    element: () => JSX.Element;
}

const router: Array<RouterType> = [{ label: "Projects", element: ProjectsTab }];

export default router;
