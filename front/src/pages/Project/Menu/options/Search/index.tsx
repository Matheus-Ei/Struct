// Local
import Point from "components/Point";
import useToggle from "hooks/useToggle";
import SearchModal from "./Modal";

const Search = () => {
    const [isOpen, toggleOpen] = useToggle(false);

    return (
        <>
            <SearchModal isOpen={isOpen} toggleOpen={toggleOpen} />

            <Point
                text="Search"
                icon={{ name: "IoMdSearch", library: "io" }}
                onClick={() => toggleOpen(true)}
            />
        </>
    );
};

export default Search;
