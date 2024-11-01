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
    pages: PagesRequestType;
    selectedPageId: number;
}

const getModule = (module: string, id: number) => {
    return router.map((item) => {
        const page =
            module == item.name
                ? React.createElement(item.endpoint, { pageId: id })
                : null;

        return page;
    });
};

const Page = ({ pages, selectedPageId }: PageProps) => {
    return (
        <div className="w-10/12 h-screen">
            {pages.map((item, index) => {
                const page =
                    item.id == selectedPageId
                        ? getModule(item.module, item.id)
                        : null;

                return page;
            })}
        </div>
    );
};

export default Page;
