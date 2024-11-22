// Local
import { PagesRequestType } from "pages/Project/util/types";
import PageTab from ".";

interface ChildrensProps {
    items: Array<PagesRequestType> | null;
    parentPageId: number;
    show: boolean;
}

const Childrens = ({ show, items }: ChildrensProps) => {
    const renderChildrens = (item: PagesRequestType, index: number) => {
        return <PageTab item={item} index={index} key={index} />;
    };

    if (!show) return null;

    return (
        <div className="flex flex-col pl-4">{items?.map(renderChildrens)}</div>
    );
};

export default Childrens;
