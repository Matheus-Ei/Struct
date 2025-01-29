// Libraries
import clsx from "clsx";

// Local
import { useAllPages } from "services/page/usePage";
import { PageType } from "services/page/types";
import { TabProps } from "../../utils/types";

// Components
import AddPage from "./AddPage";
import Page from "./Page";
import Message404 from "components/Message404";

const pagesDivCss = clsx(
    "grid items-start content-start",
    "overflow-y-scroll overflow-x-hidden",
    "w-[95%] h-4/5 mt-4",
    "gap-x-6 gap-y-4",
    "grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
);

const Pages = ({ projectId }: TabProps) => {
    const { data: pages, refetch } = useAllPages(projectId);

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

    const getAllPages = () => {
        if (pages?.length === 0) {
            return <Message404 text="No pages found" />;
        } else {
            return <div className={pagesDivCss}>{pages?.map(renderPages)}</div>;
        }
    };

    return (
        <div className="w-full h-5/6 flex justify-center">
            {getAllPages()}
            <AddPage projectId={projectId} refetch={refetch} />
        </div>
    );
};

export default Pages;
