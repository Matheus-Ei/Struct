// Libraries
import clsx from "clsx";

// Local
import { TabProps } from "../../utils/types";
import AddPage from "./AddPage";
import Page from "./Page";
import Icons from "modules/Icons";
import { useAllPages } from "services/page/usePage";

interface PageRequestType {
    id: number;
    name: string;
    description: string;
    emoji: string;
    module: string;
}

const pagesDivCss = clsx(
    "grid items-start content-start",
    "overflow-y-scroll overflow-x-hidden",
    "w-[95%] h-4/5 mt-4",
    "gap-x-6 gap-y-4",
    "grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7"
);

const Pages = ({ projectId }: TabProps) => {
    const { data: pages, refetch } = useAllPages(projectId);

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

    const getAllPages = () => {
        if (pages?.length === 0) {
            return (
                <div className="flex items-center justify-start w-full h-fit gap-x-6 ml-10 mt-4">
                    <Icons
                        name="TbError404"
                        library="tb"
                        className="text-4xl w-fit"
                    />

                    <h1 className="text-xl w-fit">No pages found</h1>
                </div>
            );
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
