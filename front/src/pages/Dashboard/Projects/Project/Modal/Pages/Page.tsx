// Local
import Emoji from "components/Emoji";

interface PageProps {
    id: number;
    name: string;
    emoji: string;
    refetch: () => void;
}

const Page = ({ id, name, emoji, refetch }: PageProps) => {
    return (
        <div className="flex text-lg w-full h-12 items-center justify-between">
            <div className="flex gap-4 items-center">
                <Emoji symbol={emoji} />
                <h1 className="line-clamp-1 cursor-default select-none">
                    {name}
                </h1>
            </div>
        </div>
    );
};

export default Page;
