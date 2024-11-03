import React from "react";
import router from "./router";

interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    emoji: number;
    parentPage: number | null;
    module: string;
}

interface PageProps {
    pages: Array<PagesRequestType> | null;
    selectedPageId: number;
}

const getModule = (module: string, id: number, index: number) => {
    return router.map((item) => {
        const page =
            module === item.name
                ? React.createElement(item.endpoint, { pageId: id, key: index })
                : null;

        return page;
    });
};

const Page = ({ pages, selectedPageId }: PageProps) => {
    const renderPages = (item: any, index: number) => {
        const page =
            item.id === selectedPageId
                ? getModule(item.module, item.id, index)
                : null;

        return page;
    };

    return (
        <div className="w-full h-screen flex justify-center">
            <div className="w-6/12 h-screen">{pages?.map(renderPages)}</div>
        </div>
    );
};

export default Page;
