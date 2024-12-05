// Library
import clsx from "clsx";

// Local
import Modal from "components/Modal";
import Point from "components/Point";
import useToggle from "hooks/useToggle";

const modalCss = clsx(
    "relative w-screen h-screen sm:w-[25vw] sm:h-[70vh] z-30",
    "flex flex-col items-start justify-start"
);

const Share = () => {
    const [isOpen, toggleOpen] = useToggle(false);

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => toggleOpen(false)}
                className={modalCss}
            >
                <div></div>
            </Modal>
            <Point
                text="Share"
                icon="IoMdShare"
                library="io"
                onClick={() => toggleOpen(true)}
            />
        </>
    );
};

export default Share;
