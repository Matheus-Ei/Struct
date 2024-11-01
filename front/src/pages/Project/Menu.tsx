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
    pages: PagesRequestType;
    selectedPageId: number;
    setSelectedPageId: Dispatch<SetStateAction<number>>;
}

const Menu = ({ pages, selectedPageId, setSelectedPageId }: MenuProps) => {
    const selectedStyle =
        "flex flex-row gap-4 rounded-btn py-2 items-center justify-start text-center cursor-default select-none bg-primary rounded-btn px-4 text-primary-content";
    const noSelectedStyle =
        "flex flex-row gap-4 rounded-btn py-2 items-center justify-start cursor-default  px-4 select-none";

    return (
        <div className="flex flex-col w-[200px] h-[700px] justify-center items-center rounded-box gap-2 bg-base-300">
            {pages.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={
                            item.id === selectedPageId
                                ? selectedStyle
                                : noSelectedStyle
                        }
                        onClick={() => setSelectedPageId(item.id)}
                    >
                        <h1>{item.name}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu;
