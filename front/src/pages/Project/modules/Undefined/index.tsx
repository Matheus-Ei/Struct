// Libraries
import { useContext } from "react";

// Local
import { PagesContext } from "pages/Project";
import SearchElement from "./SearchElement";
import Emoji from "components/Emoji";

const Undefined = () => {
    const context = useContext(PagesContext);

    return (
        <div className="flex flex-col w-full h-full items-center justify-center gap-2">
            <div className="flex flex-row gap-4 w-full text-start text-4xl">
                <Emoji symbol={context?.page.data?.emoji} />

                <h1 className="w-full text-start font-bold text-3xl">
                    {context?.page.data?.name}
                </h1>
            </div>

            <h1 className="w-full text-start text-lg mb-10">
                {context?.page.data?.description}
            </h1>

            <SearchElement pageId={context?.page.data?.id} />
        </div>
    );
};

export default Undefined;
