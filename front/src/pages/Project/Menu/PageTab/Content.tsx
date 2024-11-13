// Libraries
import { useContext } from "react";

// Local
import { PagesRequestType } from "pages/Project/util/types";
import { PagesContext } from "pages/Project";
import Emoji from "components/Emoji";

interface ContentProps {
    item: PagesRequestType;
    onContextMenu: (event: any) => void;
}

const Content = ({ item, onContextMenu }: ContentProps) => {
    const context = useContext(PagesContext);
    if (!context) {
        return null;
    }

    const isSelected = item.id === context.selectedPageId;

    // Style
    const commonStyle = `flex flex-row gap-x-2 rounded-btn py-1 items-center text-start 
                         justify-start cursor-default px-4 select-none w-full`;
    const className = isSelected
        ? `${commonStyle}  bg-primary text-primary-content`
        : commonStyle;

    const onClick = () => {
        context.setSelectedPageId(item.id);
    };

    return (
        <div
            className={className}
            onContextMenu={onContextMenu}
            onClick={onClick}
        >
            <Emoji symbol={item.emoji} />
            <h1 className="line-clamp-1 w-full text-sm">{item.name}</h1>
        </div>
    );
};

export default Content;
