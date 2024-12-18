// Library
import clsx from "clsx";

// Local
import Message404 from "components/Message404";
import { PageType } from "services/page/types";
import Page from "./Page";

interface PagesGridProps {
    pages: PageType[] | null | undefined;
    refetch: () => void;
}

const css = clsx(
    "grid items-start content-start",
    "overflow-y-scroll overflow-x-hidden",
    "w-[95%] h-4/5 mt-4",
    "gap-x-6 gap-y-4",
    "grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
);

const PagesGrid = ({ pages, refetch }: PagesGridProps) => {
    const renderPages = (item: PageType, index: number) => {
        return (
            <Page
                key={index}
                id={item.id}
                name={item.name}
                emoji={item.emoji}
                refetch={refetch}
            />
        );
    };

    if (pages?.length === 0) return <Message404 text="No pages found" />;

    return <div className={css}>{pages?.map(renderPages)}</div>;
};

export default PagesGrid;
