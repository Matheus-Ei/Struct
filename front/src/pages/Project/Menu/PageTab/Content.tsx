// Libraries
import { MouseEvent, useContext } from "react";
import clsx from "clsx";

// Local
import { PageType } from "services/page/types";
import { ProjectContext } from "pages/Project";
import Emoji from "components/Emoji";
import Icon from "components/Icon";

interface ContentProps {
    item: PageType;
    onContextMenu: (event: MouseEvent<HTMLDivElement>) => void;
    isHover: boolean;
    childrens: Array<PageType> | null;
    toggleChildren: (value?: boolean) => void;
    showChildren: boolean;
}

const Content = ({
    item,
    onContextMenu,
    isHover,
    childrens,
    showChildren,
    toggleChildren,
}: ContentProps) => {
    const useProjectContext = useContext(ProjectContext);
    const isSelected = item.id === useProjectContext?.selectedPage.id;

    const css = clsx(
        "w-full h-10 gap-x-2 rounded-btn py-1 px-4",
        "flex flex-row justify-start items-center text-start",
        "cursor-default select-none",
        {
            "bg-primary text-primary-content": isSelected,
        }
    );

    const handleClick = () => useProjectContext?.selectedPage.set(item.id);

    const pageIcon = () => {
        if (isHover && childrens?.length != 0) {
            if (showChildren) {
                return (
                    <Icon
                        name="IoIosArrowDown"
                        library="io"
                        className="text-xl"
                        onClick={() => toggleChildren()}
                    />
                );
            }

            return (
                <Icon
                    name="IoIosArrowForward"
                    library="io"
                    className="text-xl"
                    onClick={() => toggleChildren()}
                />
            );
        } else {
            return <Emoji symbol={item.emoji} />;
        }
    };

    return (
        <div
            className={css}
            onContextMenu={onContextMenu}
            onClick={handleClick}
        >
            {pageIcon()}
            <h1 className="line-clamp-1 w-full text-sm">{item.name}</h1>
        </div>
    );
};

export default Content;
