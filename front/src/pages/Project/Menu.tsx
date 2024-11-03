import Emoji from "components/Emoji";
import { Dispatch, SetStateAction } from "react";

interface PagesRequestType {
    id: number;
    name: string;
    description: string;
    emoji: number;
    parentPage: number | null;
    module: string;
}

interface MenuProps {
    pages: Array<PagesRequestType> | null;
    selectedPageId: number;
    setSelectedPageId: Dispatch<SetStateAction<number>>;
}

const Menu = ({ pages, selectedPageId, setSelectedPageId }: MenuProps) => {
    const commonStyle =
        "flex flex-row gap-x-2 rounded-btn py-1 items-center text-start justify-start cursor-default px-4 select-none w-full";

    const renderPages = (item: PagesRequestType, index: number) => {
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
                {item.emoji ? <Emoji symbol={item.emoji} /> : <p>&#x2753;</p>}
                <h1 className="line-clamp-1 w-full text-sm">{item.name}</h1>
            </div>
        );
    };

    return (
        <div className="flex flex-col w-[300px] items-center h-screen border-r border-neutral gap-4 px-1">
            <div className="flex flex-col items-center justify-center w-full h-32">
                <h1>Header</h1>
            </div>

            <div className="flex flex-col justify-start items-start w-full h-full overflow-y-scroll">
                {pages?.map(renderPages)}
            </div>

            <div className="flex flex-col w-full items-center justify-center h-32">
                <h1>Bottom</h1>
            </div>
        </div>
    );
};

export default Menu;
