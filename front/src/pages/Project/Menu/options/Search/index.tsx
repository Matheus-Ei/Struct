// Local
import Point from "components/Point";
import useToggle from "hooks/useToggle";
import SearchModal from "./Modal";

const Search = () => {
    const [isOpen, toggleOpen] = useToggle(false);

    return (
        <>
            <Point
                text="Search"
                icon={{ name: "IoMdSearch", library: "io" }}
                onClick={() => toggleOpen(true)}
            />

            <SearchModal isOpen={isOpen} toggleOpen={toggleOpen} />
        </>
    );
};

export default Search;
