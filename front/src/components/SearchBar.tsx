// Libraries
import clsx from "clsx";
import { ChangeEvent, useEffect, useRef } from "react";

// Local
import Icon from "components/Icon";
import { SetStateType } from "types/global";

interface SearchBarProps {
    searchPlace: Array<string>;
    setResult: SetStateType<Array<string>>;
    placeholder?: string;
    className?: string;
}

const defaultCss = clsx(
    "w-full shadow-sm shadow-neutral",
    "py-2 pl-16 pr-4",
    "bg-base-200 placeholder:text-base-content",
    "rounded-badge outline-none"
);

const SearchBar = ({
    searchPlace,
    setResult,
    placeholder,
    className,
}: SearchBarProps) => {
    const startSearchPlace = useRef(searchPlace);

    // Set the result to the search place when the component is mounted
    useEffect(() => {
        setResult(startSearchPlace.current);
    }, [setResult]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value as string;
        if (!search) return setResult(searchPlace);

        const result = searchPlace.filter((item) =>
            item.toLowerCase().includes(search.toLowerCase())
        );

        setResult(result);
    };

    const css = className ? className : defaultCss;
    return (
        <div className="relative flex text-xl text-base-content w-full">
            <Icon
                name="IoSearchOutline"
                library="io5"
                className="flex items-center h-full absolute left-6 text-primary"
            />

            <input
                className={css}
                placeholder={placeholder ? placeholder : "Search. . . "}
                onChange={handleChange}
                defaultValue=""
            />
        </div>
    );
};

export default SearchBar;
