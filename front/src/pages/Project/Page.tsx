// Libraries
import { createElement, useContext } from "react";

// Libraries
import Undefined from "./modules/Undefined";
import router from "./util/router";
import { PagesContext } from ".";

interface RouterType {
    endpoint: () => JSX.Element;
    name: string;
}

const getModule = (element: RouterType) => {
    if (!module || !element) return <Undefined />;

    return createElement(element.endpoint, {});
};

const Page = () => {
    const context = useContext(PagesContext);
    if (!context) return null;

    const module: Array<RouterType> = router.filter((item) => {
        if (!context.page.data) return false;

        return context.page.data.module === item.name;
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
