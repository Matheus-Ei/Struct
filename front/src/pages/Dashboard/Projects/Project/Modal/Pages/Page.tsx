import Request from "services/Request";

interface PageProps {
    id: number;
    name: string;
    emoji: string;
    refetch: () => void;
}

const Page = ({ id, name, emoji, refetch }: PageProps) => {
    const deletePage = () => {
        Request.delete(`page/geral/${id}`);
        refetch();
    };

    return (
        <div className="flex gap-2 text-lg w-full">
            {emoji ? <p>{emoji}</p> : <p>&#x2753;</p>}
            <h1>{name}</h1>
        </div>
    );
};

export default Page;
