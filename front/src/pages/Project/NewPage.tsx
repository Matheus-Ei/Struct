import { useContext } from "react";
import { PagesContext } from ".";

const NewPage = () => {
    const context = useContext(PagesContext);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <h1>
                New Page - Parent:{" "}
                {context?.newParentPage ? context.newParentPage : "NULL"}
            </h1>
        </div>
    );
};

export default NewPage;
