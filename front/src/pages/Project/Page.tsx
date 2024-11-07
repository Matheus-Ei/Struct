import useRequest from "hooks/useRequest";
import Undefined from "pages/Modules/Undefined";
import React, { useContext } from "react";
import { PagesContext } from ".";
import router from "./util/router";
import { PagesRequestType } from "./util/types";

const getModule = (response: PagesRequestType, refetchPage: () => void) => {
    const element = router.filter((item) => {
        return response.module === item.name;
    });

    const undefinedFunction = () => {
        return <Undefined pageId={response.id} refetchPage={refetchPage} />;
    };

    if (!module || !element[0]) {
        return React.createElement(undefinedFunction);
    }

    return React.createElement(element[0].endpoint, { pageId: response.id });
};

const Page = () => {
    const context = useContext(PagesContext);

    const { response, refetch: refetchPage } = useRequest<PagesRequestType>(
        `page/geral/${context?.selectedPageId}`
    );

    const renderPages = () => {
        const page = response && getModule(response, refetchPage);

        return page;
    };

    return (
        <div className="w-full h-screen flex justify-center">
            <div className="w-11/12 h-screen flex justify-center">
                {renderPages()}
            </div>
        </div>
    );
};

export default Page;
