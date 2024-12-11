// Libraries
import { MouseEvent } from "react";
import clsx from "clsx";

// Local
import { PageType } from "services/page/types";
import { ProjectContext } from "pages/Project/context";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import useDefinedContext from "hooks/useDefinedContext";
import { PageTabContext } from "./context";

interface ContentProps {
    childrens: Array<PageType> | null;
    onContextMenu: (event: MouseEvent) => void;
}

const Content = ({ childrens, onContextMenu }: ContentProps) => {
    const { selectedPage } = useDefinedContext(ProjectContext);
    const { children, isHover, page } = useDefinedContext(PageTabContext);

    const isSelected = page.id === selectedPage.id;

    const css = clsx(
        "w-full h-full gap-x-2 rounded-btn py-1 px-4",
        "flex flex-row justify-start items-center text-start",
        "cursor-pointer select-none",
        {
            "bg-primary text-primary-content": isSelected,
        }
    );

    const pageIcon = () => {
        if (isHover && childrens?.length !== 0) {
            if (children.show) {
                return (
                    <Icon
                        value={{ name: "IoIosArrowDown", library: "io" }}
                        className="text-xl"
                        onClick={() => children.toggle()}
                    />
                );
            }

            return (
                <Icon
                    value={{ name: "IoIosArrowForward", library: "io" }}
                    className="text-xl"
                    onClick={() => children.toggle()}
                />
            );
        } else {
            return <Emoji symbol={page.emoji} />;
        }
    };

    return (
        <div
            className={css}
            onContextMenu={onContextMenu}
            onClick={() => selectedPage.set(page.id)}
        >
            {pageIcon()}
            <h1 className="line-clamp-1 w-full text-sm">{page.name}</h1>
        </div>
    );
};

export default Content;
