// Libraries
import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Local
import Icons from "services/Icons";

interface SearchBarProps {
    searchPlace: Array<string>;
    setResult: Dispatch<SetStateAction<Array<string>>>;
    placeholder?: string;
}

const SearchBar = ({ searchPlace, setResult, placeholder }: SearchBarProps) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value as string;

        if (search === "") {
            setResult(searchPlace);
        }

        const result = searchPlace.filter((item) => {
            return item.toLowerCase().includes(search.toLowerCase());
        });

        setResult(result);
    };

    return (
        <div className="relative flex text-xl text-base-content w-full">
            <button className="flex items-center h-full absolute left-3">
                <Icons name="IoSearchOutline" library="io5" />
            </button>

            <input
                className="py-2 pl-12 pr-4 bg-base-200 border border-primary rounded-btn placeholder:text-base-content w-full outline-none"
                placeholder={placeholder ? placeholder : "Search. . . "}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;
