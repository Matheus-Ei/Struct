import { PagesContext } from "pages/Project";
import { useContext } from "react";
import { useQuery } from "react-query";
import Request from "services/Request";
import Body from "./Body";
import Header from "./Header";

const Notes = () => {
    const context = useContext(PagesContext);

    const getPage = () => Request.get(`page/notes/${context?.page?.id}`);
    const { data: page } = useQuery(
        ["get-notes-page", context?.page?.id],
        getPage
    );

    return (
        <div className="w-7/12 h-full py-16">
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
