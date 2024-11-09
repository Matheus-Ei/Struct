import SearchBar from "components/SearchBar";
import { useState } from "react";
import Module from "./Module";
import modules from "./modules";

interface SearchElementProps {
    pageId?: number;
}

const SearchElement = ({ pageId }: SearchElementProps) => {
    const [searchModules, setSearchModules] = useState<Array<string>>(modules);

    const renderModules = (item: string, index: number) => {
        return <Module pageId={pageId} module={item} key={index} />;
    };

    return (
        <div className="flex flex-col w-full h-[500px] items-center justify-start">
            <SearchBar
                searchPlace={modules}
                setResult={setSearchModules}
                placeholder="Search modules . . ."
            />

            <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-x-6 gap-y-4">
                {searchModules.map(renderModules)}
            </div>
        </div>
    );
};

export default SearchElement;
