// Local
import clsx from "clsx";
import Icons from "services/Icons";
import Card from "./Card";

interface ModalProps {
    children: JSX.Element;
    isOpen: boolean;
    close: () => any;
    className?: string;
}

const Modal = ({ children, isOpen, close, className }: ModalProps) => {
    if (!isOpen) return null;

    const defaultCss = clsx(
        "relative w-[85vw] h-[75vh] z-30",
        "flex flex-col items-start justify-start"
    );
    const css = className ? className : defaultCss;

    const bgCss = clsx(
        "fixed top-0 right-0",
        "w-screen h-screen",
        "flex items-center justify-center z-20",
        "bg-[rgba(0,0,0,0.3)]"
    );

    return (
        <div className={bgCss}>
            <Card>
                <div className={css}>
                    <button
                        onClick={() => close()}
                        className="absolute right-0 top-0"
                    >
                        <Icons name="IoMdClose" library="io" size={25} />
                    </button>

                    {children}
                </div>
            </Card>
        </div>
    );
};

export default Modal;
