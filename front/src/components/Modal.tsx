// Local
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

    const styleName = className
        ? className
        : "relative w-[85vw] h-[75vh] flex flex-col items-start justify-start";

    const onClick = () => {
        close();
    };

    return (
        <div className="flex fixed top-0 right-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] items-center justify-center">
            <Card>
                <div className={styleName}>
                    <button
                        onClick={onClick}
                        className="absolute right-4 top-4"
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
