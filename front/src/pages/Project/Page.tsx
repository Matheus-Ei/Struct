import useRequest from "hooks/useRequest";
import React, { useContext } from "react";
import { PagesContext } from ".";
import router from "./router";

interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    parentPages: Array<PagesRequestType> | null;
    emoji: number | null;
    module: string;
}

const getModule = (module: string, id: number) => {
    return router.map((item, index) => {
        const page =
            module === item.name
                ? React.createElement(item.endpoint, { pageId: id, key: index })
                : null;

        return page;
    });
};

const Page = () => {
    const context = useContext(PagesContext);

    const { response } = useRequest<PagesRequestType>(
        `page/geral/${context?.selectedPageId}`
    );

    const renderPages = () => {
        if (!response) {
            return;
        }

        const page = getModule(response.module, response?.id);

        return page;
    };

    return (
        <div className="w-full h-screen flex justify-center">
            <div className="w-6/12 h-screen">{renderPages()}</div>
        </div>
    );
};

export default Page;
