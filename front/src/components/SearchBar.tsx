import { Dispatch, SetStateAction } from "react";
import Icons from "services/Icons";

interface SearchBarProps {
    allItems: Array<string>;
    setSearchItems: Dispatch<SetStateAction<Array<string>>>;
    placeholder?: string;
}

const SearchBar = ({
    allItems,
    setSearchItems,
    placeholder,
}: SearchBarProps) => {
    const onChange = (event: any) => {
        const searchValue = event.target.value as string;
        if (searchValue === "") {
            setSearchItems(allItems);
        }

        const newItems = allItems.filter((item) => {
            return item.toLowerCase().includes(searchValue.toLowerCase());
        });

        setSearchItems(newItems);
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
