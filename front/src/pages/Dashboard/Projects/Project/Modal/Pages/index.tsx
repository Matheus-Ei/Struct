import useRequest from "hooks/useRequest";
import Page from "./Page";

interface PagesProps {
    projectId: number;
}

interface PageRequestType {
    id: number;
    name: string;
    description: string;
    emoji: string;
    module: string;
}

const Pages = ({ projectId }: PagesProps) => {
    const { response: pages, refetch } = useRequest<Array<PageRequestType>>(
        `project/pages/${projectId}`
    );

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

    return (
        <div className="w-full h-full flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 content-start items-start mt-6 overflow-y-scroll gap-y-4 h-4/5 w-[95%] overflow-x-hidden">
                {pages?.map(renderPages)}
            </div>
        </div>
    );
};

export default Pages;
