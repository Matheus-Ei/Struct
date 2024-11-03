import Emoji from "components/Emoji";
import useToggle from "hooks/useToggle";
import Icons from "services/Icons";
// import Request from "services/Request";

interface PageProps {
    id: number;
    name: string;
    emoji: number;
    refetch: () => void;
}

const Page = ({ id, name, emoji, refetch }: PageProps) => {
    const [showMore, toggleShowMore] = useToggle(false);
/* 
    const deletePage = () => {
        Request.delete(`page/geral/${id}`);
        refetch();
    };
 */
    return (
        <div
            className="flex text-lg w-full h-12 items-center justify-between"
            onMouseOver={() => toggleShowMore(true)}
            onMouseLeave={() => toggleShowMore(false)}
        >
            <div className="flex gap-4 items-center">
                {emoji ? <Emoji symbol={emoji} /> : <p>&#x2753;</p>}
                <h1 className="line-clamp-1 cursor-default select-none">
                    {name}
                </h1>
            </div>

            {showMore && <Icons name="IoIosMore" library="io" />}
        </div>
    );
};

export default Page;
