import React from "react";
import router from "./router";

type PagesRequestType = Array<{
    id: number;
    name: string;
    description: string;
    emoji: string;
    parentPage: number | null;
    module: string;
}>;

interface PageProps {
    pages?: PagesRequestType | null;
    selectedPageId: number;
}

const getModule = (module: string, id: number, index: number) => {
    return router.map((item) => {
        const page =
            module == item.name
                ? React.createElement(item.endpoint, { pageId: id, key: index })
                : null;

        return page;
    });
};

const Page = ({ pages, selectedPageId }: PageProps) => {
    const renderPages = (item: any, index: number) => {
        const page =
            item.id == selectedPageId
                ? getModule(item.module, item.id, index)
                : null;

        return page;
    };

    return <div className="w-10/12 h-screen">{pages?.map(renderPages)}</div>;
};

export default Page;
