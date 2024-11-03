import useRequest from "hooks/useRequest";
import Body from "./Body";
import Header from "./Header";

interface NotesProps {
    pageId: number;
}

interface PageResponseType {
    id: number;
    name: string;
    description: string;
    emoji: number | null;
    parent: number | null;
    content: string;
}

const Notes = ({ pageId }: NotesProps) => {
    const { response: page } = useRequest<PageResponseType>(
        `page/notes/get/${pageId}`,
        pageId
    );

    return (
        <div className="w-full h-full py-16">
            <Header
                name={page?.name}
                emoji={page?.emoji}
                description={page?.description}
            />
            <Body />
        </div>
    );
};

export default Notes;
