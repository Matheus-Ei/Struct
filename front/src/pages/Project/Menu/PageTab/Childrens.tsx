// Local
import { PageType } from "services/page/types";
import PageTab from ".";

interface ChildrensProps {
    items: Array<PageType> | null;
    parentPageId: number;
    show: boolean;
}

const renderChildrens = (item: PageType, index: number) => (
    <PageTab item={item} key={index} />
);

const Childrens = ({ show, items }: ChildrensProps) => {
    if (!show) return null;

    return (
        <div className="flex flex-col pl-4">{items?.map(renderChildrens)}</div>
    );
};

export default Childrens;
