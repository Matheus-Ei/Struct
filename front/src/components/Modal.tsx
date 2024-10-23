// Components
import Icons from "services/Icons";
import Card from "./Card";

interface ProjectModalProps {
    children: JSX.Element;
    isOpen: boolean;
    close: () => any;
}

const Modal = ({ children, isOpen, close }: ProjectModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="flex fixed top-0 right-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] items-center justify-center">
            <Card>
                <div className="relative w-[85vw] h-[75vh] flex flex-col items-start justify-start">
                    <button
                        onClick={() => {
                            close();
                        }}
                        className="absolute right-4 top-2"
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
