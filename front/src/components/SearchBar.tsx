// Libraries
import clsx from "clsx";
import { ChangeEvent } from "react";

// Local
import Icons from "modules/Icons";
import { SetStateType } from "types/global";

interface SearchBarProps {
    searchPlace: Array<string>;
    setResult: SetStateType<Array<string>>;
    placeholder?: string;
}

const SearchBar = ({ searchPlace, setResult, placeholder }: SearchBarProps) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value as string;

        if (search === "") setResult(searchPlace);

        const result = searchPlace.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );

        setResult(result);
    };

    const cssInput = clsx(
        "w-full",
        "py-2 pl-12 pr-4",
        "bg-base-200 placeholder:text-base-content",
        "border border-primary rounded-btn outline-none"
    );

    return (
        <div className="relative flex text-xl text-base-content w-full">
            <button className="flex items-center h-full absolute left-3">
                <Icons name="IoSearchOutline" library="io5" />
            </button>

            <input
                className={cssInput}
                placeholder={placeholder ? placeholder : "Search. . . "}
                onChange={onChange}
            />
        </div>
    );
};

export default SearchBar;
