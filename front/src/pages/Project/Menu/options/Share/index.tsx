// Local
import Point from "components/Point";
import useToggle from "hooks/useToggle";
import ShareModal from "./Modal";

const Share = () => {
    const [isOpen, toggleOpen] = useToggle(false);

    return (
        <>
            <ShareModal isOpen={isOpen} toggleOpen={toggleOpen} />

            <Point
                text="Share"
                icon={{ name: "IoMdShare", library: "io" }}
                onClick={() => toggleOpen(true)}
            />
        </>
    );
};

export default Share;
