// Local
import useDefinedContext from "hooks/useDefinedContext";
import { PageType } from "services/page/types";
import PageTab from ".";
import { PageTabContext } from "./context";

const renderChildrens = (item: PageType, index: number) => (
    <PageTab item={item} key={index} />
);

const Childrens = () => {
    const { page, children } = useDefinedContext(PageTabContext);

    if (!children.show) return null;

    return (
        <div className="flex flex-col relative w-full justify-start">
            <div className="flex flex-col pl-4">
                {page.children_pages?.map(renderChildrens)}
            </div>
        </div>
    );
};

export default Childrens;
