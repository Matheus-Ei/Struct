// Libraries
import clsx from "clsx";
import { useQuery } from "react-query";

// Local
import Request from "services/Request";
import { TabProps } from "../types";
import AddPage from "./AddPage";
import Page from "./Page";

interface PageRequestType {
    id: number;
    name: string;
    description: string;
    emoji: string;
    module: string;
}

const Pages = ({ projectId }: TabProps) => {
    const getPages = () => Request.get(`project/pages/${projectId}`);
    const { data: pages, refetch } = useQuery("project-pages-tab", getPages);

    const renderPages = (item: PageRequestType, index: number) => {
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

    const pagesDivCss = clsx(
        "grid items-start content-start",
        "overflow-y-scroll overflow-x-hidden",
        "w-[95%] h-4/5 mt-4",
        "gap-x-6 gap-y-4",
        "grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
    );

    return (
        <div className="w-full h-5/6 flex justify-center">
            <div className={pagesDivCss}>{pages?.map(renderPages)}</div>
            <AddPage projectId={projectId} refetch={refetch} />
        </div>
    );
};

export default Pages;
