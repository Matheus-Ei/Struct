import { Dispatch, SetStateAction } from "react";

type PagesRequestType = Array<{
    id: number;
    name: string;
    description: string;
    emoji: string;
    parentPage: number | null;
    module: string;
}>;

interface MenuProps {
    pages?: PagesRequestType | null;
    selectedPageId: number;
    setSelectedPageId: Dispatch<SetStateAction<number>>;
}

const Menu = ({ pages, selectedPageId, setSelectedPageId }: MenuProps) => {
    const commonStyle =
        "flex flex-row gap-4 rounded-btn py-2 items-center text-center justify-start cursor-default px-4 select-none";

    const renderPages = (item: any, index: number) => {
        return (
            <div
                key={index}
                className={
                    item.id === selectedPageId
                        ? `${commonStyle}  bg-primary text-primary-content`
                        : commonStyle
                }
                onClick={() => setSelectedPageId(item.id)}
            >
                <h1>{item.name}</h1>
            </div>
        );
    };

    return (
        <div className="flex flex-col w-[200px] h-[700px] justify-center items-center rounded-box gap-2 bg-base-300">
            {pages?.map(renderPages)}
        </div>
    );
};

export default Menu;
