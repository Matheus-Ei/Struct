// Libraries
import clsx from "clsx";

// Local
import Icon from "components/Icon";
import { MouseEvent } from "react";
import Card from "./Card";

interface ModalProps {
    children: JSX.Element;
    isOpen: boolean;
    close: () => void;
    className?: string;
}

const defaultCss = clsx(
    "relative w-screen h-screen sm:w-[85vw] sm:h-[75vh] z-30",
    "flex flex-col items-start justify-start"
);

const bgCss = clsx(
    "fixed top-0 left-0",
    "w-screen h-screen",
    "flex items-center justify-center z-20",
    "bg-[rgba(0,0,0,0.3)]"
);

const Modal = ({ children, isOpen, close, className }: ModalProps) => {
    if (!isOpen) return null;
    const css = className ? className : defaultCss;

    const closeOnBgClick = (event: MouseEvent<HTMLElement>) => {
        if (event.target !== event.currentTarget) return;
        close();
    };

    return (
        <div className={bgCss} onClick={closeOnBgClick}>
            <Card>
                <div className={css}>
                    <button
                        onClick={close}
                        className="absolute right-4 top-2 sm:right-0 sm:top-0"
                    >
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
