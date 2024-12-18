// Library
import { createElement } from "react";

// Local
import router, { RouterType } from "../router";

interface PageProps {
    tab: string;
}

const Page = ({ tab }: PageProps) => {
    const renderTab = (item: RouterType) => {
        if (tab !== item.label) return null;

        return createElement(item.element, { key: item.label });
    };

    return <>{router.map(renderTab)}</>;
};

export default Page;
