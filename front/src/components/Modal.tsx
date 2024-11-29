// Libraries
import clsx from "clsx";

// Local
import Icon from "components/Icon";
import Card from "./Card";

interface ModalProps {
    children: JSX.Element;
    isOpen: boolean;
    close: () => void;
    className?: string;
}

const defaultCss = clsx(
    "relative w-[85vw] h-[75vh] z-30",
    "flex flex-col items-start justify-start"
);

const bgCss = clsx(
    "fixed top-0 right-0",
    "w-screen h-screen",
    "flex items-center justify-center z-20",
    "bg-[rgba(0,0,0,0.3)]"
);

const Modal = ({ children, isOpen, close, className }: ModalProps) => {
    if (!isOpen) return null;
    const css = className ? className : defaultCss;

    return (
        <div className={bgCss}>
            <Card>
                <div className={css}>
                    <button onClick={close} className="absolute right-0 top-0">
                        <Icon
                            name="IoMdClose"
                            library="io"
                            className="text-2xl"
                        />
                    </button>

                    {children}
                </div>
            </Card>
        </div>
    );
};

export default Modal;
