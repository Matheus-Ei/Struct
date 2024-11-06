import PageTab from ".";
import NewPageTab from "../NewPageTab";

interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    children_pages: Array<PagesRequestType> | null;
    emoji: number | null;
    module: string;
}

interface ChildrensProps {
    items: Array<PagesRequestType> | null;
    parentPageId: number;
    show: boolean;
}

const Childrens = ({ show, items, parentPageId }: ChildrensProps) => {
    const renderChildrens = (item: PagesRequestType, index: number) => {
        return <PageTab item={item} index={index} key={index} />;
    };

    if (!show) {
        return null;
    }

    return (
        <div className="flex flex-col pl-4">
            {items?.map(renderChildrens)}
            <NewPageTab parentPageId={parentPageId} />
        </div>
    );
};

export default Childrens;
