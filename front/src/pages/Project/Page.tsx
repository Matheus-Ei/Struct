// Libraries
import { createElement, useContext } from "react";

// Libraries
import Undefined from "./modules/Undefined";
import router from "./util/router";
import { ProjectContext } from ".";

interface RouterType {
    endpoint: () => JSX.Element;
    name: string;
}

const getModule = (element: RouterType) => {
    if (!module || !element) return <Undefined />;

    return createElement(element.endpoint, {});
};

const Page = () => {
    const useProjectContext = useContext(ProjectContext);

    const module: Array<RouterType> = router.filter((item) => {
        if (!useProjectContext?.page.data) return false;

        return useProjectContext.page.data.module === item.name;
    });

    const renderPages = () => getModule(module[0]);
    return (
        <div className="w-full h-screen flex justify-center">
            <div className="w-11/12 h-screen flex justify-center">
                {renderPages()}
            </div>
        </div>
    );
};

export default Page;
